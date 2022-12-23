import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IdentityForm = () => {
  useEffect(() => {
    AOS.init();
  });

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
            <li className="link">
              <NavLink to="">회사소개</NavLink>
              <ul className="links">
                <li>
                  <NavLink to="/company/lselink" className="on">
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
            <li className="on link">
              <NavLink to="">CI·BI</NavLink>
              <ul className="links">
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
                CI 소개
              </h3>
              <p className="ci-introduce" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                LS E-Link의 로고는 가장 혁신적인 기술을 추구하는 LS E-Link의 기술력과 경쟁력을 상징하는
                <br />
                색상을 세계로 뻗어나가기 위한 LS E-Link의 혁신적인 비전을 이탤릭(Italic) 서체의 기울기에 담아내어 세계 일류 기업으로
                <br />
                도약하기 위한 미래지향적인 기업의 이미지를 표현하고 있습니다.
              </p>
              <ul className="ci-infor">
                <li>
                  <div className="img" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                    <img src="/img/download/CI.png" alt="" />
                  </div>
                  <dl data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                    <dt>CI</dt>
                    <dd>
                      <p>
                        LS CI 매뉴얼을 기반으로, E1의 Orange 컬러를 혼합하여
                        <br />
                        양사 파트너십 이미지를 반영했습니다.
                      </p>
                      <NavLink to="">다운로드</NavLink>
                    </dd>
                  </dl>
                </li>
                <li>
                  <div className="img" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                    <img src="/img/download/wordmark.png" alt="" />
                  </div>
                  <dl data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                    <dt>워드마크</dt>
                    <dd>
                      <p>
                        E는 에너지(Energy)와 전기(Electricity)의 중의적 의미를,
                        <br />
                        Link는 전기와 관련한 LS의 모든 기술력이 연결된다는 의미가
                        <br />
                        결합 되었습니다.
                      </p>
                      <NavLink to="">다운로드</NavLink>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg"></div>
          <div className="color">
            <div className="wrap">
              <div className="color-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                전용색상
              </div>
              <div className="color-infor">
                <p className="col-txt" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  전용색상은 LS E-Link의 정체성을 표현하는 주요 요소 중 하나입니다.
                  <br />
                  공동 출자사인 E1의 오렌지 컬러와 LS의 네이비 컬러를 활용한 그라데이션 컬러 구성으로
                  <br />
                  일반적인 단색 컬러 구성의 CI와는 색다른 의미와 느낌을 전달하고 있습니다.
                </p>
                <div className="ver-color" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="ver-tit">주색</div>
                  <ul>
                    <li>
                      <div className="col-img blue"></div>
                      <div className="col-name-wrap">
                        <div className="col-name">E-LINK Blue</div>
                        <p>PANTONE 281C Process</p>
                        <p>Color : C100 M80 Y25 RGB</p>
                        <p>Color : R10 G30 B90</p>
                      </div>
                    </li>
                    <li>
                      <div className="col-img orange"></div>
                      <div className="col-name-wrap">
                        <div className="col-name">E-LINK Orange</div>
                        <p>PANTONE 1669C Process</p>
                        <p>Color : M72 Y100 K3</p>
                        <p>RGB Color : R233 G102</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="ver-color" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="ver-tit">보조색</div>
                  <ul>
                    <li>
                      <div className="col-img gray"></div>
                      <div className="col-name-wrap">
                        <div className="col-name">E-LINK Gray</div>
                        <p>PANTONE 430C Process </p>
                        <p>Color : C5 K50</p>
                        <p>RGB Color : R125 G130 B130</p>
                      </div>
                    </li>
                    <li>
                      <div className="col-img silver"></div>
                      <div className="col-name-wrap">
                        <div className="col-name">E-LINK Silver</div>
                        <p>PANTONE 877C Process</p>
                        <p>Color : C40 M30 Y30 K13</p>
                        <p>RGB Color : R135 G130 B125</p>
                      </div>
                    </li>
                    <li>
                      <div className="col-img gold"></div>
                      <div className="col-name-wrap">
                        <div className="col-name">E-LINK GOLD</div>
                        <p>PANTONE 872C Process</p>
                        <p>Color : C30 M40 Y80 K18</p>
                        <p>RGB Color : R125 G13 B13</p>
                      </div>
                    </li>
                  </ul>
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
