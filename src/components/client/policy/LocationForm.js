import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LocationForm = () => {
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
    <div className="sub sub07 sub07-3">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
          위치기반 서비스 이용약관
          </h2>

          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <li>
              <NavLink to="/">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
              위치기반 서비스 이용약관
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
            <h2>위치기반 서비스 약관</h2>
            <h3>제 1 조 (목적)</h3>
            <p className="depth01_p">
            본 약관은 엘에스이링크 주식회사(이하 "회사"라 합니다)가 제공하는 위치기반서비스(이하 “서비스”)를 이용함에 있어 회사와 개인위치정보주체의 권리, 의무 및 책임사항 등 기본적인 사항을 규정함을 목적으로 합니다.
            </p>

            <h3>제 2 조 (이용약관의 효력 및 변경)</h3>
            <p className="depth01_p">
            ① 본 약관은 서비스를 신청한 고객 또는 개인위치정보주체가 본 약관에 동의하고 회사가 정한 소정의 절차에 따라 서비스의 이용자로 등록함으로써 효력이 발생합니다. 
            <br /><br />
            ② 개인위치정보주체가 회사가 제공하는 애플리케이션 내에서 본 약관의 "동의" 버튼을 클릭하였을 경우 본 약관의 내용을 모두 읽고 이를 충분히 이해하였으며, 그 적용에 동의한 것으로 간주 합니다. 
            <br /><br />
            ③ 회사는 서비스에 새로운 업무 적용, 정부에 의한 시정명령의 이행 및 기타 회사의 업무상 약관을 변경해야 할 중요한 사유가 있다고 판단될 경우 본 약관을 변경할 수 있습니다. 
            <br /><br />
            ④ 이용자와 계약을 체결한 서비스가 기술적 사양의 변경 등의 사유로 변경될 경우에는 서비스가 변경될 수 있으며, 회사는 그 사유를 이용자에게 통지 가능한 수단으로 즉시 통지합니다. 
            <br /><br />
            ⑤ 회사는 본 약관을 변경할 경우에는 변경된 약관과 사유를 적용일자 1주일 전까지 서비스 내에 게시하거나 개인위치정보주체에게 전자적 형태(전자우편 등)로 공지하며, 개인위치정보주체가 그 기간 안에 이의제기가 없거나, 서비스를 이용할 경우 이를 승인한 것으로 봅니다.
            </p>

            <h3>제 3 조 (약관 외 준칙)</h3>
            <p className="depth01_p">
            본 약관은 신의성실의 원칙에 따라 공정하게 적용하며, 본 약관에 명시되지 아니한 사항에 대하여는 「위치정보의 보호 및 이용 등에 관한 법률」, 「개인정보 보호법」 등 관계법령과 회사의 서비스 이용약관, 개인정보보호처리방침, 회사가 별도로 정한 지침 또는 상관례에 따릅니다.
            </p>

            <h3>제 4 조 (서비스의 가입)</h3>
            <p className="depth01_p">
            회사는 아래와 같은 경우에는 이용자의 가입신청을 승낙하지 않을 수 있습니다. 
            </p>
            <p className="depth02_p">
            1. 실명이 아니거나 다른 사람의 명의를 사용하는 등 허위로 신청하는 경우<br /> 
            2. 회원 등록 사항을 빠뜨리거나 잘못 기재하여 신청하는 경우 <br />
            3. 기타 회사가 정한 이용신청 요건을 충족하지 않았을 경우
            </p>

            <h3>제 5 조 (서비스의 해지)</h3>
            <p className="depth01_p">
            회원이 서비스 이용을 해지하고자 할 경우 회원은 회사가 정한 절차(서비스 홈페이지 등을 통해 공지)를 통해 서비스 해지를 신청할 수 있으며, 회사는 신속히 처리합니다.
            </p>

            <h3>제 6 조 (위치기반서비스의 내용)</h3>
            <p className="depth01_p">
            회사는 위치정보사업자로부터 제공받은 위치정보를 이용하여 다음 각 호의 서비스를 제공합니다.
            </p>
            <p className="depth02_p">
            1. 개인위치정보주체의 위치에서 근접한 전기차 충전소 정보제공 서비스 <br />
            2. 회사가 제공하는 서비스의 종류, 세부 내용은 엘에스이링크(주) 서비스 이용약관(이하 ‘서비스 이용약관’) 에 따릅니다.
            </p>

            <h3>제 7 조 (정보의 제공)</h3>
            <p className="depth01_p">
            회사는 서비스를 운영함에 있어 각종 정보를 서비스 홈페이지 및 애플리케이션의 게시판 게재 또는 전자우편 등의 방법으로 개인위치정보주체에게 제공할 수 있습니다.
            </p>

            <h3>제 8 조 (서비스의 이용)</h3>
            <p className="depth01_p">
            ① 서비스의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 다만, 회사의 업무상이나 기술상의 이유로 서비스가 일시 중지될 수 있고, 또한 운영상의 목적으로 회사가 정한 기간에는 서비스가 일시 중지될 수 있습니다. 이러한 경우 회사는 사전 또는 사후에 이를 공지합니다. 
            <br /><br />
            ② 회사는 서비스를 일정범위로 분할하여 각 범위별로 이용 가능한 시간을 별도로 정할 수 있으며 이 경우 그 내용을 공지합니다.
            </p>

            <h3>제 9 조 (서비스의 제한 및 정지)</h3>
            <p className="depth01_p">
            ① 회사는 아래 각 호의 경우에는 회원의 서비스 이용을 제한하거나 중지시킬 수 있습니다. 
            </p>
            <p className="depth02_p">
            1. 회원이 회사 서비스의 운영을 고의 또는 중과실로 방해하는 경우 <br />
            2. 서비스용 설비 점검, 보수 또는 공사로 인하여 부득이한 경우 <br />
            3. 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우 <br />
            4. 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 경우 <br />
            5. 기타 중대한 사유로 인하여 회사가 서비스 제공을 지속하는 것이 부적당하다고 인정하는 경우 
            </p>
            <p className="depth01_p">
            ② 회사는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한 때에는 그 사유 및 제한 기간 등을 회원에게 알려야 합니다.
            </p>

            <h3>제 10 조 (위치정보 이용ㆍ제공사실 확인자료의 보유근거 및 보유기간)</h3>
            <p className="depth01_p">
            회사는 「위치정보의 보호 및 이용 등에 관한 법률」 제16조 제2항에 따라 위치정보 이용ㆍ제공사실 확인자료를 위치정보시스템에 자동으로 기록하고, 해당 자료는 6개월 간 보관합니다.
            </p>

            <h3>제 11 조 (개인위치정보의 보유목적 및 보유기간)</h3>
            <p className="depth01_p">
            ① 회사는 개인위치정보주체의 위치에서 근접한 전기차충전소 정보 제공을 목적으로 위치기반 서비스를 제공하고, 이를 위하여 필요한 최소한의 기간 동안 개인위치정보를 보유 및 이용합니다. 
            <br /><br />
            ② 회사는 위치기반서비스에서 개인위치정보를 일회성 또는 임시로 이용 후 지체없이 파기합니다.
            </p>

            <h3>제 12 조 (서비스 이용요금)</h3>
            <p className="depth01_p">
            서비스의 이용요금은 무료입니다. 단, 개인위치정보주체가 회사의 서비스를 이용하기 위하여 이동통신사업자에 지불하는 통신요금은 별도이며 각 이동통신사의 정책에 따릅니다.
            </p>

            <h3>제 13 조 (개인위치정보의 이용 또는 제공에 따른 통보에 관한 사항)</h3>
            <p className="depth01_p">
            ① 회사는 개인위치정보주체의 동의 없이 개인위치정보주체의 개인위치정보를 제3자에게 제공하지 아니하며, 제3자 제공하는 경우에는 제공받는 자 및 제공목적을 사전에 개인위치정보주체에게 고지하고 동의를 받습니다. 
            <br /><br />
            ② 회사는 상호, 주소, 그 밖의 연락처를 개인위치정보주체가 쉽게 알 수 있도록 서비스 내에 게시하며 약관의 내용은 개인위치정보주체가 서비스 또는 서비스 내 연결화면을 통하여 볼 수 있도록 합니다.
            </p>

            <h3>제 14 조 (개인위치정보주체의 권리와 그 행사방법)</h3>
            <p className="depth01_p">
            ① 개인위치정보주체는 이용약관의 내용 중 일부, 개인위치정보의 이용ㆍ제공목적ㆍ제공받는 자의 범위 및 위치기반서비스의 일부, 개인위치정보주체에 대한 통보방법에 대해 동의를 유보할 수 있습니다. 
            <br /><br />
            ② 개인위치정보주체는 언제든지 개인위치정보의 이용 또는 제공에 관한 동의의 전부 또는 일부를 철회할 수 있습니다. 
            <br /><br />
            ③ 개인위치정보주체는 언제든지 개인위치정보의 이용 또는 제공의 일시적인 중지를 요구할 수 있습니다. 이 경우 회사는 요구를 거절하지 아니하며, 이를 위한 기술적 수단을 갖추고 있습니다. 
            <br /><br />
            ④ 개인위치정보주체는 회사에 대해 아래 자료의 열람 또는 고지를 요구할 수 있고, 당해 자료에 오류가 있는 경우에는 그 정정을 요구할 수 있습니다. 이 경우 회사는 정당한 이유 없이 요구를 거절하지 아니합니다. 
            </p>
            <p className="depth02_p">
            1. 개인위치정보주체에 대한 위치정보 이용, 제공사실 확인자료 <br />
            2. 개인위치정보주체의 개인위치정보가 「위치정보의 보호 및 이용 등에 관한 법률」 또는 다른 법률의 규정에 의해 제3자에게 제공된 이유 및 내용 
            </p>
            <p className="depth01_p">
            ⑤ 회사는 개인위치정보주체가 위치정보 이용제공에 대한 동의의 전부 또는 일부를 철회한 경우에는 지체 없이 개인위치정보 및 위치정보 이용, 제공사실 확인자료(동의의 일부를 철회한 경우에는 철회하는 부분의 확인자료)를 파기합니다. 
            <br /><br />
            ⑥ 개인위치정보주체는 제1항 내지 제4항의 권리행사를 위해 회사 소정의 절차를 통해 회사에 요구할 수 있습니다.
            </p>

            <h3>제 15 조 (법정대리인의 권리와 그 행사방법)</h3>
            <p className="depth01_p">
            ① 회사는 만14세 미만 아동의 개인위치정보를 이용·제공하고자 하는 경우(개인위치정보주체가 지정하는 제3자에게 제공하는 서비스를 하고자 하는 경우 포함)에는 만14세 미만의 아동과 그 법정대리인의 동의를 받고, 법정대리인이 동의하였는지 확인합니다. 
            <br /><br />
            ② 법정대리인은 만14세 미만 아동의 개인위치정보 이용·제공에 동의하는 경우 동의유보권, 동의철회권 및 일시중지권, 열람·고지요구권을 행사할 수 있습니다.
            </p>

            <h3>제 16 조 (8세이하의 아동 등의 보호의무자의 권리)</h3>
            <p className="depth01_p">
            ① 회사는 아래의 경우에 해당하는 자(이하 “8세 이하의 아동”등이라 합니다)의 보호의무자가 8세이하의 아동 등의 생명 또는 신체보호를 위하여 개인위치정보의 이용 또는 제공에 동의하는 경우에는 본인의 동의가 있는 것으로 봅니다. 
            </p>
            <p className="depth02_p">
            1. 8세 이하의 아동 <br />
            2. 피성년후견인 <br />
            3. 「장애인복지법」 제2조 제2항 제2호의 규정에 의한 정신적 장애를 가진 사람으로서 「장애인고용촉진 및 직업재활법」 제2조 제2호의 규정에 의한 중증장애인에 해당하는 사람(「장애인복지법」 제32조의 규정에 의하여 장애인등록을 한 사람에 한합니다) 
            </p>
            <p className="depth01_p">
            ② 8세 이하의 아동 등의 생명 또는 신체의 보호를 위하여 개인위치정보의 이용 또는 제공에 동의를 하고자 하는 보호의무자는 서면동의서에 보호의무자임을 증명하는 서면을 첨부하여 회사에 제출하여야 합니다. 
            <br /><br />
            ③ 8세 이하의 아동등의 보호의무자는 8세 이하의 아동 등의 개인위치정보 이용 또는 제공에 동의하는 경우 개인위치정보주체 권리의 전부를 행사할 수 있습니다.
            </p>

            <h3>제 17 조 (위치정보관리책임자의 지정)</h3>
            <p className="depth01_p">
            ① 회사는 위치정보를 적절히 관리,보호하고 개인위치정보주체의 불만을 원활히 처리할 수 있도록 실질적인 책임을 질 수 있는 지위에 있는 자를 위치정보관리책임자로 지정해 운영합니다. 
            <br /><br />
            ② 위치정보관리책임자는 다음과 같이 지정합니다. 
            </p>
            <p className="depth02_p">
            1. 소 속 : 경영지원팀 <br />
            2. 성 명 : 노진복 팀장 <br />
            3. 이메일 주소: jbnoh@lselink.com
            </p>

            <h3>제 18 조 (회사의 의무)</h3>
            <p className="depth01_p">
            ① 회사는 개인위치정보주체로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우에는 즉시 처리하여야 합니다. 다만, 즉시 처리가 곤란한 경우는 개인위치정보주체에게 그 사유와 처리 일정을 전자우편 등으로 통보하여야 합니다. 
            <br /><br />
            ② 회사는 서비스 제공과 관련하여 취득한 개인위치정보주체의 위치정보나 등록정보를 본인의 사전 승낙 없이 제3자에게 누설 또는 배포할 수 없습니다. 다만, 관계법령에 의한 수사상의 목적으로 관계기관으로부터 요구받은 경우나 방송통신심의위원회의 요청이 있는 경우에는 예외사항을 인정합니다. 
            <br /><br />
            ③ 회사는 계속적이고 안정적인 서비스의 제공을 위하여 설비에 장애가 생기거나 멸실된 때에는 지체 없이 이를 수리 또는 복구합니다. 다만, 천재지변, 비상사태 또는 그밖에 부득이한 경우에는 그 서비스를 일시 제한하거나 정지할 수 있습니다. 
            <br /><br />
            ④ 회사는 이용계약의 체결 등 개인위치정보주체와의 계약관련 절차 및 내용 등에 있어 개인위치정보주체에게 편의를 제공하도록 노력합니다.
            </p>

            <h3>제 19 조 (개인위치정보주체의 의무)</h3>
            <p className="depth01_p">
            ① 개인위치정보주체는 서비스를 이용할 때 다음 각 호의 행위를 하여서는 아니 됩니다. 
            </p>
            <p className="depth02_p">
            1. 이용 신청 또는 변경 시 허위 사실을 기재하는 행위 <br />
            2. 회사의 서비스 정보를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제 또는 유통시키거나 상업적으로 이용하는 행위 <br />
            3. 타인의 명예를 손상시키거나 불이익을 주는 행위 <br />
            4. 회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위 <br />
            5. 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형, 음성 등을 타인에게 유포하는 행위 <br />
            6. 서비스와 관련된 설비의 오동작이나 정보 등의 파괴 및 혼란을 유발시키는 컴퓨터 바이러스 감염 자료를 등록 또는 유포하는 행위 <br />
            7. 서비스 운영을 고의로 방해하거나 서비스의 안정적 운영을 방해할 수 있는 정보를 전송하는 행위 <br />
            8. 타인으로 가장하는 행위 및 타인과의 관계를 허위로 명시하는 행위 <br />
            9. 다른 회원의 개인정보 및 위치정보를 수집, 저장, 공개하는 행위 <br />
            10. 자기 또는 타인에게 재산상의 이익을 주거나 타인에게 손해를 가할 목적으로 허위의 정보를 유통시키는 행위 <br />
            11. 서비스에 게시된 정보를 변경하는 행위 <br />
            12. 회사의 직원이나 운영자를 가장하거나 사칭하여 또는 타인의 명의를 도용하여 글을 게시하거나 이메일을 발송하는 행위 <br />
            13. 스토킹 등 다른 회원을 괴롭히는 행위 <br />
            14. 기타 불법적이거나 부당한 행위 
            </p>
            <p className="depth01_p">
            ② 개인위치정보주체는 관계 법령, 본 약관의 규정, 이용안내 및 서비스 상에 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 아니 됩니다. 
            <br /><br />
            ③ 이용자는 서비스 이용을 위해 등록할 경우 현재의 사실과 일치하는 완전한 정보를 제공하여야 하며 변경사항이 발생한 경우에는 즉시 갱신하여야 합니다. 
            <br /><br />
            ④ 회원이 제공한 등록정보 및 갱신한 등록정보가 부정확할 경우, 기타 회원이 본 조 제1항에 명시된 행위를 한 경우에 회사는 회원의 서비스 이용을 제한 또는 중지할 수 있습니다.
            </p>

            <h3>제 20 조 (손해배상의 범위)</h3>
            <p className="depth01_p">
            ① 개인위치정보주체는 회사가 「위치정보의 보호 및 이용 등에 관한 법률」 제15조 내지 제26조의 규정의 위반한 행위로 손해를 입은 경우에 회사에 대해 손해배상을 청구할 수 있습니다. 이 경우 회사는 고의 또는 과실이 없음을 입증하지 아니하면 책임을 면할 수 없습니다. 
            <br /><br />
            ② 회사는 그 손해가 천재지변 등 불가항력적인 사유로 발생하였거나 개인위치정보주체의 고의 또는 과실로 인하여 발생한 때에는 손해를 배상하지 아니합니다. 
            <br /><br />
            ③ 회사는 개인위치정보주체가 망사업자의 통신환경에 따라 발생할 수 있는 오차 있는 위치정보를 이용함으로써 개인위치정보주체 및 제3자가 입은 손해에 대하여는 배상하지 아니합니다. 
            <br /><br />
            ④ 개인위치정보주체는 본 약관의 제규정을 위반함으로써 회사 또는 제3자에게 손해가 발생한 경우 손해를 배상할 책임이 있으며, 본항은 본 약관에 따른 이용계약의 해지 이후에도 효력이 있습니다. 
            <br /><br />
            ⑤ 개인위치정보주체의 회사에 대한 손해배상의 청구는 회사에 청구사유, 청구금액 및 산출근거를 기재하여 서면으로 하여야 합니다.
            </p>

            <h3>제 21 조 (면책)</h3>
            <p className="depth01_p">
            ① 회사는 다음 각 호의 사유로 인하여 서비스를 제공할 수 없는 경우 이로 인하여 개인위치정보주체에게 발생한 손해에 대해서는 책임을 부담하지 않습니다. 
            </p>
            <p className="depth02_p">
            1. 천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우 <br />
            2. 서비스 제공을 위하여 회사와 서비스 제휴계약을 체결한 제3자의 고의적인 서비스 방해가 있는 경우 <br />
            3. 개인위치정보주체의 귀책사유로 서비스 이용에 장애가 있는 경우 <br />
            4. 제1호 내지 제3호를 제외한 기타 회사의 고의ㆍ과실이 없는 사유로 인한 경우 
            </p>
            <p className="depth01_p">
            ② 회사는 서비스 및 서비스에 게재된 정보, 자료, 사실의 신뢰도, 정확성 등에 대해서는 보증을 하지 않으며 이로 인해 발생한 개인위치정보주체의 손해에 대하여는 책임을 부담하지 아니합니다.
            </p>

            <h3>제 22 조 (양도금지)</h3>
            <p className="depth01_p">
            개인위치정보주체는 본 약관에 따른 지위, 권리, 의무의 전부 또는 일부를 제3자에게 양도, 위임, 대여, 담보권 설정할 수 없습니다.
            </p>

            <h3>제 23 조 (분쟁의 조정 및 기타)</h3>
            <p className="depth01_p">
            ① 회사는 위치정보와 관련된 분쟁에 대해 당사자간 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 「위치정보의 보호 및 이용 등에 관한 법률」 제28조에 의하여 방송통신위원회에 재정을 신청할 수 있습니다. 
            <br /><br />
            ② 회사와 개인위치정보주체는 위치정보와 관련된 분쟁에 대해 당사자간 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 「개인정보 보호법」 제40조에 따른 개인정보분쟁조정위원회에 조정을 신청할 수 있습니다. 
            <br /><br />
            ③ 제1항, 제2항에도 불구하고 분쟁이 해결되지 않는 경우 양 당사자는 민사소송법상의 관할법원에 소를 제기할 수 있습니다.
            </p>

            <h3>제 24 조 (회사의 상호, 주소, 그 밖의 연락처)</h3>
            <p className="depth01_p">
            회사의 상호 및 주소 등은 다음과 같습니다. 
            </p>
            <p className="depth02_p">
            1. 상호: 엘에스이링크 주식회사 <br />
            2. 주소: 서울특별시 용산구 한강대로 92(한강로2가, 용산LS타워) <br />
            3. 이메일 주소: lselink@lselink.com  <br /><br /><br />
            </p>
            <p className="depth02_p">
            [부 칙] 본 약관은 2023년 2월 1일부터 시행합니다.
            </p>




          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
