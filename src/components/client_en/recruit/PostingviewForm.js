import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientBoardInfo } from 'store/boardEnReducer';
import { downloadFile } from 'common/download';
import AOS from 'aos';
import classnames from 'classnames';

const PostingviewForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boardTitle = useSelector((state) => state.boardEnReducer.dataInfo.boardTitle);
  const boardContents = useSelector((state) => state.boardEnReducer.dataInfo.boardContents);
  const fileList = useSelector((state) => state.boardEnReducer.files);
  const boardStartDatetime = useSelector((state) => state.boardEnReducer.dataInfo.boardStartDatetime);
  const boardEndDatetime = useSelector((state) => state.boardEnReducer.dataInfo.boardEndDatetime);
  const url = useSelector((state) => state.boardEnReducer.dataInfo.url);
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
    <div className="sub sub05">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            채용공고
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            <li>
              <NavLink to="/">
                <img src="./../../img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                채용정보
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
                  <NavLink to="/pr/press-list">홍보센터</NavLink>
                </li>
                <li>
                  <NavLink to="/recruit/people" className="on">
                    채용정보
                  </NavLink>
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
                채용공고
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/recruit/people">인재상</NavLink>
                </li>
                <li>
                  <NavLink to="/recruit/benefits">복리후생</NavLink>
                </li>
                <li>
                  <NavLink to="/recruit/posting" className="on">
                    채용공고
                  </NavLink>
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
            <div className="list-num-wrap">
              <div className="list-num">
                {boardStartDatetime} - {boardEndDatetime}
              </div>
              <ul>
                {fileList.map((list, index) => (
                  <li style={{ padding: '5px 0 5px 0' }}>
                    <NavLink to="" onClick={() => downloadFile(list.fileNm, list.fileOriginNm)}>
                      <div className="file">{list.fileOriginNm}</div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="view-area">
              <p className="mt30" dangerouslySetInnerHTML={{ __html: boardContents }}></p>
            </div>
            <div className="view-control">
              <NavLink to={prevBoardId && `/recruit/posting-view/${prevBoardId}`} className={classnames('prev-btn', { disable: !prevBoardId })}>
                이전글
              </NavLink>
              <div class="btn-wrap">
                <NavLink to="/recruit/posting" className="list-btn">
                  목록
                </NavLink>
                <NavLink to="" className="apply-btn" onClick={() => window.open(url, '_blank')}>
                  지원서 작성
                </NavLink>
              </div>
              <NavLink to={nextBoardId && `/recruit/posting-view/${nextBoardId}`} className={classnames('next-btn', { disable: !nextBoardId })}>
                다음글
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostingviewForm;
