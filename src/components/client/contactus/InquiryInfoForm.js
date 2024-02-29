import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientContactUsInfo } from 'store/contactUsReducer';
import AOS from 'aos';
import classnames from 'classnames';
import { downloadFile } from 'common/download';

const InquiryInfoForm = () => {
  const id = new URL(window.location.href).searchParams.get('id');
  const mail = new URL(window.location.href).searchParams.get('mail');
  const type = new URL(window.location.href).searchParams.get('type');

  const contactusInfo = useSelector((state) => state.contactUsReducer);
  const prevBoardId = useSelector(
    (state) => state.contactUsReducer.prevNextData?.prevBoardId,
  );
  const nextBoardId = useSelector(
    (state) => state.contactUsReducer.prevNextData?.nextBoardId,
  );

  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    // console.log('id === ' + id);
    // console.log('mail === ' + mail);

    const newList = { contactId: id, contactMail: mail };
    dispatch(selectClientContactUsInfo(newList));
  }, [dispatch, id, mail]);

  const onClickMenuLink = (menu) => {
    if (menu === '1') {
      setActiveMenu1(!activeMenu1);
      setActiveMenu2(false);
    } else if (menu === '2') {
      setActiveMenu1(false);
      setActiveMenu2(!activeMenu2);
    }
  };

  // const page = (id, mail) => {
  //   console.log('id ===========' + id);
  //   console.log('mail ===========' + mail);
  //   if (id != null) {
  //     return navigate(`/contactUs/inquiryInfo?id=${id}&mail=${mail}`);
  //   }
  // };
  return (
    <div className="sub sub06 qa_sub06">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-delay="200"
          >
            Contact us
          </h2>
          <ul
            className="path"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <li>
              <NavLink to="/">
                <img src="./../img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                Contact us
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
                  <NavLink to="/recruit/people">채용정보</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/consult" className="on">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">EV 충전소</NavLink>
                </li>
              </ul>
            </li>
            {/*<li className="on link">
                            <NavLink to="/contactus" onClick={(e) => onClickMenuLink('2')}>Contact us</NavLink>
                        </li>*/}
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                질의하기
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/contactus/consult">상담신청</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/inconvenience">불편신고</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/inquiry" className="on">
                    질의하기
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-slide-wrap">
        <div className="nav-slide">
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
              <NavLink to="/contactus/consult">상담신청</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/contactus/inconvenience">불편신고</NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/contactus/inquiry" className="on">
                질의하기
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="content view-wp">
        <div className="wrap">
          <h3
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            고객님의 질의와 소중한
            <br className="mBr" /> 제안을 받습니다.
          </h3>
          <div className="tab_box">
            <NavLink to="/contactus/inquiry">질의하기</NavLink>
            <NavLink to="/contactus/inquiry2" className="on">
              질의내역
            </NavLink>
          </div>
          {type === 'C' && (
            <>
              <div className="ttl-wp">
                <p>{contactusInfo.dataInfo.contactTitle}</p>
                <div className="info">
                  <p>
                    {contactusInfo.dataInfo.contactNm}
                    <span>|</span>
                  </p>
                  <p>{contactusInfo.dataInfo.createdDatetime}</p>
                </div>
              </div>
              <div className="cont-wp">
                <pre>{contactusInfo.dataInfo.contactContents}</pre>
              </div>
              <div className="list-num-wrap">
                <div className="file">
                  <button
                    className="btn-down"
                    onClick={() =>
                      downloadFile(
                        contactusInfo.dataInfo.fileNm,
                        contactusInfo.dataInfo.fileOriginNm,
                      )
                    }
                  >
                    <div className="list-num">
                      {contactusInfo.dataInfo.fileOriginNm}
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}
          {contactusInfo.dataInfo.contactRecontents && type === 'V' && (
            <>
              <div className="ttl-wp">
                <p>답변 입니다.</p>
                <div className="info">
                  <p>
                    관리자
                    <span>|</span>
                  </p>
                  <p>{contactusInfo.dataInfo.updatedDatetime}</p>
                </div>
              </div>
              <div className="cont-wp">
                <div
                  dangerouslySetInnerHTML={{
                    __html: contactusInfo.dataInfo.contactRecontents,
                  }}
                ></div>
              </div>
            </>
          )}

          <div className="view-control">
            <NavLink
              to={
                prevBoardId &&
                `/contactUs/inquiryInfo?id=${prevBoardId}&mail=${mail}&type=C`
              }
              className={classnames('prev-btn', { disable: !prevBoardId })}
            >
              이전글
            </NavLink>
            <NavLink
              to={`/contactUs/inquiryList?mail=${mail}`}
              className="list-btn"
            >
              목록
            </NavLink>
            <NavLink
              to={
                nextBoardId &&
                `/contactUs/inquiryInfo?id=${nextBoardId}&mail=${mail}&type=C`
              }
              className={classnames('next-btn', { disable: !nextBoardId })}
            >
              다음글
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryInfoForm;
