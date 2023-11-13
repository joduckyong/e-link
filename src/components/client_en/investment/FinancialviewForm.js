import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientBoardInfo } from 'store/boardEnReducer';
import AOS from 'aos';
import classnames from 'classnames';
import { downloadFile } from 'common/download';

const FinancialviewForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boardTitle = useSelector((state) => state.boardEnReducer.dataInfo.boardTitle);
  const createdDatetime = useSelector((state) => state.boardEnReducer.dataInfo.createdDatetime);
  const boardContents = useSelector((state) => state.boardEnReducer.dataInfo.boardContents);
  const fileList = useSelector((state) => state.boardEnReducer.files);
  const prevBoardId = useSelector((state) => state.boardEnReducer.prevNextData?.prevBoardId);
  const nextBoardId = useSelector((state) => state.boardEnReducer.prevNextData?.nextBoardId);

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
    <div className="sub sub03">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            Financial Information
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            <li>
              <NavLink to="/en">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                IR Center
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
                  <NavLink to="/en/investment/management" className="on">IR Center</NavLink>
                </li>
                <li>
                  <NavLink to="/en/pr/press-list">PR Center</NavLink>
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
                Financial Information
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/investment/management">
                    Management Information
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/financial" className="on">Financial Information</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/credit">Disclosure Information</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/announce">Announcement</NavLink>
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
              <p className="mt30" dangerouslySetInnerHTML={{ __html: boardContents }}></p>
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
              <NavLink to={prevBoardId && `/en/investment/financial-view/${prevBoardId}`} className={classnames('prev-btn', { disable: !prevBoardId })}>
                Previous
              </NavLink>
              <NavLink to="/en/investment/financial" className="list-btn">
                List
              </NavLink>
              <NavLink to={nextBoardId && `/en/investment/financial-view/${nextBoardId}`} className={classnames('next-btn', { disable: !nextBoardId })}>
                Next
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialviewForm;
