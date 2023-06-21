import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEv } from 'store/EvReducer';
import { Container as MapDiv, NaverMap, useNavermaps, Marker, Overlay, useMap } from 'react-naver-maps';
import {makeMarkerClustering} from 'common/marker-cluster';

// function getBoundsData(bounds, data, getDataInBounds) {
//   let __data = data.filter(e => (e.locInfo.split(",")[0] >= bounds.getMin()._lat && e.locInfo.split(",")[0] <= bounds.getMax()._lat ));
//   getDataInBounds(__data);
//   // console.log(__data);
// }

const MarkerCluster = ({data}) => {

  const navermaps = useNavermaps();
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

    for (var i = 0, ii = data.length; i < ii; i++) {
      var spot = data[i],
        latlng = new navermaps.LatLng(spot.locInfo.split(",")[0], spot.locInfo.split(",")[1]),
        marker = new navermaps.Marker({
          position: latlng,
        });

      markers.push(marker);
    }

    const markerClustering = new MarkerClustering({
      minClusterSize: 1,
      maxZoom: 30,
      map: map,
      markers: markers,
      disableClickZoom: true,
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
            console.log(e);
            let cMarker = e.overlay;
            cMarker.setIcon(orange);
            cMarker
              .getElement()
              .querySelector('div:first-child').innerText = count
            
        });

        navermaps.Event.addListener(clusterMarker, 'mouseout', function(e) {
          console.log(e);
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
    setCluster(clustering());
}, [data]);

  // navermaps.Event.addListener(map, "bounds_changed", function(bounds) {
  //   getBoundsData(bounds, data, getDataInBounds);
  // });

  return <Overlay element={cluster} />
}


const FindForm = () => {

  let _data = [
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000001",
      "rechgstNm": "쿠팡 부산2캠프 부산2캠프제1충전소",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "부산 사상구 새벽로 99",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "35.1502,128.9815",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": "2023-05-02 16:56:25.000",
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 1
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000003",
      "rechgstNm": "쿠팡 부산2캠프 부산2캠프제2충전소",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "부산 입니다.",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "35.20418836942093,129.07751491839548",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000004",
      "rechgstNm": "충전소1",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 4 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "37.15120216,127.05882791",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000005",
      "rechgstNm": "충전소2",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 5 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "36.58983435,128.01221855",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000006",
      "rechgstNm": "충전소3",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 6 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "36.45233748,127.21091471",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000007",
      "rechgstNm": "충전소4",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 7 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "38.18770048,128.58271469",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000008",
      "rechgstNm": "충전소5",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 8 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "35.89231981,128.64345545",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000009",
      "rechgstNm": "충전소6",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 9 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "36.94499381,127.70505351",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000010",
      "rechgstNm": "충전소7",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 10 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "37.07752506,127.05770261",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000011",
      "rechgstNm": "충전소8",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 11 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "35.02048014,127.77985607",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000012",
      "rechgstNm": "충전소9",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 12 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "36.00342549,129.38125275",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000013",
      "rechgstNm": "충전소10",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 13 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "37.55038341,126.92935115",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000014",
      "rechgstNm": "충전소11",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 14 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "35.15276899,126.88119723",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000015",
      "rechgstNm": "충전소12",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 15 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "37.33953297,127.48762685",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000016",
      "rechgstNm": "충전소13",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 16 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "36.03996462,129.37237675",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000017",
      "rechgstNm": "충전소14",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 17 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "37.27594171,127.45803888",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000018",
      "rechgstNm": "충전소15",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 18 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "36.62205754,127.46123671",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000019",
      "rechgstNm": "충전소16",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 19 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "35.55321975,128.48273629",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
    {
      "regUserNo": null,
      "regUserNm": null,
      "regDttm": null,
      "uptUserNo": null,
      "uptUserNm": null,
      "uptDttm": null,
      "instId": "COUPANG",
      "instNm": null,
      "rechgstId": "000020",
      "rechgstNm": "충전소17",
      "rgnCd": null,
      "rgnNm": null,
      "addr": "서울특별시 송파구 성내천로 20 (오금동, 송파레미니스)",
      "addrDtl": null,
      "rechgstDivCd": null,
      "rechgstDivNm": null,
      "rechgstDivCdDtl": null,
      "rechgstDivCdDtlNm": null,
      "locInfo": "37.39405363,127.24904785",
      "utztnPsbltyHr": "24시간 이용가능",
      "prkgfeFreeYn": "Y",
      "operInstNm": null,
      "operInstTelno": "1660-3175",
      "statusUptDttm": null,
      "rechgrs": null,
      "highCnt": 1,
      "lowCnt": 0
    },
  ]

  const navermaps = useNavermaps();

  const dispatch = useDispatch();
  const findList = useSelector((state) => state.EvReducer.data);

  const [draggable, setDraggable] = useState(true);
  const [disableKineticPan, setDisableKineticPan] = useState(true);
  const [tileTransition, setTileTransition] = useState(true);
  const [minZoom, setMinZoom] = useState(7);
  const [scaleControl, setScaleControl] = useState(true);
  // const [dataInBounds, setDataInBounds] = useState(findList);
  const [mouseOverMarker, setMouseOverMarker] = useState('');
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [type, setType] = useState('name');

  const handleZoomChanged = useCallback((zoom) => {
    console.log(`zoom: ${zoom}`)
  }, []);

  // const getDataInBounds = (d) => {
  //   setDataInBounds(d);
  // }

  const onSearch = () => {
    const url = '/api/m-service-mobile/rechgst/searchRechgst';
    const keywordName = type === 'name' ? searchKeyword : '';
    const keywordAddr = type === 'addr' ? searchKeyword : '';
    const newList = { url: url, rechgstNm: keywordName, addr: keywordAddr };
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
          {findList.map((list, index) => (
            <li 
              key={index} 
              onMouseOver={() => setMouseOverMarker(list.locInfo)} 
              onMouseOut={() => setMouseOverMarker("")}>
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
                defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
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
                <MarkerCluster data={findList}/>
                <Marker
                  position={new navermaps.LatLng(mouseOverMarker.split(",")[0], mouseOverMarker.split(",")[1])}
                  animation={1}
                  zIndex={999}
                />
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
          <ul className="cir-type">
            <li>
              <div className="cir orange"></div>충전가능
            </li>
            <li>
              <div className="cir blue"></div>충전대기
            </li>
            <li>
              <div className="cir gray"></div>점검중
            </li>
          </ul> 
        </article>
      </section>
    </>
  );
};

export default FindForm;
