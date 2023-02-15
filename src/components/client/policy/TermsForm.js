import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TermsForm = () => {
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
    <div className="sub sub07 sub07-2">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
          서비스 이용약관
          </h2>

          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <li>
              <NavLink to="/">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
              서비스 이용약관
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/policy/privacy">개인정보 보호처리방침</NavLink>
                </li>
                <li>
                  <NavLink to="/policy/terms">서비스 이용약관</NavLink>
                </li>
                <li>
                  <NavLink to="/policy/location">위치기반 서비스 이용약관</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="policy">
          <div className='wrap'>
            <h2>이용약관</h2>
            <h4>제 1 장 : 총 칙</h4>
            <h3 className="mt40">제 1 조 (목적)</h3>
            <p className="depth01_p">
            본 약관은 엘에스이링크 주식회사(이하 ‘회사’)가 제공하는 “엘에스이링크(주) ELVIS 전기차 충전 서비스”를 이용함에 있어 서비스 이용자와 회사간의 권리, 의무 및 책임사항, 서비스 이용에 따른 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다.
            </p>

            <h3>제 2 조 (약관의 효력 및 변경)</h3>
            <p className="depth01_p">
            ① 본 약관은 ELVIS 전기차 충전 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력이 발생합니다. 
            <br /><br />
            ② 본 약관의 내용은 엘에스이링크(주) 홈페이지 (https://www.lselink.com, 이하 ‘홈페이지’) 또는 ELVIS App을 통해 회원에게 공지되고, 이에 동의한 회원이 ELVIS 전기차 충전 서비스에 가입함으로써 효력이 발생합니다. 
            <br /><br />
            ③ 회사는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 회사가 약관을 변경할 경우에는 적용일자 및 변경사유를 명시하여 제2항과 같은 방법으로 그 적용일자 30일 전 공지합니다. 다만, 회원에게 불리한 약관의 변경인 경우에는 그 적용일자 30일 전 공지하며, E-mail, SMS 등으로 회원에게 개별 통지합니다. 단, 회원의 연락처 미기재, 변경 후 미수정 등으로 인하여 개별 통지가 어려운 경우에 한하여 홈페이지에 게시하는 것으로 갈음할 수 있습니다. 
            <br /><br />
            ④ 회원은 개정된 약관 사항에 동의하지 않을 권리가 있으며, 개정된 약관에 대해 동의하지 않을 경우, 회사는 본 서비스의 이용을 중단하고 이용계약을 해지할 수 있습니다. 단, 회사가 전항 단서에 따라 개정 약관을 공지 또는 통지하면서 회원에게 최소 30일 이상의 사전 유예 기간 내에 부동의 의사표시를 하지 않으면 개정된 약관에 동의한다는 의사표시가 표명된 것으로 간주한다는 뜻을 명확하게 공지 또는 고지하였음에도 회원이 회사에 명시적으로 거부 의사를 표시하지 않거나 이용계약을 해지하지 않은 경우 개정된 약관에 동의한 것으로 간주합니다.
            </p>

            <h3>제 3 조 (약관 외 준칙)</h3>
            <p className="depth01_p">
            본 약관에 명시되지 않은 사항에 대해서는 정보통신망법, 전기통신기본법, 전기통신사업법 등 관계법령 및 회사가 정한 서비스의 세부이용지침을 적용합니다.
            </p>

            <h3>제 4 조 (용어의 정의)</h3>
            <p className="depth01_p">
            본 약관에서 사용하는 용어의 정의는 다음과 같습니다. 
            <br /><br />
            ① 엘에스이링크(주) 전기차 충전 서비스(이하 “전기차 충전 서비스”)라 함은 전기차 충전소를 이용할 수 있도록 회사가 웹, 모바일 등을 통해 제공하는 일체의 서비스를 말합니다. 
            <br /><br />
            ② 엘에스이링크(주) 회원(이하 “회원”)이라 함은 본 약관에 동의하고 서비스를 이용하는 고객을 말합니다. 회원은 다음과 같이 구분합니다. 
            </p>
            <p className="depth02_p ml20">
            가. 개인 회원 : 회사가 정한 절차에 따라 서비스 이용 계약을 완료한 개인 고객 <br />
            나. 법인 회원 : 회사와 운송법인간 계약을 통해 전기차 충전 서비스를 이용하는 고객 <br />
            다. 제휴 회원 : 회사와 제휴사간 협약을 통해 약정된 조건의 전기차 충전 서비스를 이용하는 고객 <br />
            라. 로밍 제휴 회원 : 회사와 제휴사간 계약을 통해 제공되는 제한된 범위의 전기차 충전 서비스를 이용하는 고객 
            </p>
            <p className="depth01_p">
            ③ 제휴사 : 회사가 제공하는 전기차 충전 서비스를 통하여 “회원”에게 전기차 충전 서비스를 제공하는 사업자를 말한다. 
            <br /><br />
            ④ 엘에스이링크(주) 충전소(이하 “충전소”)라 함은 회사가 직접 구축하거나 회사가 충전사업자 혹은 충전기 설치기관으로부터 위탁을 받아 운영하는 충전소를 말합니다. 
            <br /><br />
            ⑤ “유료서비스”라 함은 회사, 제휴사, 협약사 등 서비스 제공자에게 요금, 수수료 등 이용요금을 지급하는 서비스를 통칭합니다. 
            <br /><br />
            ⑥ “부가서비스”라 함은 회사 혹은 전기차 충전 및 차량 운행 등과 관련된 제휴사와 협약을 통해 유상 혹은 무상으로 제공되는 서비스를 말합니다. 
            <br /><br />
            ⑦ “간편자동결제(이하 “간편결제”)라 함은 회원이 서비스 이용 요금 지급 편의를 위해 지정 등록한 결제수단을 통해 유료서비스 요금을 결제할 때마다 별도의 인증과정 없이 자동으로 결제되는 것을 말합니다. 
            <br /><br />
            ⑧ “ELVIS 캐시”라 함은 서비스 이용 실적에 따라 적립받거나 유상으로 구매하여 전기차 충전 서비스를 이용할 때 사용할 수 있는 선불형 전자적 지급수단을 말합니다. 
            <br /><br />
            ⑨ “마일리지”라 함은 고객의 이용 실적 등을 고려하여 무상으로 지급하는 부가서비스의 하나로 충전서비스 이용시에만 사용 가능한 전자적 지급수단을 말합니다. 
            <br /><br />
            ⑩ 본 약관에 사용되는 용어 중 본 조에서 정하지 아니한 부분은 본 약관의 다른 조항, 관계 법령 및 일반관례에 따릅니다. 
            </p>

            <h3>제 5 조 (회원에 대한 통지)</h3>
            <p className="depth01_p">
            ① 회원에 대해 개별적인 통지를 하는 경우 회사는 회원이 등록한 E-mail 주소 또는 SMS 등 으로 할 수 있습니다. <br />
            ② 회사는 불특정 다수 회원에 대한 통지의 경우 서비스 화면 등에 공지함으로써 제1항의 개별 통지에 갈음할 수 있습니다.
            </p>
            
            <h4>제 2 장 : 서비스 이용 계약</h4>
            <h3 className="mt40">제 6 조 (계약의 성립)</h3>
            <p className="depth01_p">
            서비스의 이용계약은 고객이 홈페이지 또는 ELVIS App 에서 제공하는 이용약관에 동의하고, 가입신청 양식에 따라 요구하는 사항을 기록하여 기입을 완료하는 것으로 성립됩니다.
            </p>

            <h3>제 7 조 (가입신청에 대한 승낙 및 서비스 이용의 제한)</h3>
            <p className="depth01_p">
            ① 제6조에 따른 가입신청자에게 회사는 원칙적으로 서비스의 이용을 승낙합니다. 단, 회사는 다음 각 호에 해당하는 신청은 그 사유가 해소될 때 까지 승낙을 유보하거나, 승낙을 거부할 수 있습니다. 
            </p>
            <p className="depth02_p">
            1. 본 약관에 의하여 이전에 회원 자격을 상실한 적이 있는 경우 <br />
            2. 만 14세 미만 아동이 서비스 이용 신청을 한 경우 <br />
            3. 기술상 서비스 제공이 불가능한 경우, 다른 사람의 명의사용, 이동전화 명의자의 허락 없이 문자메시지(SMS) 인증, 범용공인인증 또는 신용카드 인증을 수행하는 등 이용자 등록 시 허위로 신청하는 경우<br />
            4. 이용자 등록 사항을 누락하거나 오기, 허위로 기재하여 신청하는 경우 <br />
            5. 사회의 공공질서 또는 미풍양속을 객관적으로 저해하거나 저해할 목적으로 신청한 경우 <br />
            6. 이메일(e-mail) 승인 또는 문자메시지(SMS) 인증 등 회사가 정한 인증절차를 완료하지 않은 경우 <br />
            7. 회사로부터 회원자격정지 조치 등을 받은 회원이 그 조치기간에 이용계약을 임의 해지하고 재이용을 신청하는 경우 <br />
            8. 기타 위법한 가입신청이 확인된 경우 또는 회원의 책임 있는 사유로 회사가 승낙할 수 없는 경우 
            </p>
            <p className="depth01_p">
            ② 회사는 서비스에 가입을 하여 이용하고자 하는 자에게 본인확인을 위하여 서비스를 이용하고자 하는 자의 휴대 단말 식별 정보 및 본인확인 인증 절차(이하 “본인인증 절차”)를 요구할 수 있습니다. 이 경우 서비스에 가입하여 이용하고자 하는 자는 해당 인증을 수행하는 등 가입 절차를 완료하여야 합니다. 
            <br /><br />
            ③ 회원은 서비스 이용을 위해 회원 정보 등록을 할 경우 현재의 사실과 일치하는 완전한 정보(이하 "등록정보")를 제공하여야 합니다. 단, 서비스 이용에 필요한 필수 사항 이외의 선택 정보는 그러하지 아니합니다.
            </p>

            <h3>제 8 조 (기재 사항의 수정)</h3>
            <p className="depth01_p">
            회원은 가입신청 시 기재한 사항이 변경되었을 경우 회사가 정한 별도의 이용 방법으로 정해진 양식 및 방법에 의하여 수정하여야 합니다. 회사는 회원이 변경 사항을 적시에 수정하지 않음 으로 인하여 발생하는 문제에 대해서는 회사의 귀책사유가 없는 한 책임을 지지 않습니다.
            </p>

            <h3>제 9 조 (서비스 이용 계약 해지 및 이용 제한)</h3>
            <p className="depth01_p">
            ① 회원은 언제든지 회사에 이용계약 해지를 통지함으로써 이용계약을 해지할 수 있습니다. 다만, 회원이 이용 계약 해지를 위해서는 이용하고 있는 모든 유료서비스 이용을 완료하거나 취소 혹은 철회하여야 합니다. 
            <br /><br />
            ② 계약을 해지하려는 회원이 결제실패 등의 이유로 미수가 있을 경우에는 해당 미수금 결제를 완료한 후 계약해지가 성사됩니다. 
            <br /><br />
            ③ 회사는 제1항에 따라 이용계약이 해지되는 경우 회원에게 발생할 수 있는 불이익 등에 대해서는 귀책사유가 없으며 회사가 회원에게 무상으로 제공한 포인트, 마일리지 와 같은 혜택은 계약 해지와 함께 소멸됩니다. 
            <br /><br />
            ④ 회원이 제공한 등록정보 및 갱신한 등록정보가 부정확하여 회원 혹은 회사의 일방적인 피해가 우려되는 경우 회사는 서비스 이용을 제한 또는 중단시킬 수 있습니다. 단, 이와 같은 사유가 발생했을 경우 본조 제3항에서 정한 방법으로 회원에게 통보합니다. 
            <br /><br />
            ⑤ 회사는 비정상적인 서비스 이용 등 회원의 귀책사유가 발생하면 그 사유를 본조 제3항에서 정한 방법으로 안내하고 그 계약을 해지할 수 있습니다. 
            <br /><br />
            ⑥ 회원은 4항, 5항에 따라 서비스를 제한하거나 이용 계약 해지 통보를 받은 경우, 통지일로부터 10일 이내에 항변 및 소명할 수 있고 해당 항변 및 소명이 정당한 경우 회사는 서비스 이용 제한 혹은 이용계약 해지를 취소할 수 있습니다. 따라서 회원이 기한 내 항변 또는 소명을 하지 않는 경우는 통보의 사실에 동의한 것으로 간주합니다.
            </p>

            <h3>제 10 조 (서비스의 내용)</h3>
            <p className="depth01_p">
            ① 회사가 제공하는 충전서비스 다음 각 호와 같습니다. 
            </p>
            <p className="depth02_p">
            1. “충전소”운영관리 및 충전서비스에 부수하는 결제 서비스 <br />
            2. 고객의 위치 기준 가까운 충전소 검색 및 경로 탐색 서비스 <br />
            3. 회원의 충전소 이용 내역 정보 제공 및 차량 데이터 기반 차계부 서비스 <br />
            4. 기타 전기차 이용 고객의 “충전소” 이용 편의 서비스 일체 
            </p>
            <p className="depth01_p">
            ② 회사는 회원의 “전기차 충전 서비스” 이용 편의를 위해 다양한 유료서비스를 구성하여 제공할 수 있습니다. 
            </p>
            <p className="depth01_p">
            ③ 회사는 협약을 통해 제휴사가 제공하는 다양한 부가서비스를 제공할 수 있습니다. 부가서비스 이용과 관련해서는 제휴사의 이용 약관을 따르며 회원이 그 약관을 확인할 수 있도록 회사의 홈페이지 혹은 ELVIS App 화면에 안내합니다.
            </p>

            <h3>제 11 조 (서비스 변경 및 중지)</h3>
            <p className="depth01_p">
            ① 서비스의 제공은 365일 24시간 유지함을 원칙으로 합니다. 
            <br /><br />
            ② 회사는 정보통신망 또는 정보통신설비의 장애가 발생하거나 정기점검 등 서비스의 원활한 운영을 위하여 필요한 경우 관련 서비스를 일시 중지할 수 있습니다. 이러한 경우 회사는 APP 푸시 알림, SMS, E-mail, 서비스 페이지 게시 등의 방법으로 회원에게 알려드리며, 사전에 알려드릴 수 없는 부득이한 사유가 있는 경우 사후에 알려드릴 수 있습니다. 
            <br /><br />
            ③ 회사는 다음 각 호에 해당하는 경우 서비스의 일부 또는 전부를 중단, 제한하거나 폐지할 수 있습니다. 
            </p>
            <p className="depth02_p">
            1. 서비스용 설비의 보수 등 공사로 인한 부득이한 경우 <br />
            2. 회원이 회사의 영업활동을 방해하는 경우 <br />
            3. 통신, 전력 등의 공급이 중단되거나 정보통신설비의 보수점검, 증설, 교체, 이전, 고장, 장애 또는 운영상 상당한 이유가 있는 경우 <br />
            4. 제휴 및 협약사와 계약 종료 또는 경영상의 판단 등 회사의 제반 사정으로 전기차 충전 서비스를 유지할 수 없는 경우 <br />
            5. 회사의 서비스 정책 변경, 수익성 악화 및 이동전화 서비스 폐지 등 회사의 경영상의 판단에 따라 서비스의 일부 또는 전부를 제공하지 않기로 결정한 경우 <br />
            6. 기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우 
            </p>
            <p className="depth01_p">
            ④ 제2항 내지 제3항에 의한 서비스 변경, 중단, 제한 및 폐지의 경우에는 회사가 제5조에서 정한 방법으로 회원에게 통지합니다. 다만, 회사가 통지할 수 없는 사유 (이용량 폭주, 시스템 다운 등)로 인하여 사전 통지가 불가능한 경우에는 그러하지 아니합니다. 
            <br /><br />
            ⑤ 회사는 본 조에 따른 전기차 충전 서비스의 변경, 중지로 발생하는 문제에 대해서는 회사의 귀책사유가 없는 한 책임을 지지 않습니다.
            </p>

            <h3>제 12 조 (서비스 이용제한)</h3>
            <p className="depth01_p">
            회사는 회원에 대하여 "영화 및 비디오물의 진흥에 관한 법률" 및 "청소년보호법" 등 관련 법령에 따른 등급 및 연령 준수를 위해 이용제한이나 등급별 제한을 할 수 있습니다.
            </p>

            <h3>제 13 조 (이용계약 해지 및 회원 자격상실·정지)</h3>
            <p className="depth01_p">
            ① 회원은 언제든지 서면, E-mail, 전화, 기타 등의 방법으로 이용계약 해지를 요청할 수 있으며, 회사는 회원의 요청에 따라 조속히 이용계약 해지에 필요한 제반 절차를 수행합니다. 
            <br /><br />
            ② 회원이 다음 각 호의 사유에 해당하는 경우, 엘에스이링크(주)는 당해 회원에 대한 통보로써 회원의 자격을 상실 또는 1년 동안 정지시킬 수 있습니다. <br />
            단, 제3호의 경우에는 별도의 통보 없이 당연히 자격이 상실됩니다. 
            </p>
            <p className="depth02_p">
            1. 타인의 명의를 이용 또는 도용한 경우 <br />
            2. 이용계약 신청 시에 허위의 내용을 기재한 경우 <br />
            3. 회원이 사망한 경우 <br />
            4. 상거래 서비스를 이용하여 구입한 상품/서비스 대금, 기타 서비스 이용과 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우 <br />
            5. 다른 회원의 서비스 이용을 방해하거나 다른 회원의 정당한 서비스 이용이나 권리를 침해 하는 경우 <br />
            6. 서비스를 이용하여 현행 법령이나 동 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우 <br />
            7. 기타 본 약관에 규정된 회원의 의무를 위반한 경우 
            </p>
            <p className="depth01_p">
            ③ 제2항이 정하는 사유로 자격이 상실 또는 정지된 회원은 해당 사유가 자신의 고의 또는 과실에 기한 것이 아님을 소명할 수 있습니다. 이 경우 회사는 회원의 소명 내용을 심사하여 회원의 주장이 타당하다고 판단하는 경우 회원으로 하여금 정상적인 서비스를 이용할 수 있도록 합니다. 
            <br /><br />
            ④ 제1항에 의한 이용계약 해지 또는 제2항에 의한 회원자격 상실이 확정되는 시점은 이용계약 해지 요청일 또는 회사가 통보하는 회원자격 상실 예정일에 이용계약 해지 또는 회원자격 상실이 확정되며, 제2항 제3호의 경우에는 회원 사망일에 자격상실이 확정됩니다. 
            <br /><br />
            ⑤ 회원이 멤버십 서비스를 마지막으로 이용한 날로부터 12개월 경과시 회원의 개인정보 보호를 위해 개인정보를 파기하거나, 다른 회원의 개인정보와 분리하여 별도로 저장, 관리할 수 있습니다.
            </p>

            <h3>제 14 조 (개인정보의 보호)</h3>
            <p className="depth01_p">
            회원들의 개인정보는 서비스의 원활한 제공을 위하여 회원들이 동의한 목적과 범위 내에서만 이용됩니다. 회사는 관련 법령을 준수하며, 회원들이 동의하지 아니하는 한 회원들의 개인정보를 제3자에게 제공할 수 없습니다.
            </p>

            <h3>제 15 조 (개인정보보호 및 처리지침의 공지)</h3>
            <p className="depth01_p">
            ① 엘에스이링크(주)는 '개인정보보호'에 대한 상세한 내용을 '개인정보처리방침'에 명시하고 있으며, 회원이 상시 확인할 수 있도록 엘에스이링크(주) 플랫폼 화면을 통해 공지하고 있습니다. 
            <br /><br />
            ② ‘개인정보보호'의 내용은 추가, 변경될 수 있으며, 이 경우 추가 또는 변경사항을 본 계약 제5조 제1항에 규정된 통지방법을 준용하여 회원에게 알려드립니다.
            </p>

            <h4>제 3 장 : 회사, 이용자의 권리와 의무</h4>
            <h3 className="mt40">제 16 조 (회원의 의무와 책임)</h3>
            <p className="depth01_p">
              ① 회원은 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안됩니다. 
            </p>
            <p className="depth02_p">
              1. 서비스 이용 관련 제반 신청행위 또는 변경행위 시 허위내용 기재행위<br />
              2. 서비스에 게시된 각종 정보의 무단 변경, 삭제 등 훼손 행위 <br />
              3. 회사가 허용한 정보 이외의 다른 정보(컴퓨터 프로그램 및 광고 등)를 송신하거나 게시하는 행위 <br />
              4. 회사 및 제3자의 저작권 등 지식재산권에 대한 침해 행위 <br />
              5. 회사 및 제3자의 명예를 손상시키거나 업무를 방해하는 행위 <br />
              6. 회사의 동의 없이 영리를 목적으로 서비스를 사용하는 행위 <br />
              7. 기타 서비스 이용에 있어서 불법적이거나 부당한 행위 
            </p>
            <p className="depth01_p">
              ② 회원은 회원자격 및 이와 관련된 이용권을 타인에게 양도하거나 대여 또는 담보의 목적으로 이용할 수 없습니다. 
              <br /><br />
              ③ 회원이 서비스 페이지에 게시한 댓글 등의 게시물이 다음에 규정하는 부적격 자료에 해당하여 변경·삭제하는 등의 적정한 조치를 취하도록 회사의 요구나 지침이 있는 경우, 회원은 즉시 해당 게시물을 변경·삭제하는 등의 적정한 조치를 취하여야 하며, 기한 내에 적정한 조치를 취하지 않는 경우 회사가 임의로 변경·삭제 등의 적정한 조치를 하는데 동의한 것으로 간주합니다. 
            </p>
            <p className="depth02_p">
              1. 저작권 침해자료 가. 회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 자료 나. 저작권자가 배포를 원하지 않는 자료 <br />
              2. 음란자료 가. 사회상규 및 일반 통념상 성적 수치심을 일으킬 수 있는 표현이 포함된 자료 나. 기타 관련 법령이 허용하는 수준을 넘는 성적 표현이 포함된 자료<br /> 
              3. 폭력물 및 명예훼손에 관한 자료 가. 과도하게 폭력적인 내용을 가지고 있는 자료 나. 다른 회원, 제3자 또는 회사를 비방하거나 명예를 손상시키거나 또는 불이익을 끼치는 것으로 판단되는 자료 <br />
              4. 기타 부적격 자료 <br />
              가. 공공질서 및 공서양속에 위반되는 내용을 유포하는 경우 <br />
              나. 범죄적 행위에 결부된다고 인정되는 내용인 경우 <br />
              다. 첨예한 정치적·종교적 분쟁을 야기할 수 있는 경우<br />
              라. 불필요하거나 승인되지 않은 광고·판촉물을 게재하는 경우 <br />
              마. 타인의 개인정보를 도용하여 작성한 내용이거나, 타인이 입력한 정보를 무단으로 위·변조한 내용인 경우 <br />
              바. 동일한 내용을 중복하여 다수 게시하는 등 게시의 목적에 어긋나는 경우<br /> 
              사. 전기통신사업법 등 관계 법령, 회사의 약관 및 이용지침 등에 위반된다고 판단되는 경우 
            </p>
            <p className="depth01_p">
              ④ 회원은 관련 법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항 등 다음 각 호에 해당하는 사항을 준수하여야 합니다.
            </p>
            <p className="depth02_p">
              1. 회원은 서비스 이용 중 고의 또는 과실로 인해 발생한 회사의 모든 재산상의 손실이나 제3자에게 끼친 인적·물적 손실에 대하여 배상할 책임이 있습니다. <br />
              2. 회원은 충전 완료 후 다른 사용자를 위해 즉시 차량을 이동하여야 할 의무가 있습니다.
            </p>

            <h3>제 17 조 (게시물의 저작권 등)</h3>
            <p className="depth01_p">
              ① 회원의 게시물에 대한 저작권은 저작권법에 의한 보호를 받습니다. 회사가 작성한 저작물에 대한 저작권 기타 지식재산권은 회사에 귀속합니다. 
              <br /><br />
              ② 회사는 원활한 서비스의 제공을 위해 필요한 경우 게시물에 관련된 세부 이용지침을 별도로 정하여 시행할 수 있으며, 서비스 페이지에 등록된 게시물 등을 모니터링 할 수 있습니다. 
              <br /><br />
              ③ 회원은 자신이 게시한 게시물을 회사가 국내외에서 다음 각 호의 목적으로 사용하는 것을 허락합니다. 
            </p>
            <p className="depth02_p">
              1. 서비스 페이지 내에서 회원 게시물의 복제, 전송, 전시, 배포 및 우수 게시물을 서비스 화면에 노출하기 위하여 회원 게시물의 크기를 변환하거나 단순화하는 등의 방식으로 수정 <br />
              2. 회사가 운영하는 관련 사이트의 서비스 내에서 회원 게시물을 전시·배포. 단 회원이 전시· 배포에 대하여 명백히 반대의 의사를 표명하는 경우에는 예외로 합니다. <br />
              3. 회사를 홍보하기 위한 목적으로 해당 회원의 동의를 득하여 미디어, 통신사 등에게 이용자의 게시물 내용을 보도·방영 
            </p>
            <p className="depth01_p">
              ④ 회사가 회원의 게시물을 전항 각 호에 기재된 목적 이외에 상업적 목적으로 사용하고자 하는 경우에는 사전에 해당 회원으로부터 동의를 얻습니다. 
              <br /><br />
              ⑤ 회원이 이용계약을 해지하거나 본 약관에 의하여 회원 자격을 상실한 경우에 본인 계정에 기록된 게시물은 삭제됩니다. 다만, 제3자에게 의하여 스크랩, 펌, 담기 등으로 다시 게시된 게시물, 제3자에 의하여 댓글이 첨부된 게시물 등 다른 회원의 정상적인 서비스 이용에 필요한 게시물은 삭제되지 않을 수 있습니다. 
              <br /><br />
              ⑥ 회사가 합병, 영업양도, 운영하는 사이트간의 통합 등의 사유가 발생하는 경우, 필요한 범위 및 방법 내에서 게시물의 위치를 변경할 수 있습니다.
            </p>

            <h3>제 18 조 (기재사항의 변경)</h3>
            <p className="depth01_p">
              ① 회원은 이용계약과 관련하여 기재한 사항이 변경되었을 경우 회사가 안내하는 별도의 절차에 의하여 지체 없이 수정하여야 합니다. 
              <br /><br />
              ② 제1항의 미준수로 인하여 발생하는 모든 손실은 회원에게 책임이 있습니다.  
            </p>

            <h3>제 19 조 (회원의 이용 등급)</h3>
            <p className="depth01_p">
              ① 회사는 회원의 서비스 이용실적(방문횟수, 이벤트 참여 횟수 등) 또는 가입 방법 등을 기준으로 회원의 이용 등급을 구분하여 운영할 수 있으며, 회원등급 구분기준 및 회원의 등급은 서비스 페이지 내에 게시합니다. 
              <br /><br />
              ② 회사는 회원에 대하여 회원 이용 등급에 따라 등급별로 이용 가능한 서비스 메뉴, 이벤트, 이용횟수 등을 세분화하여 차등을 둘 수 있으며, 상세한 시행 내용은 서비스 페이지 내에 별도 게시한 바에 따릅니다.
            </p>

            <h3>제 20 조 (회사의 의무와 책임)</h3>
            <p className="depth01_p">
            ① 회사는 서비스 제공과 관련하여 취득한 회원의 개인정보 또는 위치정보(이하 통칭할 경우 “개인정보 등”)를 본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다. 단, 관계 법령에 의한 수사상의 목적으로 관계기관으로부터 요구 받은 경우 등 법률의 규정에 따른 적법한 절차에 의한 경우에는 그러하지 않습니다. 
<br /><br />
            ② 회사는 업무와 관련하여 회원의 사전 동의 없이 회원 전체 또는 일부의 개인정보 등을 특정 회원의 정보를 구별할 수 없는 통계자료로 작성하여 이를 사용할 수 있고, 이를 위하여 회원의 휴대 단말기에 쿠키를 전송할 수 있습니다. 이 경우 회원은 쿠키의 수신을 거부하거나 쿠키의 수신에 대하여 경고하도록 사용하는 설정을 변경할 수 있으며, 쿠키의 설정 변경으로 인해 회사의 귀책사유 없이 서비스 이용이 변경될 수 있습니다. 
<br /><br />
            ③ 회사는 서비스와 관련한 회원의 불만 사항이 접수되는 경우 이를 신속하게 처리하여야 하며, 신속한 처리가 곤란한 경우 그 사유와 처리 일정을 서비스 화면에 게재하거나 제5조에서 정한 방법으로 회원에게 통지합니다. 
<br /><br />
            ④ 회사가 제공하는 전기차 충전 서비스로 인하여 회원에게 손해가 발생한 경우, 그러한 손해가 회사의 고의나 과실에 기해 발생한 경우에 한하여 회사에서 책임을 부담합니다. 
<br /><br />
            ⑤ 회사는 정보통신망법, 위치정보보호법, 통신비밀보호법, 전기통신사업법, 전자금융법 등 서비스의 운영 및 유지와 관련 있는 법규를 준수합니다.
            </p>

            <h3>제 21 조 (충전기 이용 시 준수사항)</h3>
            <p className="depth01_p">
              ① 회원은 충전기 이용 시 반드시 회사의 충전기 사용 안내 가이드를 준수해야 하며, 충전기 사용 중 문제 발생 시 본인 및 다른 회원의 안전을 위해 즉시 충전기 내 고지된 고객센터로 알려야 합니다. 
<br /><br />
              ② 회사가 운영하는 충전소의 급속충전기기를 이용할 때 즉시 충전 혹은 예약 충전의 방법을 선택할 수 있으며 이에 대한 이용 가능 시간은 회사의 정책에 따라 제한할 수 있으며 고객에게 제5조 2항의 방법으로 안내합니다. 
<br /><br />
              ③ 충전기 이용 시간의 제한 정책에 따라 회사는 이를 위반하는 고객을 대상으로 충전요금 이외의 별도 부과금을 청구할 수 있습니다. 별도 부과금의 구체적인 내용과 청구 방법은 유료 서비스 이용 정책을 통해 변경 고지합니다. 
<br /><br />
              ④ 회원은 충전기 사용시간 내에 발생하는 회원의 모든 법률 위반으로 인한 벌금, 과태료 등의 불이익을 부담해야 할 의무가 있습니다. 그리고 회사는 해당 기관이 법률 위반 집행에 필요한 자료 요구에 협조해야 합니다.
            </p>

            <h3>제 22 조 (충전 서비스 등의 사용 기록 및 이용 내역 정보 제공)</h3>
            <p className="depth01_p">
              ① 회원이 충전소에서 사용한 충전량, 충전 금액 등의 정보 기록은 자동으로 충전기에서 회사의 서버로 전송됩니다.
<br /><br />
              ② 회원의 충전 및 기타 유료 서비스 이용 내역은 회사가 운영하는 어플리케이션의 고객 계정을 통해 상시적으로 그 내역을 확인할 수 있도록 정보를 제공합니다. 
<br /><br />
              ③ 충전기의 충전량 및 통계데이터 등의 사용 현황 데이터는 사업자 자산관리 및 보호, 충전기 정상 운영 확인, 충전량에 따른 과금, 회원 서비스 등의 목적을 위해 활용될 수 있습니다. 
            </p>

            <h3>제 23 조 (ELVIS 캐시 이용)</h3>
            <p className="depth01_p">
              ① 회원은 회사가 지정한 지불수단을 통해 ELVIS 캐시를 유상으로 충전할 수 있으며 회사는 회원에게 사용실적, 이벤트 참여 등 회사가 정한 정책에 따라 ELVIS 캐시를 무상으로 제공할 수 있습니다. 
<br /><br />
              ② 회원은 전기차 충전 서비스 이용 시 간편결제수단과 함께 ELVIS 캐시를 사용할 수 있습니다. 단, 무상으로 지급된 ELVIS 캐시는 회사가 정한 유효기한 내에 회사가 정한 방법으로만 사용 가능합니다. 
<br /><br />
              ③ 회원에게 무상으로 제공된 ELVIS 캐시는 어떠한 경우에도 유상으로 거래하거나 현금으로 환급, 전환할 수 없습니다. 따라서 회원의 비정상적인 행위에 대해 회사는 각종 혜택 제공을 중지할 수 있습니다.
            </p>

            <h3>제 24 조 (결제의 이용)</h3>
            <p className="depth01_p">
              ① 회원은 본인인증방식 등 회사에서 정한 방법을 거쳐 결제카드를 등록하고 회사가 정한 각 서비스 별 이용정책에 따라 간편결제의 방식으로 서비스를 이용할 수 있습니다. 단, 법인 회원은 이용건별 즉시 결제의 방법으로만 이용할 수 있습니다. 
<br /><br />
              ② 회원이 간편결제를 이용하는 경우, 다음 각 호에 동의한 것으로 간주합니다.
            </p>
            <p className="depth02_p">
            1. 간편결제 이용에 동의한 회원은 전기차 충전 서비스 이용요금에 대해 별도의 인증과정 없이 결제를 하겠다는 의사표시를 한 것으로 봅니다. <br />
            2. 회원의 신용카드 또는 다른 유형의 결제카드가 개인 신용등급 및 연체 등의 문제로 인해 결제가 거절되어 서비스 이용에 대한 비용이 정산되지 않을 경우에 회사는 사전통지 없이 서비스 이용을 중지할 수 있으며, 지속적인 문제가 발생할 경우 회원자격을 박탈할 수 있습니다. <br />
            3. 제2호에 따라 미수가 발생한 경우, 회사는 회사가 정한 정책에 따라 회원에 대한 별도 고지 없이 회원이 등록한 결제수단으로 재결제 시도를 진행할 수 있습니다. <br />
            4. 결제 시점에 시스템 장애로 인하여 결제 실패가 된 경우에는, 시스템 정상화가 된 시점에 회원에 대한 별도 고지 없이 다시 결제를 진행합니다. 
            </p> 
            <p className="depth01_p">
              ③ 회사는 회원의 결제 정보를 검색할 수 있으며, 회원의 제반 결제 실적에 오류가 있을 경우에는 이를 정정할 수 있습니다.
            </p>

            <h3>제 25 조 (환불 및 연체)</h3>
            <p className="depth01_p">
            ① 회원의 귀책사유가 아닌 통신장애, 시스템 오류 등 정상적인 전기차 충전 서비스를 이용하지 못하거나 초과결제·중복결제 등의 문제가 발생한 경우, 회사는 해당 서비스의 정상적인 이용을 전제로 부과된 이용요금 또는 잘못 결제된 이용요금, 취소수수료의 전부 또는 일부를 해당 회원에게 환불합니다. 
            <br /><br />
            ② 회원이 이용요금, 수수료 등에 대해 이의를 제기하거나 환불 요청을 하려면 회사에 직접 요구해야 합니다. 단, 회사가 제공하는 플랫폼을 통해 구매한 서비스 중 제휴협약을 통해 제공되고 제휴사의 이용약관에 따라 제공되는 형태의 부가서비스는 직접 거래당사자에게 하여야 합니다. 
            <br /><br />
            ③ 회원의 이의신청은 다음 각 호의 절차에 따라 진행합니다. 
            </p>
            <p className="depth02_p">
            1. 회사는 이의신청 접수 후 10일 이내 이의 타당성 여부를 조사하고 그 결과를 회원 또는 그 대리인에게 통지합니다. <br />
            2. 부득이한 사유로 인하여 본 조 3항 1호에서 정한 기간 내에 이의신청 결과를 통지할 수 없는 경우에는 그 사유 및 재지정된 처리기한을 명시하여 이를 회원 또는 그 대리인에게 통지 합니다. 
            </p>
            <p className="depth01_p">
            ④ 회사는 회원이 지불한 결제수단과 동일한 수단을 통해 회사에서 정하는 방식으로 환불합니다. 다만, 동일한 수단으로 환불이 불가능한 경우 현금 등 다른 수단으로 환불할 수 있습니다. 
            <br /><br />
            ⑤ 회사는 요금 등을 반환 혹은 환불하여야 할 회원에게 미납요금 등이 있을 경우에는 반환하여야 할 요금 등에서 우선 변제하고 반환할 수 있습니다. 
            <br /><br />
            ⑥ 회사는 회원이 서비스 요금을 지정한 기일까지 납입하지 아니한 때에는 그 요금의 100분의 2에 상당하는 가산금을 월별로 가산하며, 1개월 미만 연체일수에 대해서는 일할 계산하여 재청구 합니다.
            </p>

            <h4>제 4 장 : 분쟁 및 손해배상</h4>

            <h3 className="mt40">제 26 조 (손해에 대한 배상)</h3>
            <p className="depth01_p">
            ① 회사의 고의 또는 중대한 과실로 인하여 회원에게 손해가 발생한 경우 회사는 이에 대한 배상책임을 부담합니다. 다만, 여기서 회사의 책임은 서비스 운영과 관련된 부분에 한정됩니다. 
            <br /><br />
            ② 회원이 전기차 충전 서비스를 이용함에 있어 행한 불법행위나 본 약관의 규정을 위반함으로 인하여 회사나 다른 회원에게 손해가 발생한 경우 회원은 이에 대한 배상책임을 부담합니다. 
            <br /><br />
            ③ 회원의 불법행위 내지 본 약관 위반행위로 인하여 회사가 제3자로부터 손해배상청구 또는 소송을 비롯한 각종 이의제기를 받는 경우 해당 회원은 자신의 책임과 비용으로 회사를 면책 시켜야 하며, 해당 회원은 그로 인하여 회사에 발생한 손해를 배상하여야 합니다.
            </p>

            <h3>제 27 조 (면책사항)</h3>
            <p className="depth01_p">
            ① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 전기차 충전 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다. 
            <br /><br />
            ② 회원이 전기차를 충전하고 충전요금을 결제하는 과정에서 장애를 겪거나 손해를 입게 된 경우 회원에 대하여 보증합니다. 
            <br /><br />
            ③ 회사는 회원의 본 약관, 서비스 이용 방법 및 이용 기준을 준수하지 않은 이용으로 인한 결과나 또는 회원의 귀책사유로 인한 서비스의 중지 및 이용 장애에 대하여 책임을 지지 않습니다.
            <br /><br />
            ④ 회사는 회원 본인의 결정에 따라 서비스를 통하여 특정 프로그램이나 정보 등을 다운받거나 접근함으로써 입게 되는 모바일, 시스템상의 손해나 데이터, 정보의 상실에 대한 책임을 지지 않습니다. 
            <br /><br />
            ⑤ 회사는 회원의 모바일 또는 시스템 오류, 개인정보 및 차량번호의 부정확한 기재, 비밀번호 관리의 소홀 등 이용자의 귀책사유로 인해 손해가 발생한 경우 책임을 지지 않습니다. 
            <br /><br />
            ⑥ 회사는 귀책사유가 없는 한 회원이 전기차 충전 서비스를 통해 기대하는 효용을 얻지 못한 것에 대하여 책임을 지지 않으며, 전기차 충전 서비스를 통하여 얻은 자료로 인한 손해 등에 대하여도 책임을 지지 않습니다.
            </p>

            <h3>제 28 조 (광고 등의 게재)</h3>
            <p className="depth01_p">
            ① 회사는 전기차 충전 서비스 어플리케이션 운영과 관련하여 서비스 화면 등에 광고를 게재 할 수 있습니다. 
            <br /><br />
            ② 회사는 회원의 서비스 이용과 관련하여 필요하다고 인정되는 다양한 정보와 광고를 App 서비스 화면 등에 게재하거나 푸시 알림으로 제공할 수 있습니다.
            </p>

            <h3>제 29 조 (재판권 및 준거법)</h3>
            <p className="depth01_p">
            ① 전기차 충전 서비스 이용과 관련하여 회사와 이용자 사이에 분쟁이 발생한 경우, 회사와 회원은 분쟁의 해결을 위해 성실히 협의합니다. 
            <br /><br />
            ② 본 조 제1항의 협의에 의하여서도 분쟁이 해결되지 않을 경우 양 당사자는 민사소송법에서 정하여진 법정관할법원에 소를 제기할 수 있습니다. 다만, 회사와 이용자 간의 개별적이고 명백한 합의에 의하여 관할법원을 정할 수 있습니다. 
            <br /><br />
            ③ 본 약관에서 정하지 않은 사항과 본 약관의 해석에 관하여는 대한민국 법 및 상관례에 따릅니다. <br /><br />
            </p>
            <p className="depth02_p">
              [부칙] 이 약관은 2023년 2월 1일부터 적용됩니다.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsForm;
