import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientOutline } from 'store/outlineReducer';
import AOS from 'aos';
import classnames from 'classnames';
import { ParallaxProvider, Parallax } from 'react-skrollr';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HistoryForm = () => {
  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);

  const dispatch = useDispatch();

  const outlineList = useSelector((state) => state.outlineReducer.data);
  // const totalCount = useSelector((state) => state.boardReducer.totalCount);

  useEffect(() => {
    dispatch(selectClientOutline());
  }, [dispatch]);

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
    <div className="sub sub01-3">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            연혁
          </h2>
          <ul
            className="path"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <li>
              <NavLink to="/">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                회사소개
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/company/lselink" className="on">
                    회사소개
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/evcharge">사업영역</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/financial">
                    투자정보 & 홍보센터
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/pr/press-list">홍보센터</NavLink>
                </li> */}
                <li>
                  <NavLink to="/recruit/people">채용정보</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/consult">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/ev/login">EV 충전소</NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                연혁
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/company/lselink">LS E-Link</NavLink>
                </li>
                <li>
                  <NavLink to="/company/vision">비전</NavLink>
                </li>
                <li>
                  <NavLink to="/company/history" className="on">
                    연혁
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/company/identity">CI·BI</NavLink>
                </li>
                <li>
                  <NavLink to="/company/businessplace">사업장 안내</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content p0">
        <div className="history">
          <div className="wrap">
            <ParallaxProvider>
              <Parallax>
                <div
                  className="t-wrap"
                  id="y-1"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <div
                    className="title"
                    data-top="transform:translateY(0%);"
                    data-800-top="transform:translateY(50px);"
                  >
                    <div className="time">2022 - 현재</div>
                    <div className="time-tit">
                      LS E-Link
                      <br />
                      미래 종합 에너지 솔루션
                      <br />
                      기업의 탄생
                    </div>
                  </div>
                  <ul
                    className="time-list"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-once="true"
                  >
                    {outlineList.map((list, index) => (
                      <li
                        data-top="transform:translateY(0%);"
                        data-800-top="transform:translateY(80px);"
                      >
                        <dl>
                          <dt>
                            {list.companyYear}.{list.companyMonth}.
                            {list.companyDay}
                          </dt>
                          <dd>
                            <p>{list.companyContents}</p>
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </div>
              </Parallax>
            </ParallaxProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryForm;
