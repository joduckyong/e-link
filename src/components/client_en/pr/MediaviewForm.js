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
            Media
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            <li>
              <NavLink to="/en">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                PR Center
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/en/company/lselink">
                    Company
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/e-link/evcharge">Business</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/management">IR Center</NavLink>
                </li>
                <li>
                  <NavLink to="/en/pr/press-list" className="on">PR Center</NavLink>
                </li>
                <li>
                  <NavLink to="/en/recruit/people">Recruitment</NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus">Contact Us</NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
              Media
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/pr/press-list">
                    Press
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/pr/media-list" className="on">Media</NavLink>
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
              <NavLink to="/en/pr/media-list" className="list-btn">
                List
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaviewForm;
