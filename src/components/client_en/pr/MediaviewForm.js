import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientBoardInfo } from 'store/boardEnReducer';
import { downloadFile } from 'common/download';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import AOS from 'aos';
import classnames from 'classnames';

SwiperCore.use([Navigation, Pagination]);

const MediaviewForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boardTitle = useSelector((state) => state.boardEnReducer.dataInfo?.boardTitle);
  const createdDatetime = useSelector((state) => state.boardEnReducer.dataInfo?.createdDatetime);
  const boardContents = useSelector((state) => state.boardEnReducer.dataInfo?.boardContents);
  const url = useSelector((state) => state.boardEnReducer.dataInfo?.url);
  const fileList = useSelector((state) => state.boardEnReducer?.files);

  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    dispatch(selectClientBoardInfo(id));
  }, [dispatch, id]);

  const onClickMenuLink = (menu) => {
    if (menu === '1') {
      setActiveMenu1(!activeMenu1);
      setActiveMenu2(false);
    } else if (menu === '2') {
      setActiveMenu1(false);
      setActiveMenu2(!activeMenu2);
    }
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
          <div className="con4-media-view">
            <h3>{boardTitle}</h3>
            <div className="list-num-wrap">
              <div className="list-num">{createdDatetime}</div>
              <ul>
                {fileList.map(
                  (list, index) =>
                    list.fileType !== '1' && (
                      <li style={{ padding: '5px 0 5px 0' }}>
                        <NavLink to="" onClick={() => downloadFile(list.fileNm, list.fileOriginNm)}>
                          <div className="file">{list.fileOriginNm}</div>
                        </NavLink>
                      </li>
                    ),
                )}
              </ul>
            </div>
            <div className="view-area">
              {console.log('url==' + url)}
              {url !== '' && url !== null ? <iframe title="youtubeFrame" width={'100%'} height={600} src={`${getEmbedVideoUrl(url)}`}></iframe> : ''}
              <p className="view-txt" dangerouslySetInnerHTML={{ __html: boardContents }}></p>
            </div>
            <div className="view-control">
              <NavLink to="/pr/media-list" className="list-btn">
                목록
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaviewForm;
