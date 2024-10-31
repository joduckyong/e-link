import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EthicForm = () => {
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
    <div className="sub ethic">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            윤리경영
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
            <li className="link">
              <NavLink to="/policy/Ethic">윤리경영</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap">
        <div className="top">
          <div className="cont_tit">
            <p>
              LS머트리얼즈는 윤리의식을 바탕으로 밝고 건전한 기업을 만들어
              갑니다.
            </p>
            <small>
              LS머트리얼즈는 LS Partnership과 준법경영을 바탕으로 윤리경영을
              실천하고 있으며,
              <br className="mBr" />
              전직원이 원칙과 기본을 지켜 모든 업무를 투명하고 합리적으로
              처리하고 있습니다.
            </small>
          </div>
          <div className="cont_img">
            <img src="/img/sub/ethic_bnr.png" alt="" />
          </div>
        </div>
        <div className="bot">
          <h3>윤리경영 실천활동</h3>
          <ul className="cont_wp">
            <li>
              <div className="cont_img">
                <img src="/img/sub/ethic_ico01.png" alt="" />
              </div>
              <div className="cont_txt">
                LS 사이버 신문고 운영
                <small>
                  LS 사이버 신문고를 통해 비윤리 행위를 제보할 수 있으며, 건전한
                  기업 문화 형성을 위해 노력합니다.
                </small>
              </div>
            </li>
            <li>
              <div className="cont_img">
                <img src="/img/sub/ethic_ico02.png" alt="" />
              </div>
              <div className="cont_txt">
                부패방지 규정 제정
                <small>
                  윤리경영 실천을 위해 부패방지 규정을 제정하고, 전직원을
                  대상으로 준수의무 및 위반 시 조치 등에 대해 정기적으로 교육을
                  실시하고 있습니다.
                </small>
              </div>
            </li>
            <li>
              <div className="cont_img">
                <img src="/img/sub/ethic_ico03.png" alt="" />
              </div>
              <div className="cont_txt">
                전직원 준법서약서 작성
                <small>
                  LS Partnership 및 준법경영을 선도하여 공정한 사회를 조성하기
                  위해 전직원이 준법서약서를 작성하여 윤리경영을 실천하기 위해
                  노력하고 있습니다.
                </small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EthicForm;
