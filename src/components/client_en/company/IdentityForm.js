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

  const handleOpenNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
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
              <NavLink to="/en">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                Company
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/en/company/lselink" className="on">
                    Company
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/e-link/evcharge">Business</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/management">IR Center</NavLink>
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
                CI·BI
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/company/lselink">LS E-Link</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/vision">Vision</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/history">
                    History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/identity" className="on">CI·BI</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/businessplace">Locations</NavLink>
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
                In the shape of an arrowhead The strong will of the company is to strive ceaselessly
                <br className="pc-block" />
                towards creating a brighter future; to become an infinitely responsive and innovative
                <br className="pc-block" />
                company which can create new paradigms for our industry.
                <br className="pc-block" />
                <br className="m-block" />
                Curved Line Our customers are at the heart of our concerns.
              </p>
              <div className="represt">
                <div className="img check-img">
                  <img src="/img/logo/ls.svg" alt="LS" />
                </div>
                <ul className="color-notice">
                  <li>
                    <i className="blue"></i>Blue: Transparency and Reliability
                  </li>
                  <li>
                    <i className="red"></i>Red: Challenging and Progressive thinking
                  </li>
                  <li>
                    <NavLink onClick={() => handleOpenNewTab('https://www.lsholdings.com/ko/media/ci/')}>Go to CI Regulations</NavLink>
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
                Based on the LS CI manual, the orange color of E1 was mixed
                <br className="pc-block" />
                to reflect the image of the partnership between the two companies.
                <button className="btn-down" onClick={() => downloadFile('CI.zip', 'CI.zip')}>
                  Download
                </button>
              </p>
              <div className="represt">
                <div className="img check-img">
                  <img src="/img/logo/ls-link.svg" alt="LS" />
                </div>
                <p className="notice">
                  The LS E-Link CI signature and logotype are representative forms of identity that best reveal formative features and symbolism.
                  <br className="pc-block" />
                  Any damage to the image, such as distortion, transformation, misuse or abuse, must not occur.
                </p>
                <ul className="logo-list">
                  <li>
                    <div className="logo-tit">signature</div>
                    <div className="img">
                      <img src="/img/logo/signature.svg" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="logo-tit">logo type</div>
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
                ‘E’ represents both of “Energy” and “Electricity”, and
                <br className="pc-block" />
                ‘Link’ means the LS technologies, related to electricity, are all connected.
                <button className="btn-down" onClick={() => downloadFile('Wordmark.zip', 'Wordmark.zip')}>
                  Download
                </button>
              </p>
              <div className="wordmark-img">
                <div>
                  <div className="tit">symbol mark</div>
                  <div className="in">
                    <div className="big-img">
                      <img src="/img/logo/symbol.svg" alt="" />
                    </div>
                    <div className="mini-img">
                      <span>minimum size</span>
                      <div className="img_wp wp01">
                        <img src="/img/logo/mini-symbol.svg" alt="" />
                      </div>
                      <p>It is recommended to use the logo type when using the symbol mark less than 5mm</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="tit">logotype</div>
                  <div className="in">
                    <div className="big-img">
                      <img src="/img/logo/e-link-logo-type.svg" alt="" />
                    </div>
                    <div className="mini-img">
                      <span>minimum size</span>
                      <div className="img_wp wp02">
                        <img src="/img/logo/mini-e-link-logo-type.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="logo-list slogan">
                <li>
                  <div className="logo-tit">Slogan Combination 1</div>
                  <div className="img">
                    <img src="/img/logo/slogan-1.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="logo-tit">Slogan Combination 2</div>
                  <div className="img">
                    <img src="/img/logo/slogan-2.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="logo-tit">Joint Venture Slogan</div>
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
                Exclusive colors are one of the main elements that represent LS E-Link's identity. 
                <br className="pc-block" />
                <br class="m-block" />
                The gradation color composition using the orange color of 'E1' and the navy color of 'LS' conveys a distinct feeling from monochromatic CI color composition.
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
