import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';

const PressviewForm = () => {

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="sub sub04">
        <div className="sub-top">
            <div className="bg big-frame"></div>
            <div className="txt-wrap wrap">
                <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">보도자료</h2>
                <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
                    <li><NavLink to="/"><img src="./../../img/sub/ico-home.svg" alt="" /></NavLink></li>
                    <li className="link">
                        <NavLink to="">홍보센터</NavLink>
                        <ul className="links">
                            <li><NavLink to="/company/lselink">회사소개</NavLink></li>
                            <li><NavLink to="/business/e-link/evcharge">사업영역</NavLink></li>
                            <li><NavLink to="/investment/management">투자정보</NavLink></li>
                            <li><NavLink to="/pr/press-list" className="on">홍보센터</NavLink></li>
                            <li><NavLink to="/recruit/people">채용정보</NavLink></li>
                            <li><NavLink to="/contactus">Contact Us</NavLink></li>
                            <li><NavLink to="">EV 충전소</NavLink></li>
                        </ul>
                    </li>
                    <li className="on link">
                        <NavLink to="">보도자료</NavLink>
                        <ul className="links">
                            <li><NavLink to="/pr/press-list" className="on">보도자료</NavLink></li>
                            <li><NavLink to="/pr/media-list">미디어</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div className="content">
            <div className="wrap">
                <div className="con4-list-view">
                    <h3 className="tit">LS E-Link, 신사업 업무협약 체결</h3>
                    <div className="list-num"><span>No.14</span>2022-11-30</div>
                    <div className="view-area">
                        <div className="img"><img src="./../../img/sub/sub04-1-view.jpg" alt="" /></div>
                        <p className="mt30">
                            LS그룹(회장 구자은)이 EV 충전 신규 법인 설립으로 전기차 사업에 드라이브를 걸고 있다. 
                            LS의 지주회사인 ㈜LS는 ‘EV 충전 인프라 구축과 운영 사업 개발’을 위해 신규 법인 LS E-Link(엘에스이링크, 대표 김대근)를 E1과 공동 투자하여 설립한다고 27일 공시했다. 
                            LS E-Link는 ㈜LS 와 E1이 각각 50:50으로 출연하여 ㈜LS의 자회사로 설립된 회사로, 
                            LS는 LS E-Link를 컨트롤 타워로 삼아 그룹 내 전기차 충전 분야 사업 역량을 집결하고 시너지를 창출한다는 계획이다. 
                            LS E-Link 라는 사명은 임직원들로부터 공모를 받아 채택한 이름으로, E는 에너지(Energy)와 전기(Electricity)의 중의적 의미를, 
                            Link는 전기와 관련한 LS의 모든 기술력이 연결된다는 의미가 결합되었다. 
                            LS는 앞으로 전기차로의 전환 속도가 빨라지고 단위 충전소의 전력 사용량이 증가하면서 기존 충전 기술뿐만 아니라, 
                            전력계통의 안정적·효율적 운영을 위한 전력 엔지니어링 역량이 더욱 중요해질 것으로 판단하고 있다. 
                            이에 국내 1위의 전력 솔루션과 가스 충전소 운영의 노하우(Know-how)를 기반으로 하반기부터 본격적인 영업을 시작할 계획이다. 
                            특히 LS는 LS전선·LS일렉트릭 등 전기·전력 분야 국내 1위의 기술력을 보유하고 있어 시너지가 날 것으로 기대하고 있다. 
                            LS전선은 국내 최초로 800V 고전압에서 사용할 수 있는 전기차용 권선을 양산 중이며 전기차용 고전압 하네스(전기차의 전기 신호를 각 부품에 전달하는 배선), 
                            배터리팩 등을 생산하고 있다. LS일렉트릭은 배전 분야에서 안정적인 스마트 전력설비 기술을 보유하고 있고, E1은 국내 350여 개 충전소 운영 노하우를 갖고 있다.
                        </p>
                    </div>
                    <div className="view-control">
                        <NavLink to="" className="prev-btn disable">이전글</NavLink>
                        <NavLink to="" className="list-btn">목록</NavLink>
                        <NavLink to="" className="next-btn">다음글</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PressviewForm;
