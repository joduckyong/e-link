import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEv } from 'store/EvReducer';
import { Container as MapDiv, NaverMap, useNavermaps, Marker, Overlay, useMap } from 'react-naver-maps';
import {makeMarkerClustering} from 'common/marker-cluster';

function getBoundsData(bounds, data, getDataInBounds) {
  let __data = data.filter(e => (e.locInfo.split(",")[0] >= bounds.getMin()._lat && e.locInfo.split(",")[0] <= bounds.getMax()._lat ));
  getDataInBounds(__data);
  // console.log(__data);
}

//소수점 뒤에 0 제거
function zeroCut(nn) {
  if (nn == 0 || nn == undefined || nn == null) return nn;
  nn = nn + "";
  let num3Arr = nn.split(".");
  let arr1 = num3Arr[1];
  let isNotZero = false;
  let result = "";
  for (let i = arr1.length;i > 0; i--) {
    let n = i-1;
    let charA = arr1.charAt(n);
    if (charA == '0') {
      if (isNotZero == true) {
        result += "0";
      } else {
        result += "";
      }
    } else {
      isNotZero = true;
      result += arr1.charAt(n);
    }
  }
  return num3Arr[0] + "." + result.split("").reverse().join("");

}

const MarkerCluster = ({navermaps, data, getDataInBounds, activeLocInfo}) => {

  // const navermaps = useNavermaps();
  const map = useMap();

  const MarkerClustering = makeMarkerClustering(window.naver)

  const blue = {
    content:
    '<div style="curosr:pointer; width:50px; height:50px; background:#5C6FBC; display:flex; justify-content: center; align-items: center; border-radius: 50%; font-weight: 600; font-size: 18px; color: #FFFFFF;"></div>',
    size: navermaps.Size(40, 40),
    anchor: navermaps.Point(20, 20),
  }

  const orange = {
    content:
    '<div style="curosr:pointer; width:50px; height:50px; background:#EC6800; display:flex; justify-content: center; align-items: center; border-radius: 50%; font-weight: 600; font-size: 18px; color: #FFFFFF;"></div>',
    size: navermaps.Size(40, 40),
    anchor: navermaps.Point(20, 20),
  }
  
  // const data = _data;

  const clustering = () => {
    const markers = [];
    const infoWindows = [];

    for (let i = 0, ii = data.length; i < ii; i++) {
      const spot = data[i],
        latlng = new navermaps.LatLng(spot.locInfo.split(",")[0], spot.locInfo.split(",")[1]),
        marker = new navermaps.Marker({
          position: latlng,
        });

      const contentString = [
          '<div class="iw_inner">',
          '   <h3>'+data[i].rechgstNm+'</h3>',
          '   <p>'+(data[i].addr ?? "")+'<br />',
          '       '+(data[i].operInstTelno ?? "")+'<br />',
          '   </p>',
          '</div>'
      ].join('');

      const infowindow = new navermaps.InfoWindow({
        content: contentString,
      });

      markers.push(marker);
      infoWindows.push(infowindow);
    }
  
    const getClickHandler = (seq) => {
      return function(e) {
          const marker = markers[seq],
              infoWindow = infoWindows[seq];

          if (infoWindow.getMap()) {
              infoWindow.close();
          } else {
              infoWindow.open(map, marker);
          }
    }
  }
  
  for (let i=0, ii=markers.length; i<ii; i++) {
    navermaps.Event.addListener(markers[i], 'click', getClickHandler(i));
  }

  if(activeLocInfo){
    const _lan = zeroCut(activeLocInfo.split(",")[0]);
    const _lng = zeroCut(activeLocInfo.split(",")[1]);
    const seq = markers.findIndex((item) => item.position._lat.toString() === _lan && item.position._lng.toString() === _lng);
    const marker = markers[seq],
        infoWindow = infoWindows[seq];

    const latLng = new navermaps.LatLng(_lan, _lng);
    map.setCenter(latLng.destinationPoint(0, 500));
    map.setZoom(10);
    
    if (infoWindow.getMap()) {
        infoWindow.close();
    } else {
        infoWindow.open(map, marker);
    }
  }

    const markerClustering = new MarkerClustering({
      minClusterSize: 2,
      maxZoom: 30,
      map: map,
      markers: markers,
      disableClickZoom: false,
      gridSize: 120,
      icons: [
        blue
      ],
      // icons: [
      //   gray,
      //   blue,
      //   orange,
      //   orangeBig,
      // ],
      // indexGenerator: [1],
      stylingFunction: function (clusterMarker, count) {
        // console.log(clusterMarker)
        clusterMarker
          .getElement()
          .querySelector('div:first-child').innerText = count

        navermaps.Event.addListener(clusterMarker, 'mouseover', function(e) {
            // console.log(e);
            let cMarker = e.overlay;
            cMarker.setIcon(orange);
            cMarker
              .getElement()
              .querySelector('div:first-child').innerText = count
            
        });

        navermaps.Event.addListener(clusterMarker, 'mouseout', function(e) {
          // console.log(e);
          let cMarker = e.overlay;
          cMarker.setIcon(blue);
          cMarker
              .getElement()
              .querySelector('div:first-child').innerText = count
        });

        // navermaps.Event.addListener(clusterMarker, 'click', function(e) {
        //     console.log(e);
        // });
      },
      
    });

    return markerClustering
  }

  const [cluster, setCluster] = useState(() => clustering());

  useEffect(() => {
    cluster.setMap(null); //클러스터링 초기화
    setCluster(clustering());
  }, [data, activeLocInfo]);

  navermaps.Event.addListener(map, "bounds_changed", function(bounds) {
    getBoundsData(bounds, data, getDataInBounds);
  });

  return <Overlay element={cluster} />
}


const FindForm = () => {

  const navermaps = useNavermaps();
  const lat = 35.1595704;
  const lon = 127.005399

  const dispatch = useDispatch();
  const findList = useSelector((state) => state.EvReducer.data);

  const [draggable, setDraggable] = useState(true);
  const [disableKineticPan, setDisableKineticPan] = useState(true);
  const [tileTransition, setTileTransition] = useState(true);
  const [minZoom, setMinZoom] = useState(7);
  const [scaleControl, setScaleControl] = useState(true);
  const [dataInBounds, setDataInBounds] = useState(findList);
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [type, setType] = useState('name');
  const [activeLocInfo, setActiveLocInfo] = useState('');

  const handleZoomChanged = useCallback((zoom) => {
    console.log(`zoom: ${zoom}`)
  }, []);

  const getDataInBounds = (d) => {
    setDataInBounds(d);
  }

  useEffect(() => {
    const url = '/api/m-service-mobile/rechgst/getELinkRechgsts';
    const newList = { url: url };
    dispatch(selectEv(newList));
  }, [dispatch]);

  useEffect(() => {
    setDataInBounds(findList)
  }, [findList])

  const onSearch = () => {
    const url = '/api/m-service-mobile/rechgst/searchRechgst';
    const keywordName = type === 'name' ? searchKeyword : '';
    const keywordAddr = type === 'addr' ? searchKeyword : '';
    const newList = { url: url, rechgstNm: keywordName ?? "", addr: keywordAddr ?? "" };
    setActiveLocInfo("");
    dispatch(selectEv(newList));
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const btnTab = (type) => {
    setType(type);
    setSearchKeyword('');
  }

  const clickData = (index, locInfo) => {
    setActiveLocInfo(locInfo);
  }

  return (
    <>
      <section className="ev-find-sect">
        <article className="txt-wp active">
          <div className="ttl-wp">
            <h1>
              ELVIS 충전소 찾기<div className="mo-close"></div>
            </h1>
            <div className="search-wp">
              <input
                  type="text"
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  value={searchKeyword || ''}
                  onKeyPress={onKeyPress}
              />
              <button className="sbtn" onClick={() => onSearch()}>
                <img src="/img/common/ico-search.svg" alt="" />
              </button>
            </div>
          </div>
          <ul className="tab-link">
            <li className={type === 'name' ? 'active' : ''} onClick={() => btnTab('name')}>충전소명</li>
            <li className={type === 'addr' ? 'active' : ''} onClick={() => btnTab('addr')}>지역명</li>
          </ul>
          <ul className="tab-cont">
          {dataInBounds.map((list, index) => (
            <li
              key={index}
              onClick={(e) => clickData(index, list.locInfo)}
              // onMouseOver={() => setMouseOverMarker(list.locInfo)} 
              // onMouseOut={() => setMouseOverMarker("")}
              >
              <h2>{list.rechgstNm}</h2>
              <p>{list.addr} </p>
              <h3 className="orange">
                <div className="cir"></div>{list.utztnPsbltyHr}{list.highCnt > 0 && `(급속${list.highCnt})`} {list.lowCnt > 0 && `(완속${list.lowCnt})`}
              </h3>
            </li>
          ))}
          </ul>
        </article>

        <article className="map-wp">
          {/* <img src="/img/ev/evf_map.png" alt="" /> */}
          {/* <div id="map" ref={mapRef} style={{ width: "100%", height: "100%" }} /> */}
          <div id="map" style={{ width: "100%", height: "100%" }} >
            <MapDiv
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              <NaverMap
                zoomControl
                zoomControlOptions={{
                  position: navermaps.Position.TOP_RIGHT,
                }}
                defaultCenter={new navermaps.LatLng(lat, lon)}
                defaultZoom={1}
                onZoomChanged={handleZoomChanged}
                // 지도 인터랙션 옵션
                draggable={draggable}
                pinchZoom={draggable}
                scrollWheel={draggable}
                keyboardShortcuts={draggable}
                disableDoubleTapZoom={!draggable}
                disableDoubleClickZoom={!draggable}
                disableTwoFingerTapZoom={!draggable}
                // 관성 드래깅 옵션
                disableKineticPan={disableKineticPan}
                // 타일 fadeIn 효과
                tileTransition={tileTransition}
                // min/max 줌 레벨
                minZoom={minZoom}
                maxZoom={17}
                // 지도 컨트롤
                scaleControl={scaleControl}
                logoControl={scaleControl}
                mapDataControl={scaleControl}
                // mapTypeControl={scaleControl}
              >
                <MarkerCluster 
                  navermaps={navermaps} 
                  data={findList} 
                  getDataInBounds={getDataInBounds}
                  activeLocInfo={activeLocInfo}
                />
                {/* <Marker
                  position={new navermaps.LatLng(mouseOverMarker.split(",")[0], mouseOverMarker.split(",")[1])}
                  animation={1}
                  zIndex={999}
                /> */}
              </NaverMap>
            </MapDiv>
          </div>
          {/* <div className="cir-wp">
            <div className="num orange" style={{ width: '40px', height: '40px' }}>
              4
            </div>
            <div className="num orange big" style={{ width: '70px', height: '70px' }}>
              10
            </div>
            <div className="num gray" style={{ width: '30px', height: '30px' }}>
              1
            </div>
            <div className="num blue" style={{ width: '50px', height: '50px' }}>
              5
            </div>
          </div>
          */}
          {/* <ul className="cir-type">
            <li>
              <div className="cir orange"></div>충전가능
            </li>
            <li>
              <div className="cir blue"></div>충전대기
            </li>
            <li>
              <div className="cir gray"></div>점검중
            </li>
          </ul>  */}
        </article>
      </section>
    </>
  );
};

export default FindForm;
