import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientContactUs } from 'store/contactUsReducer';
import AOS from 'aos';
import classnames from 'classnames';

const CyberNewspaperForm = () => {
  const dispatch = useDispatch();

  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    AOS.init();
  });

  const onClickMenuLink = (menu) => {
    if (menu === '1') {
      setActiveMenu1(!activeMenu1);
      setActiveMenu2(false);
    } else if (menu === '2') {
      setActiveMenu1(false);
      setActiveMenu2(!activeMenu2);
    }
  };

  const Popup = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="sub sub06 report">
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
                  <NavLink to="/investment/financial">
                    투자정보 & 홍보센터
                  </NavLink>
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
                  <NavLink to="/ev/login">EV 충전소</NavLink>
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
                  <NavLink to="/contactus/inquiry">질의하기</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/cyberNewspaper" className="on">
                    사이버 신문고
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <h3
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            사이버 신문고
          </h3>
          <div className="report_cont report01">
            <h4>제보하기</h4>
            <div>
              <img src="/img/sub/error.svg" alt="" />
              <p>
                이곳은 LS E-Link 임직원들의 부정/비리, 불공정한 업무처리 등으로
                인해 협력업체 대표/임직원 및 고객 여러분들이 불이익을 당하셨을
                경우 제보하는 곳입니다. 귀하의 소중한 제보는 당사 윤리경영의
                밑거름이 되며, 제보자 인적사항 및 제보내용은 철저히 보호될
                것임을 약속 드리겠습니다.
              </p>
            </div>
          </div>
          <div className="report_cont report02">
            <h4>제보대상</h4>
            <ul>
              <li>당사 임직원의 부정/비리(금품, 향응, 접대 등 수수)</li>
              <li>당사 임직원의 직무태만/불성실한 업무태도</li>
              <li>
                협력업체에 대한 불공정한 업무처리(업체선정, 계약/거래관계 등)
              </li>
              <li>기타(LS E-Link 윤리규범 위배 행위)</li>
            </ul>
          </div>
          <div className="report_cont report03">
            <h4>제보방법</h4>
            <div className="report_box">
              사이버 신문고
              <p>
                특정 양식에 의거 제보하는 곳으로 LS E-Link가
                <br className="mBr" /> 운영하는 모든 웹사이트에서 접속 가능
              </p>
            </div>
            <div className="report_btn">
              <button
                type="button"
                onClick={() =>
                  Popup(
                    'https://ethics.lsholdings.co.kr/ko/view/report.asp?cn=014000',
                  )
                }
                className="btn01"
              >
                제보하기
              </button>
              <button
                type="button"
                onClick={() =>
                  Popup('https://ethics.lsholdings.co.kr/ko/view/process.asp')
                }
                className="btn02"
              >
                제보확인하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberNewspaperForm;
