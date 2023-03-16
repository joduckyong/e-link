import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientBoard, selectClientBoardInfoWithPinup } from 'store/boardReducer';
import Pagination from 'react-js-pagination';
import ViewImage from 'components/common/ViewImage';
import AOS from 'aos';
import classnames from 'classnames';
import moment from 'moment';

export function changeFormat(date, format) {
  //moment 변환을 함수로 미리 빼 두어서 사용.
  if (moment(date).isValid()) {
    return moment(date).format(format);
  } else {
    return null;
  }
}

const MedialistForm = () => {
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardReducer.data);
  const boardInfo = useSelector((state) => state.boardReducer.dataInfo);
  const [searchKeyword, setSearchKeyword] = useState(null);
  const totalCount = useSelector((state) => state.boardReducer.totalCount);
  const [page, setPage] = useState(1);

  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    const newList = { boardId: 'MED', pageIndex: page };
    dispatch(selectClientBoard(newList));
    dispatch(selectClientBoardInfoWithPinup());
  }, [dispatch, page]);

  const pageClick = (page) => {
    setPage(page);
    onSearch(page);
  };

  const onSearch = (page) => {
    const newList = { boardId: 'MED', pageIndex: page, searchKeyword: searchKeyword };
    dispatch(selectClientBoard(newList));
    dispatch(selectClientBoardInfoWithPinup());
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(0);
    }
  };

  const onClickMenuLink = (menu) => {
    if (menu === '1') {
      setActiveMenu1(!activeMenu1);
      setActiveMenu2(false);
    } else if (menu === '2') {
      setActiveMenu1(false);
      setActiveMenu2(!activeMenu2);
    }
  };

  const getImageUrl = (url) => {
    let imgUrl = '';
    if (url) {
      let param = url.indexOf('v=') > -1 ? url.substring(url.indexOf('v=') + 2) : '';
      imgUrl = 'https://img.youtube.com/vi/' + param + '/0.jpg';
    }

    return imgUrl;
  };

  const getEmbedVideoUrl = (url) => {
    let videoUrl = '';
    if (url) {
      let param = url.indexOf('v=') > -1 ? url.substring(url.indexOf('v=') + 2) : '';
      videoUrl = 'https://youtube.com/embed/' + param;
    }

    return videoUrl;
  };

  return (
    <div className="sub sub04">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            미디어
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            <li>
              <NavLink to="/">
                <img src="./../../img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                홍보센터
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/company/lselink">회사소개</NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/evcharge">사업영역</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/management">투자정보</NavLink>
                </li>
                <li>
                  <NavLink to="/pr/press-list" className="on">
                    홍보센터
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recruit/people">채용정보</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="">EV 충전소</NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                미디어
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/pr/press-list">보도자료</NavLink>
                </li>
                <li>
                  <NavLink to="/pr/media-list" className="on">
                    미디어
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <div className="con4-media">
            <h3>LS E-Link 내일의 에너지를 충전합니다.</h3>
            {boardInfo && (
              <div className="big-media">
                <div className="img" style={{ width: 740 }}>
                  {/* <img src="./../../img/sub/sub04-2-big.jpg" alt="" /> */}
                  <iframe title="youtubeFrame" width={'100%'} height={400} src={`${getEmbedVideoUrl(boardInfo.url)}`}></iframe>
                </div>
                <div className="txt">
                  <div className="date">{changeFormat(boardInfo.createdDatetime, 'yyyy-MM-DD') || ''}</div>
                  <div className="tit">{boardInfo.boardTitle}</div>
                  <NavLink to={`/pr/media-view/${boardInfo.boardId}`}>
                    <img src="../img/sub/media-btn.svg" alt="" />
                  </NavLink>
                </div>
              </div>
            )}
            <div className="media-list">
              <div className="list-top">
                <p className="t-ver">
                  Total <strong>{totalCount}</strong> / {Math.ceil(totalCount / 10)} Page
                </p>
                <div className="sh-box">
                  <input type="text" onChange={(e) => setSearchKeyword(e.target.value)} value={searchKeyword || ''} onKeyPress={onKeyPress} />
                  <button onClick={() => onSearch(0)}>
                    <img src="./../../img/common/ico-search.svg" alt="" />
                  </button>
                </div>
              </div>
              <ul className="">
                {boardList.map((list, index) => (
                  <li>
                    <NavLink to={`/pr/media-view/${list.boardId}`}>
                      <div className="list-img">
                        {list.thumbNm ? (
                          <div className="in" style={{ backgroundSize: 'cover' }}>
                            <ViewImage fileNm={list.thumbNm.replace('s_', '')} basicStyle={true} />
                          </div>
                        ) : list.url ? (
                          <div className="in" style={{ background: `url(${getImageUrl(list.url)}) center no-repeat`, backgroundSize: 'cover' }}></div>
                        ) : (
                          <div className="in" style={{ backgroundSize: 'cover' }}>
                            <img src="/img/logo/non.png" alt="" />
                          </div>
                        )}
                      </div>
                      <div className="list-tit">{list.boardTitle}</div>
                      <div className="list-date">{list.createdDatetime}</div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="paging">
              <Pagination
                activePage={page}
                itemsCountPerPage={3}
                totalItemsCount={totalCount}
                pageRangeDisplayed={10}
                prevPageText={'‹'}
                nextPageText={'›'}
                onChange={pageClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedialistForm;
