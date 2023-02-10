import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { downloadFile } from 'common/download';
import AOS from 'aos';
import classnames from 'classnames';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IdentityForm = () => {
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
    <div className="sub sub01-4">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            CI·BI
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
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
                  <NavLink to="/company/lselink" classNameName="on">
                    회사소개
                  </NavLink>
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
                  <NavLink to="/contactus">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="">EV 충전소</NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                CI·BI
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/company/lselink">LS E-Link</NavLink>
                </li>
                <li>
                  <NavLink to="/company/vision">비전</NavLink>
                </li>
                <li>
                  <NavLink to="/company/history">연혁</NavLink>
                </li>
                <li>
                  <NavLink to="/company/identity" className="on">
                    CI·BI
                  </NavLink>
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
        <div className="ci-bi">
          <div className="ci-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                Group Corporate Identity
              </h3>
              <p className="ci-introduce" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                화살표 모양은 끊임없이 미래를 향해 전진하는 기업의 강한 의지와
                <br className="pc-block" />
                새로운 패러다임을 여는 무한 성장기업을 상징하며, 곡선 Line은 고객을 향한 LS의 마음을 의미합니다.
              </p>
              <div className="represt">
                <div className="img check-img">
                  <img src="/img/logo/ls.svg" alt="LS" />
                </div>
                <ul className="color-notice">
                  <li>
                    <i className="blue"></i>Blue : 투명성과 건실함
                  </li>
                  <li>
                    <i className="red"></i>Red : 도전적이고 진취적인 사고
                  </li>
                  <li>
                    <NavLink to="https://www.lsholdings.com/ko/media/ci/" target="_blank">CI 규정 보러가기</NavLink>
				
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg"></div>
          <div className="ci-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                CI
              </h3>
              <p className="ci-introduce2" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                LS CI 매뉴얼을 기반으로, E1의 Orange 컬러를 혼합하여
                <br className="pc-block" />
                양사 파트너십 이미지를 반영하였습니다.
                <button className="btn-down" onClick={() => downloadFile('CI.zip', 'CI.zip')}>
                  다운로드
                </button>
              </p>
              <div className="represt">
                <div className="img check-img">
                  <img src="/img/logo/ls-link.svg" alt="LS" />
                </div>
                <p className="notice">
                  LS E-Link CI 시그니처와 로고타입은 조형적인 특징 및 상징성이 가장 잘 드러나는 Identity의 대표적인 형태이므로, 적용시 규정과 원칙을
                  반드시 준수하여
                  <br className="pc-block" />
                  왜곡, 변형, 오·남용 등 어떠한 이미지 손상도 발생하지 않도록 해야합니다.
                </p>
                <ul className="logo-list">
                  <li>
                    <div className="logo-tit">시그니처 </div>
                    <div className="img">
                      <img src="/img/logo/signature.svg" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="logo-tit">로고타입</div>
                    <div className="img">
                      <img src="/img/logo/logo-type.svg" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ci-wrap bg-gray">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                Wordmark
              </h3>
              <p className="ci-introduce2" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                E는 에너지(Energy)와 전기(Electricity)의 중의적의미를,
                <br className="pc-block" />
                Link는 전기와 관련한 LS의 모든 기술력이 연결된다는 의미가 결합 되었습니다.
                <button className="btn-down" onClick={() => downloadFile('Wordmark.zip', 'Wordmark.zip')}>
                  다운로드
                </button>
              </p>
              <div className="wordmark-img">
                <div>
                  <div className="tit">심볼마크</div>
                  <div className="in">
                    <div className="big-img">
                      <img src="/img/logo/symbol.svg" alt="" />
                    </div>
                    <div className="mini-img">
                      <span>최소사이즈</span>
                      <div className="img_wp wp01"><img src="/img/logo/mini-symbol.svg" alt="" /></div>
                      <p>심볼마크의 5mm이하 사용은 로고타입 사용 권장</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="tit">로고타입</div>
                  <div className="in">
                    <div className="big-img">
                      <img src="/img/logo/e-link-logo-type.svg" alt="" />
                    </div>
                    <div className="mini-img">
                      <span>최소사이즈</span>
                      <div className="img_wp wp02"><img src="/img/logo/mini-e-link-logo-type.svg" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="logo-list slogan">
                <li>
                  <div className="logo-tit">슬로건 조합1</div>
                  <div className="img">
                    <img src="/img/logo/slogan-1.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="logo-tit">슬로건 조합2</div>
                  <div className="img">
                    <img src="/img/logo/slogan-2.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="logo-tit">합작사 동시 표기 조합</div>
                  <div className="img">
                    <img src="/img/logo/slogan-3.svg" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="ci-wrap color">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                Color System
              </h3>
              <p className="ci-introduce2" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                전용색상은 LS E-Link의 정체성을 표현하는 주요 요소 중 하나입니다. <br className="pc-block" />
                공동 출자사인 E1의 오렌지 컬러와 LS의 네이비 컬러를 활용한 그라데이션 컬러 구성으로 일반적인 단색 컬러 구성의 CI와는 색다른 의미와
                느낌을 전달하고 있습니다.
              </p>
              <ul className="color-list">
                <li>
                  <div className="color-tit">E-LINK Blue</div>
                  <div className="color-img blue"></div>
                  <div className="infor">
                    <p>PANTONE 281C</p>
                    <p>Process Color : C100 M80 Y25</p>
                    <p>RGB Color : R10 G30 B90</p>
                  </div>
                </li>
                <li>
                  <div className="color-tit">E-LINK Orange</div>
                  <div className="color-img orange"></div>
                  <div className="infor">
                    <p>PANTONE 1669C</p>
                    <p>Process Color : M72 Y100 K3</p>
                    <p>RGB Color : R233 G102</p>
                  </div>
                </li>
                <li>
                  <div className="color-tit">E-LINK Yellow</div>
                  <div className="color-img yellow"></div>
                  <div className="infor">
                    <p>PANTONE 108C</p>
                    <p>Process Color : M15 Y100</p>
                    <p>RGB Color : R255 G216</p>
                  </div>
                </li>
              </ul>
              <div className="gradient">
                <div className="g-tit">E-LINK Gradient</div>
                <div className="img">
                  <img src="/img/logo/gradient.png" alt="" />
                </div>
                <div className="txt">
                  <p>
                    PANTONE 1669C
                    <br />
                    M72 Y100 B3
                  </p>
                  <p>
                    PANTONE 1669C
                    <br />
                    M72 Y100 B3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityForm;
