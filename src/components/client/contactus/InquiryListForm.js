import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientContactUs } from 'store/contactUsReducer';
import AOS from 'aos';
import classnames from 'classnames';
import Pagination from 'react-js-pagination';

const InquiryListForm = () => {
  const dispatch = useDispatch();

  const contactusList = useSelector((state) => state.contactUsReducer);
  console.log('contactusList : ' + contactusList);
  console.log('contactusList.data : ' + contactusList.data);
  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);
  const [page, setPage] = useState(1);

  const mail = new URL(window.location.href).searchParams.get('mail');
  const key = new URL(window.location.href).searchParams.get('key');

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    const newList = {
      contactId: 'CON',
      pageIndex: page,
      contactMail: mail,
      contactPw: key,
    };
    dispatch(selectClientContactUs(newList));
  }, [dispatch]);

  // 페이징
  const pageClick = (page) => {
    setPage(page);
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

      <div className="content costomer-wp">
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

          <div className="list-wp">
            <div className="list-top">
              <b>Total {contactusList?.totalCount}</b> / {page} page
            </div>
            <ol className="list inquiry-list">
              {contactusList?.data?.map((list, index) => (
                <>
                  <li key={index}>
                    <NavLink
                      to={`/contactUs/inquiryInfo?id=${list.contactId}&mail=${list.contactMail}&type=C&key=${key}`}
                    >
                      <h3>No.{contactusList.totalCount - (list.rnum - 1)}</h3>
                      <h2>
                        <img src="/img/ev/ev_lock.png" alt="" />
                        <span>{list.contactTitle}</span>
                      </h2>
                      <span className="name">{list.contactNm2}</span>
                      <p>{list.createdDatetime}</p>
                    </NavLink>
                  </li>
                  {list.contactRecontents && (
                    <li>
                      <NavLink
                        to={`/contactUs/inquiryInfo?id=${list.contactId}&mail=${list.contactMail}&type=V&key=${key}`}
                      >
                        <h3>No.{contactusList.totalCount - list.rnum + 1}</h3>
                        <h2>
                          <div className="re">Re</div>
                          <span>답변이 완료되었습니다.</span>
                        </h2>
                        <span className="name">관리자</span>
                        <p>{list.updatedDatetime}</p>
                      </NavLink>
                    </li>
                  )}
                </>
              ))}
            </ol>
            <div className="paging">
              <Pagination
                activePage={page ?? 1}
                itemsCountPerPage={10}
                totalItemsCount={contactusList?.totalCount ?? 0}
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

export default InquiryListForm;
