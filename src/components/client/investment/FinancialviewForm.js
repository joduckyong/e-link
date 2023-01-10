import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientBoardInfo } from 'store/boardReducer';
import AOS from 'aos';
import classnames from 'classnames';
import { downloadFile } from 'common/download';

const FinancialviewForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boardTitle = useSelector((state) => state.boardReducer.dataInfo.boardTitle);
  const createdDatetime = useSelector((state) => state.boardReducer.dataInfo.createdDatetime);
  const boardContents = useSelector((state) => state.boardReducer.dataInfo.boardContents);
  const fileList = useSelector((state) => state.boardReducer.files);
  const prevBoardId = useSelector((state) => state.boardReducer.prevNextData.prevBoardId);
  const nextBoardId = useSelector((state) => state.boardReducer.prevNextData.nextBoardId);

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

  return (
    <div className="sub sub04">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            재무정보
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            <li>
              <NavLink to="/">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                투자정보
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/company/lselink">회사소개</NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/evcharge">사업영역</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/management" className="on">
                    투자정보
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pr/press-list">홍보센터</NavLink>
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
                재무정보
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/investment/management">경영정보</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/financial" className="on">
                    재무정보
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/investment/credit">공시정보</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/announce">공고</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <div className="con4-list-view">
            <h3 className="tit">{boardTitle}</h3>
            <div className="list-num">{createdDatetime}</div>
            <div className="view-area">
              <p className="mt30">{boardContents}</p>
            </div>
            {fileList.map((list, index) => (
              <div className="list-num-wrap">
                <div className="file">
                  <button className="btn-down" onClick={() => downloadFile(list.fileNm, list.fileOriginNm)}>
                    <div className="list-num">{list.fileOriginNm}</div>
                  </button>
                </div>
              </div>
            ))}
            <div className="view-control">
              <NavLink to={prevBoardId && `/investment/financial-view/${prevBoardId}`} className={classnames('prev-btn', { disable: !prevBoardId })}>
                이전글
              </NavLink>
              <NavLink to="/investment/financial" className="list-btn">
                목록
              </NavLink>
              <NavLink to={nextBoardId && `/investment/financial-view/${nextBoardId}`} className={classnames('next-btn', { disable: !nextBoardId })}>
                다음글
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialviewForm;
