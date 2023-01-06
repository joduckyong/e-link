import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';

const FinancialForm = () => {
  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);

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

  return (
    <div className="sub sub03">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            재무정보
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
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

      <div className="content pt0">
        <div className="tab-list" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          <ul>
            <li className="on">
              <NavLink to="">별도</NavLink>
            </li>
            <li>
              <NavLink to="">연결</NavLink>
            </li>
          </ul>
        </div>
        <div className="wrap">
          <div className="gh-boxwrap">
            <div className="gh-box" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
              <div className="con3-tit">매출액</div>
              <img src="../img/sub/con3-graph1.jpg" alt="" />
            </div>
            <div className="gh-box" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
              <div className="con3-tit">영업이익</div>
              <img src="../img/sub/con3-graph1.jpg" alt="" />
            </div>
            <div className="gh-box" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
              <div className="con3-tit">단기순이익</div>
              <img src="../img/sub/con3-graph1.jpg" alt="" />
            </div>
          </div>
          <div className="con3-tit" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
            요약 재무상태표
          </div>
          <div className="tb-wrap" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <span className="unit">단위 : 백만원</span>
            <div className="scroll">
              <table>
                <thead>
                  <tr>
                    <th>구성</th>
                    <th>2021</th>
                    <th>2022</th>
                    <th>2023</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>유동자산</th>
                    <td>358,090</td>
                    <td>358,090</td>
                    <td>358,090</td>
                  </tr>
                  <tr>
                    <th>비유동자산</th>
                    <td>245,932</td>
                    <td>245,932</td>
                    <td>245,932</td>
                  </tr>
                  <tr className="all">
                    <th>총계</th>
                    <td>604,022</td>
                    <td>604,022</td>
                    <td>604,022</td>
                  </tr>
                  <tr>
                    <th>유동부채</th>
                    <td>213,479</td>
                    <td>213,479</td>
                    <td>213,479</td>
                  </tr>
                  <tr>
                    <th>비유동부채</th>
                    <td>123,323</td>
                    <td>123,323</td>
                    <td>123,323</td>
                  </tr>
                  <tr className="all">
                    <th>부채총계</th>
                    <td>336,802</td>
                    <td>336,802</td>
                    <td>336,802</td>
                  </tr>
                  <tr>
                    <th>자본금</th>
                    <td>20,802</td>
                    <td>20,802</td>
                    <td>20,802</td>
                  </tr>
                  <tr className="all">
                    <th>자본총계</th>
                    <td>267,220</td>
                    <td>267,220</td>
                    <td>267,220</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="con3-tit" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
            요약 손익계약서
          </div>
          <div className="tb-wrap" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <span className="unit">단위 : 백만원</span>
            <div className="scroll">
              <table>
                <thead>
                  <tr>
                    <th>구성</th>
                    <th>2021</th>
                    <th>2022</th>
                    <th>2023</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>매출액</th>
                    <td>358,090</td>
                    <td>358,090</td>
                    <td>358,090</td>
                  </tr>
                  <tr>
                    <th>매출총이익</th>
                    <td>245,932</td>
                    <td>245,932</td>
                    <td>245,932</td>
                  </tr>
                  <tr>
                    <th>영업이익</th>
                    <td>604,022</td>
                    <td>604,022</td>
                    <td>604,022</td>
                  </tr>
                  <tr>
                    <th>세전이익</th>
                    <td>213,479</td>
                    <td>213,479</td>
                    <td>213,479</td>
                  </tr>
                  <tr>
                    <th>당기순이익</th>
                    <td>123,323</td>
                    <td>123,323</td>
                    <td>123,323</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialForm;
