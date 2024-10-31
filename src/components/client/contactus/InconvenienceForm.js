import React, { useEffect, useState, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertContactUs } from 'store/contactUsReducer';
import AOS from 'aos';
import classnames from 'classnames';

const InconvenienceForm = () => {
  const [contactNm, setContactNm] = useState('');
  const [contactTitle, setContactTitle] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMail, setContactMail] = useState('');
  const [contactContents, setContactContents] = useState('');
  const [contactAgree, setContactAgree] = useState(false);
  const [fileName, setFileName] = useState('');
  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);

  const [agreeActive, setAgreeActive] = useState(false);

  const [emailCheck, setEmailCheck] = useState(true);

  const fileRef = useRef();

  const dispatch = useDispatch();

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

  // 핸드폰 등록
  const phoneChange = (e) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    setContactPhone(onlyNumber);
  };

  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴

    setEmailCheck(regExp.test(e.target.value));
    console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value));
  };

  const onCreate = async (e) => {
    e.preventDefault();

    const fileObj =
      fileRef.current.constructor.name === 'File' && fileRef.current;

    if (contactNm === '') {
      alert('이름을 입력하세요');
      return;
    }
    if (contactPhone === '') {
      alert('연락처를 입력하세요');
      return;
    }
    if (contactMail === '') {
      alert('메일을 입력하세요');
      return;
    }
    if (!emailCheck) {
      alert('이메일 유효 하지 않습니다.');
      return;
    }
    if (contactTitle === '') {
      alert('제목을 입력하세요');
      return;
    }
    if (contactContents === '') {
      alert('내용을 입력하세요');
      return;
    }
    if (!contactAgree) {
      alert('개인정보 수집및 이용에 동의에 체크하세요');
      return;
    }
    if (window.confirm('등록 하시겠습니까?')) {
      const newList = {
        contactId: 'CON',
        contactNm: contactNm,
        contactTitle: contactTitle,
        contactPhone: contactPhone,
        contactMail: contactMail,
        contactContents: contactContents,
        contactAgree: contactAgree ? 'Y' : 'N',
        contactType: 'B',
        file: fileObj,
      };
      const result = await dispatch(insertContactUs(newList));
      if (result.payload.data > 0) {
        alert('등록 되었습니다.');
        document.location.href = '/contactUs/inconvenience';
      } else {
        alert('등록에 실패하였습니다.');
      }
    }
  };

  const onUploadFile = useCallback((e) => {
    const acceptFileTypes =
      /(\.|\/)(jpg|gif|png|jpeg|pdf|hwp|xlsx|docx|ppt|pptx)$/i;
    const acceptFileSize = 50 * 1024 * 1024;

    if (!e.target.files) {
      return;
    }

    if (!acceptFileTypes.test(e.target.files[0].name)) {
      alert(
        '첨부파일은 jpg, png, gif, jpeg, pdf, hwp, xlsx, docx, ppt, pptx 파일만 업로드 가능합니다.',
      );
      return;
    }

    if (e.target.files[0].size > acceptFileSize) {
      alert('첨부파일은 최대 50MB 이하의 파일만 업로드 가능합니다.');
      return;
    }

    setFileName(e.target.files[0].name);
    fileRef.current = e.target.files[0];
    e.target.value = '';
  }, []);

  const onDeleteFile = useCallback((e) => {
    e.preventDefault();
    setFileName('');
    fileRef.current = '';
  }, []);

  const checkHandler = (e) => {
    setContactAgree(!contactAgree);
  };

  return (
    <div className="sub sub06">
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
                불편신고
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/contactus/consult">상담신청</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/inconvenience" className="on">
                    불편신고
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/inquiry">질의하기</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/cyberNewspaper">
                    사이버 신문고
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-slide-wrap">
        <div className="nav-slide">
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
              <NavLink to="/contactus/consult">상담신청</NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/contactus/inconvenience" className="on">
                불편신고
              </NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/contactus/inquiry">질의하기</NavLink>
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
            불편사항을 접수해주시면 담당자가 확인 후 빠르게 연락드리겠습니다.
          </h3>
          <div className="term">
            <div className="agree">
              <label htmlFor="privacychk">
                <input
                  type="checkbox"
                  id="privacychk"
                  checked={contactAgree}
                  onChange={(e) => checkHandler(e)}
                />
                <span className="chkimg"></span>
                개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>
            <NavLink
              to=""
              className={agreeActive ? 'open' : ''}
              onClick={() => setAgreeActive(!agreeActive)}
            >
              약관보기
            </NavLink>
          </div>
          <div className="agree-detail-wp">
            <div
              className="agree-detail-box"
              style={agreeActive ? { display: 'block' } : { display: 'none' }}
            >
              <h3>1. 총칙</h3>
              <p className="depth01_p">
                엘에스이링크 주식회사(이하 "회사")는 회사가 운영하는
                엘에스이링크(주) ELVIS 전기차 충전 서비스(이하 "전기차 충전
                서비스")를 이용하는 고객의 편의를 위해 이용자의 동의를 기반으로
                개인 정보를 수집, 이용 및 제공하고 있습니다. 회사는
                정보통신서비스제공자가 준수하여야 하는 " 개인정보보호법",
                "정보통신망이용촉진 및 정보보호 등에 관한 법률" 등 관계 법령,
                개인정보보 호 규정 및 가이드라인이 정하는 내용을 준수합니다.
                "개인정보처리방침"이란 전기차 충전 서비스 이용을 위해 고객이
                제공하는 개인정보를 전기차 충전 서비스의 이용 용도와 방식으로
                수집 및 처리함에 있어, 개인정보보호를 위하여 회사가 준수해야 할
                지침을 말합니다.
              </p>
              <h3>2. 개인정보의 처리 목적, 항목 및 보유기간</h3>
              <p className="depth01_p">
                1) 회사는 다음의 목적을 위하여 아래와 같이 개인정보 항목을
                처리하고 있습니다. 법령에 따른 개인정보 보유 및 이용기간 또는
                고객님으로부터 개인정보를 수집 시에 동의 받은 개인정보 보유,
                이용기간 내에서 개인정보를 처리, 보유합니다. 회사가 처리하고
                있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                이용 목적, 항목이 변경되는 경우에는 ｢개인정보 보호법｣ 제18조에
                따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <h4>① 회원 관리 서비스 : 전기차 충전 서비스의 회원 관리 </h4>
              <p className="depth02_p">
                ㄱ. 수집·이용 목적 : 회원가입 및 본인확인, 본인차량여부 확인,
                간편가입 서비스 제공, 서비스 부정이용 방지, 가입의사 확인 및
                회원자격 유지/관리, 서비스 이용 및 상담지원, 충전서비스 관련
                알림메시지 발송 등 고지사항 전달 <br />
                ㄴ. 수집 항목 : [필수항목] 아이디, 이름, CI, 휴대전화번호, 주소,
                이메일, 본인확인번호, 간편가입 인증번호 <br />
                - 신용카드 이용요금결제를 위해 일부 마스킹 처리된 신용카드번호,
                암호화된 빌키(billkey) 및 발급일시 수집 <br />
                - 생년월일 신용카드 본인 소유 확인을 위해 PASS 본인 인증을 통해
                수집하고 복호화 가능한 암호값으로 저장 관리 <br />
                - [선택항목] 차량 보유유형, 자동차등록번호(차량 번호), 차량
                제조사, 차종, 차량 연식, 차량 모델, 차량 닉네임 <br />
                ㄷ. 보유기간 : 회원탈퇴시 즉시 삭제 (관련법령이 있는 경우는
                예외)
              </p>
              <h4>② 서비스 : 전기차 충전 서비스</h4>
              <p className="depth02_p">
                ㄱ. 수집·이용 목적 : <br />
                - ELVIS 캐시, 충전내역 조회, 결제카드 및 차량관리 <br />
                - 제휴 포인트 전환 및 사용, 서비스 제공 등 <br />
                * 신용카드 등록관련정보는 입력 직후 암호화되어 각 금융회사에게
                전달되고 회사에 저장하지 않습니다. 회사는 결제 진행을 위하여
                암호화된 정보만을 전달 받아 사용합니다. <br />
                ㄴ. 수집 항목 : [필수항목] 휴대전화번호,
                결제·승인관련정보[결제카드인증번호, CI, 결제카드 별칭, 충전이력,
                결제이력, 제휴포인트 사용이력, 멤버십카드·포인트
                관련정보[멤버십카드번호, 자동차등록번호(차량번호), 차량 제조사,
                차종, 차량정보(최초 가입 이후 차량을 추가 등록하는 경우) <br />
                ㄷ. 보유기간 : 회원탈퇴시 즉시 삭제 (관련법령이 있는 경우는
                예외)
              </p>
              <h4>③ 서비스 : 전기차 충전 서비스의 개선 </h4>
              <p className="depth02_p">
                ㄱ. 수집·이용 목적 : VOC 처리, 접속빈도 파악 및 서비스 이용에
                대한 개선에 통계처리 <br />
                ㄴ. 수집 항목 : [필수항목] 서비스 이용기록, 불량 이용기록,
                충전내역, 1:1 문의내역, 차량 진단데이터
                <br />
                ㄷ. 보유기간 : 회원탈퇴시 즉시 삭제 (관련법령이 있는 경우는
                예외)
              </p>
              <h4>④ 서비스 : 위치기반서비스</h4>
              <p className="depth02_p">
                ㄱ. 수집·이용 목적 : 충전소 검색, 충전소 길안내 <br />
                ㄴ. 수집 항목 : [필수항목] 실시간 위치정보(GPS) <br />
                ㄷ. 보유기간 : 충전소 검색, 길안내 기능 종료 후 즉시 삭제 (별도
                저장하지 않음)
              </p>
              <h4>⑤ 서비스 : 마케팅 및 광고 </h4>
              <p className="depth02_p">
                ㄱ. 수집·이용 목적 : 전기차 충전 서비스와 관련된 광고성 정보
                전달 및 마케팅에 활용, 시장 조사, 상품 및 이벤트 안내 등<br />
                ㄴ. 수집 항목 : [필수항목] 성명, 생년월일, 성별, 암호화된 동일인
                식별 정보(CI), 휴대폰번호, 내외국인 여부, 이메일 주소, 구입차량
                정보, 충전이력, ELVIS 캐시 사용이력 <br />
                ㄷ. 보유기간 : 회원탈퇴시 즉시 삭제 (관련법령이 있는 경우는
                예외)
              </p>
              <h4>⑥ 서비스 : 차량 등록 </h4>
              <p className="depth02_p">
                ㄱ. 수집·이용 목적 : 회원가입 시 회원등급 설정 <br />
                ㄴ. 수집 항목 : 차량 닉네임, 차량 보유유형, 자동차 등록번호
                (차량번호), 차량 제조사, 차종, 모델명, 차량연식 <br />
                ㄷ. 보유기간 : 회원탈퇴시 즉시 삭제 (관련법령이 있는 경우는
                예외)
              </p>
              <p className="depth01_p">
                2) 단, 상법 등 관련법령의 규정에 의하여 보존할 의무가 있는 경우
                회사는 고객의 개인정보 를 보관합니다. 이 경우 회사는 보관하는
                정보를 그 보관의 목적으로만 이용하며 보존기간은 다음과 같습니다.
              </p>
              <p className="depth02_p">
                ① 회사의 상업장부와 영업에 관한 중요서류 및 전표 등에 관련된
                정보 : 10년 - 중요서류 / 5년 – 전표(상법) <br />
                ② 모든 거래에 관한 장부 및 증빙서류와 관련된 정보 : 5년
                (국세기본법, 법인세법) <br />
                ③ 계약 또는 청약철회 등에 관한 기록, 대금결제 및 재화 등의
                공급에 관한 기록 : 5년 (전자상거래 등에서의 소비자보호에 관한
                법률) <br />
                ④ 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래
                등에서의 소비자보호에 관한 법률) <br />⑤ 장부와 교부한
                세금계산서 또는 영수증 : 5년 (부가가치세법) <br />⑥
                「통신비밀보호법」에 따른 서비스이용기록, 접속로그, 접속IP정보 :
                3개월 3) 회사는 개인위치정보의 이용•제공 사실 확인 자료를
                『위치정보의 보호 및 이용 등에 관한 법률』 제16조 제2항에
                근거하여 위치정보 시스템에 자동으로 기록하며, 민원 처리 등을
                위해 개인위치정보 이용•제공 사실 확인 자료를 그 기록
                시점으로부터 6개월 동안 보유합니다.
              </p>

              <h3>3. 개인정보의 파기절차 및 파기방법</h3>
              <p className="depth01_p">
                1) 회사는 다른 법률에 따라 개인정보를 보존하여야 하는 경우가
                아닌 한, 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
                불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
              </p>
              <p className="depth01_p">
                2) 회사는 다른 법률에 따라 보유하여야 하는 경우가 아닌 한,
                개인위치정보의 보유기간의 경과, 처리목적 달성 등 개인위치정보가
                불필요하게 되었을 때에는 제2조3항에 따라 기록·보존하여야 하는
                위치정보 이용·제공사실 확인자료 외의 개인위치정보는 즉시
                파기합니다.
              </p>
              <p className="depth01_p">
                3) 고객님으로부터 동의 받은 개인정보 보유기간이 경과하거나 처리
                목적이 달성되었음에도 불구하고 다른 법령에 의한 근거 및 내부
                방침 및 정보보호 사유(보유 및 이용기간 참조)에 따라 개인정보를
                계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의
                데이터베이스(DB)로 옮기거나 보관 장소를 달리하여(종이의 경우
                별도의 서류함) 보존합니다. 별도 DB로 옮겨진 개인정보는 법률에
                의한 경우가 아니고서는 보유되는 목적 이외의 다른 목적으로
                이용되지 않습니다.
              </p>
              <p className="depth01_p">
                4) 개인정보(개인위치정보 포함) 파기의 절차 및 방법은 다음과
                같습니다.
              </p>
              <p className="depth02_p">
                - 파기절차 : 회사는 파기 사유가 발생한 개인정보를 선정하고,
                회사의 개인(위치)정보 보호책임자의 승인을 받아 개인정보를
                파기합니다.
                <br />- 파기방법 : 회사는 전자적 파일 형태로 기록·저장된
                개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에
                기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
              </p>

              <h3>4. 개인정보의 제3자 제공</h3>
              <p className="depth01_p">
                1) 회사는 고객의 개인정보를 제2조(개인정보의 처리 목적, 항목 및
                보유기간)에서 명시한 범위 내에서만 처리하며, 고객의 동의, 법률의
                특별한 규정 등 ｢개인정보 보호법｣ 제17조 및 제18조에 해당하는
                경우에만 개인정보를 제3자에게 제공합니다.
              </p>
              <p className="depth01_p">
                2) 회사는 고객님의 개인위치정보를 고객님께서 지정하는 제3자에게
                제공하는 경우 개인위치 정보를 수집한 당해 통신 단말 장치로 매회
                고객님께 제공받는 자, 제공 일시 및 제공 목적을 즉시 통보합니다.
                단, 다음에 해당하는 경우에는 고객님께서 미리 특정하여 지정한
                통신 단말 장치 또는 E-mail로 통보합니다.
              </p>
              <p className="depth02_p">
                - 개인위치정보를 수집한 당해 통신 단말 장치가 문자, 음성 또는
                영상의 수신 기능을 갖추지 않은 경우 <br />- 개인위치정보 주체가
                개인위치정보를 수집한 당해 통신 단말 장치 외의 통신 단말 장치
                또는 E-mail 등으로 통보할 것을 미리 요청한 경우
              </p>

              <h3>5. 개인정보의 안전성 확보조치</h3>
              <p className="depth01_p">
                ※ 개인정보의 기술적/관리적 보호 대책 <br />
                전기차 충전 서비스는 고객의 개인정보를 처리함에 있어 개인정보의
                분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여
                아래와 같은 기술적/관리적 대책을 적용하고 있습니다.
              </p>
              <h4>1) 기술적 조치</h4>
              <p className="depth02_p">
                ① 고객정보의 암호화 고유식별정보, 카드번호 등 법령에서 암호화를
                요구하고 있는 개인정보를 저장하는 경우, DB 내에 암호화저장되어
                외부 침입에 의해 유출되더라도 고객의 개인정보를 활용할 수 없도록
                하고 있습니다. <br />② 통신 구간 암호화 홈페이지를 통한 회원가입
                및 로그인 등 고객정보를 입력하여 전달하는 구간에 대해 SSL 등
                암호화 통신을 통하여 고객의 정보가 안전하게 전송되도록 조치하고
                있습니다. <br />③ 보안솔루션의 설치 서비스 제공 및 고객의 정보를
                안전하게 관리하기 위하여 개인정보처리시스템에 대해
                백신프로그램의 설치, 주기적인 업데이트 및 정기점검을 수행하고
                있으며, DB 접근제어 솔루션 및 필요시 화면캡처방지 솔루션 등을
                적용하고 있습니다.
              </p>
              <h4>2) 관리적 조치 </h4>
              <p className="depth02_p">
                ① 개인정보관리체계 수립 개인정보를 안전하게 관리하기 위하여 회사
                내부적으로 개인정보 관리체계를 수립하여 운영하고 있습니다.{' '}
                <br />
                ② 개인정보보호 위원회 운영 회사의 개인정보보호를 위한 위원회를
                구성하여 연 1회 이상 위원회 회의를 개최하고 개인정보관리체계의
                운영 및 개인정보보호 이슈 등의 사항에 대하여 개선하고 바로잡기
                위한 노력을 기울이고 있습니다. <br />③ 개인정보 취급자 관리
                고객의 개인정보를 처리하는 개인정보취급자를 대상으로
                개인정보보호 서약서를 제출 받고, 연 1회 이상의 개인정보보호
                교육을 수행하여 고객정보의 중요성과 안전하게 관리하도록 하고
                있습니다. 또한 개인정보처리자의 권한 관리를 통하여 불필요한
                고객의 개인정보에 대한 접근과 노출을 최소화하고 있습니다.
              </p>

              <h3>
                6. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항
              </h3>
              <p className="depth01_p">
                1) 전기차 충전 서비스는 이용자에게 개별적인 맞춤서비스를
                제공하기 위해 이용 정보를 저장하고 수시로 불러오는
                `쿠키(cookie)`를 사용합니다.
              </p>
              <p className="depth01_p">
                2) 쿠키는 웹사이트를 운영하는데 이용되는 서버(http(s))가
                이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의
                PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
              </p>
              <p className="depth02_p">
                ① 쿠키의 사용목적: 이용자가 방문한 각 서비스와 웹 사이트들에
                대한 방문 및 이용형태, 보안접속 여부 등을 파악하여 이용자에게
                최적화된 정보 제공을 위해 사용됩니다. 고객은 쿠키 설치에 대한
                선택권을 가지고 있습니다. 따라서, 고객은 웹브라우저에서 옵션을
                설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을
                거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. <br />
                ② 쿠키의 설치∙운영 및 거부: 쿠키 설정을 거부하는 방법으로는
                고객이 사용하는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를
                허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의
                저장을 거부할 수 있습니다.
              </p>
              <p className="notice_p">
                ※ 설정방법 예 (인터넷 익스플로어의 경우) : 웹 브라우저
                상단의도구 &gt; 인터넷옵션 &gt; 개인정보 &gt; 고급 &gt; 설정방법
                선택
              </p>
              <p className="depth02_p">
                ③ 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 일부
                서비스는 이용에 어려움이 있을 수 있습니다.
              </p>

              <h3>7. 개인정보의 열람 및 정정</h3>
              <p className="depth01_p">
                1) 회원님은 언제든지 등록되어 있는 본인의 개인정보를 열람하거나
                정정하실 수 있습니다. 특히 회원님의 개인정보의 정정 요구에
                대하여 회사는 해당 내용에 대해 정정할 때까지 당해 개인정보를
                이용하지 않습니다.
              </p>
              <p className="depth01_p">
                2) 회사는 회원의 개인정보 이용내역을 연 1회 이상 회원에게
                전자우편, 서면, 팩스, 전화 등의 방법으로 통지합니다.
              </p>

              <h3>8. 개인정보 수집, 이용, 제공에 대한 동의철회</h3>
              <p className="depth01_p">
                1) 회원님은 회원가입 시 개인정보 수집, 이용 및 제공에 대해
                동의하신 내용을 언제든지 철회하실 수 있습니다.
              </p>
              <p className="depth01_p">
                2) 동의 철회는 홈페이지나 고객센터에 연락하여 본인 확인 절차를
                거치신 후 직접 동의철회 신청을 하시거나, 개인정보 보호책임자
                또는 개인정보 보호담당자에게 서면 또는 E-Mail등으로 송부하여
                주시면 지체 없이 조치하여 드립니다.
              </p>

              <h3>9. 고객, 법정대리인의 권리와 의무 및 그 행사방법</h3>
              <p className="depth01_p">
                1) 고객 또는 법정대리인(만 14세 미만의 아동인 경우)은 회사에
                대하여 언제든지 개인정보 수집 · 이용 · 제공 등의 동의를
                철회(가입해지)할 수 있으며 개인정보 열람, 정정, 삭제, 처리 정지
                요구 등의 권리를 행사할 수 있습니다.
                <br />
                <br />
                2) 고객 또는 법정대리인은 위와 같은 권리 행사를 온라인에서는
                회사 홈페이지에 접속하여 본인 확인 절차를 거친 후 개인정보관리
                메뉴에서 하실 수 있고, 서면, 전화 또는 이메일 등을 통하여
                고객센터 또는 회사 개인정보보호 책임자 및 담당자에게 연락하는
                방법으로 하실 수 있으며, 회사는 이에 대해 지체 없이
                조치하겠습니다.
                <br />
                <br />
                3) 제1, 2항에 따른 권리 행사는 고객님의 법정대리인이나 위임을
                받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 “개인정보
                처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른
                위임장을 제출하셔야 합니다.
                <br />
                <br />
                4) 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제4항,
                제37조제2항에 의하여 고객님의 권리가 제한될 수 있습니다.
                <br />
                <br />
                5) 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가
                수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수
                없습니다.
                <br />
                <br />
                6) 회사는 정보주체 권리에 따른 열람의 요구, 정정, 삭제의 요구,
                처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한
                대리인인지를 확인합니다.
                <br />
                <br />
                7) 고객이 개인정보 오류정정을 요구하신 경우, 회사는 오류정정을
                완료하기 전까지 당해 개인정보를 이용 · 제공하지 않으며, 이미
                제3자에게 당해 개인정보를 제공한 경우에는 제3자에게 지체 없이
                통지하여 오류 정정이 이루어지도록 합니다.
                <br />
                <br />
                8) 고객 또는 법정 대리인이 동의철회(가입해지)한 경우, 회사는
                지체없이 파기하는 것을 원칙으로 하나 관계법령에서 의무적으로
                보유하도록 한 경우에는 개인정보 처리방침 `개인정보의 보유 및
                이용기간`에 따라 처리하고, 반드시 필요한 경우에만 열람 또는
                이용이 가능하도록 조치하고 있습니다.
              </p>

              <h3>
                10. 8세 이하의 아동 등의 보호의무자의 권리ㆍ의무와 행사방법
              </h3>
              <p className="depth01_p">
                1) 회사는 다음 중 어느 하나에 해당하는 자(이하 “8세 이하의 아동
                등”)의 보호의무자가 8세 이하의 아동 등의 생명 또는 신체의 보호를
                위하여 8세 이하의 아동 등의 개인위치정보의 수집·이용· 제공에
                동의하는 경우에는 본인의 동의가 있는 것으로 봅니다.
              </p>
              <p className="depth02_p">
                - 8세 이하의 아동 <br />
                - 피성년후견인 <br />- 『장애인복지법』 제2조 제2항 제2호의
                규정에 의한 정신적 장애를 가진 자로서 장애인 고용 촉진 및
                직업재활법 제2조 제2호의 규정에 의한 중증 장애인에 해당하는
                자(『장애인복지법』 제32조에 따라 장애인 등록을 한 자에 한정)
              </p>
              <p className="depth01_p">
                2) 8세 이하의 아동 등의 보호의무자는 8세 이하의 아동 등을 사실상
                보호하는 자로서 다음 중 어느 하나에 해당하는 자를 의미합니다.
              </p>
              <p className="depth02_p">
                - 8세 이하의 아동의 법정대리인 또는 「보호시설에 있는 미성년자의
                후견 직무에 관한 법률」 제3조에 따른 후견인
                <br />
                - 피성년후견인의 법정대리인 <br />- 제1항제3호의 자의 법정대리인
                또는 「장애인복지법」 제58조제1항제1호에 따른 장애인 거주
                시설(국가 또는 지방자치단체가 설치ㆍ운영하는 시설로 한정한다)의
                장, 「정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률」
                제22조에 따른 정신요양시설의 장 및 같은 법 제26조에 따른
                정신재활시설(국가 또는 지방자치단체가 설치ㆍ운영하는 시설로
                한정한다)의 장
              </p>
              <p className="depth01_p">
                3) 8세 이하의 아동 등의 생명 또는 신체의 보호를 위하여
                개인위치정보의 수집ㆍ이용ㆍ제공에 동의를 하려는 경우 8세 이하의
                아동 등의 보호의무자임을 증명하기 위하여 서면동의서에 다음
                사항을 기재하고 그 보호의무자가 기명날인 또는 서명한 후 회사에
                제출하여야 합니다.
              </p>
              <p className="depth02_p">
                - 8세 이하의 아동 등의 성명, 주소 및 생년월일 <br />
                - 보호의무자의 성명, 주소 및 연락처 <br />
                - 개인위치정보 수집, 이용 또는 제공의 목적이 8세 이하의 아동
                등의 생명 또는 신체의 보호에 한정된다는 사실 <br />- 동의 연월일
              </p>
              <p className="depth01_p">
                4) 보호의무자가 8세 이하의 아동 등의 개인위치정보의
                수집·이용·제공에 동의한 경우 “고객 (개인위치정보주체)”은
                보호의무자로 보며, 회사에 대하여 언제든지 『위치정보의 보호 및
                이용 등에 관한 법률』 제24조에 따른 권리를 행사할 수 있습니다.
                또한, 고객으로서 권리와 의무 및 그 행사방법은 [8. 고객,
                법정대리인의 권리와 의무 및 그 행사방법]에 따릅니다.
              </p>

              <h3>11. 고객의 권익침해에 대한 구제방법</h3>
              <p className="depth01_p">
                고객께서는 아래의 기관에 대해 개인정보 침해에 대한 피해구제,
                상담 등을 문의하실 수 있습니다. 아래의 기관은 전기차 충전
                서비스와 별개의 기관으로서, ELVIS 충전서비스의 자체적인 개인정보
                불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이
                필요하시면 문의하여 주시기 바랍니다.
              </p>

              <table className="table_basic tb01">
                <tr>
                  <th>개인정보 침해신고센터(한국인터넷진흥원 운영)</th>
                  <td>
                    - 소관업무 : 개인정보 침해사실 신고, 상담 신청 <br />
                    - 홈페이지 : privacy.kisa.or.kr <br />
                    - 전화 : (국번없이) 118 <br />- 주소 : (58324) 전남 나주시
                    진흥길 9(빛가람동 301-2) 3층
                  </td>
                </tr>
                <tr>
                  <th>개인정보 분쟁조정위원회</th>
                  <td>
                    - 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적
                    해결)
                    <br />
                    - 홈페이지 : www.kopico.go.kr <br />
                    - 전화 : (국번없이) 1833-6972 <br />- 주소 :
                    (03171)서울특별시 종로구 세종대로 209 정부서울청사 12층
                  </td>
                </tr>
                <tr>
                  <th>대검찰청</th>
                  <td>(국번없이) 1301 (www.spo.go.kr) </td>
                </tr>
                <tr>
                  <th>경찰청</th>
                  <td>(국번없이) 182 (ecrm.cyber.go.kr)</td>
                </tr>
              </table>

              <h3>12. 개인정보 보호책임자 및 담당자, 업무처리 부서</h3>
              <p className="depth01_p">
                1) 전기차 충전 서비스는 개인정보 처리에 관한 업무를 총괄해서
                책임지고, 개인정보 처리와 관련한 고객의 불만처리 및 피해구제
                등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>

              <table className="table_basic tb02">
                <tr>
                  <th>개인정보보호 정책 및 총괄</th>
                  <th>ELVIS 충전서비스 부문</th>
                </tr>
                <tr>
                  <td>
                    개인정보 보호책임자 : 노진복 팀장
                    <br />
                    (소속 : 경영지원팀 , 이메일 : jbnoh@lselink.com)
                  </td>
                  <td>
                    개인(위치)정보 보호담당자 : 장동수 매니저
                    <br />
                    (소속 : 서비스개발파트, 이메일 : dschang@lselink.com){' '}
                  </td>
                </tr>
              </table>

              <p className="depth01_p">
                2) 위 개인정보 보호 담당 부서에서 개인정보 열람청구 업무를
                담당하고 있습니다.
                <br />
                <br />
                3) 고객께서는 전기차 충전 서비스(또는 사업)를 이용하시면서
                발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에
                관한 사항을 개인정보보호책임자 및 담당부서로 문의하실 수
                있습니다. 전기차 충전 서비스는 고객님의 문의에 대해 지체 없이
                답변 및 처리해 드리겠습니다. <br />
                <br />
              </p>

              <p className="depth02_p">
                ※ 다만 개인정보 보호 관련 문의, 불만 및 피해관련 내용 이외의
                내용으로 발송하시는 이메일은 답변 및 처리가 어려우며, 담당자의
                동의 없이 발송하는 영리목적의 광고성 이메일에 대해서 는
                「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제50조부터
                제50조의8의 규정에 따라 관계기관에 신고 등의 조치가 이루어 질 수
                있습니다.
              </p>

              <h3>13. 광고성 정보 전송 관련 안내</h3>
              <p className="depth01_p">
                1) 전기차 충전 서비스는 고객의 사전 동의 없이 영리목적의 광고성
                정보를 전송하지 않습니다.
                <br />
                <br />
                2) 전기차 충전 서비스는 이벤트 안내, 마케팅 및 홍보 등 영리
                목적의 광고성 정보를 전송하는 경우에는 광고성 정보 전송에 대한
                사전 동의를 득한 고객에 한하여 발송하고 있습니다.
                <br />
                <br />
                3) 전기차 충전 서비스는 전자적 전송 매체를 이용하여 광고성 정보
                전송하는 경우 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」
                제50조부터 제50조의8의 규정에 따라 다음과 같이 조치 후 전송하고
                있습니다.
              </p>
              <h4>
                전자적 전송 수단 : 휴대전화 문자메시지, 전자우편, 팩스, 그 밖의
                전자적 전송매체{' '}
              </h4>
              <p className="depth02_p">
                ① 제목이 시작되는 부분에 (광고) 표시 <br />
                ② 전송자의 명칭 및 연락처 <br />③ 무료 수신 거부 가능 번호 표기
              </p>
              <p className="depth01_p">
                4) 전기차 충전 서비스는 고객님이 광고성 정보 수신 동의를 한
                날로부터 매 2년 마다 고객의 광고성 정보 수신 동의 사실을
                고객에게 확인합니다. 고객께서 수신 동의 여부 안내를 받은 후
                아무런 의사표시를 하지 않으신 경우 수신 동의 의사가 그대로
                유지됩니다.
                <br />
                <br />
                5) 전기차 충전 서비스는 오후 9시부터 그 다음 날 오전 8시까지의
                시간에 전자적 전송매체를 이용한 광고성 정보를 전송하지 않습니다.
                <br />
                <br />
                6) 다만 아래의 경우에 전자적 전송매체로 발송하는 내용은 광고성
                정보의 예외로 봅니다.
              </p>
              <p className="depth02_p">
                - 회사와 고객간 체결된 전기차 충전 서비스 계약이행 등과 관련한
                정보 <br />- 관련 법령에 따라 차량 안전 및 품질관련 내용 등
                회사가 반드시 고객에게 고지해야 하는 사항
              </p>

              <h3>14. 개인정보 처리방침의 변경에 관한 사항</h3>
              <p className="depth01_p">
                전기차 충전 서비스는 본 개인정보처리방침을 변경하는 경우 그 이유
                및 변경내용을 홈페이지 첫 화면의 공지사항 또는 별도의 창을
                통하는 등의 방법으로 사전에 공지한 후 변경 및 적용하고 있습니다.{' '}
                <br />
                <br />
              </p>
              <p className="depth02_p">
                [부칙] (시행일) 본 방침은 2023년 2월 1일부터 시행됩니다.
              </p>
            </div>
          </div>
          <ul className="write">
            <li>
              <div className="input-wrap">
                <span className="tit">이름 (필수)</span>
                <input
                  type="text"
                  placeholder="이름을 입력해주세요."
                  onChange={(e) => setContactNm(e.target.value)}
                  value={contactNm}
                />
              </div>
              <div className="input-wrap pc-block"></div>
            </li>
            <li>
              <div className="input-wrap">
                <span className="tit">연락처 (필수)</span>
                <input
                  type="text"
                  placeholder="-를 제외하고 입력해주세요."
                  onChange={phoneChange}
                  value={contactPhone}
                  maxlength={11}
                />
              </div>
              <div className="input-wrap">
                <span className="tit">이메일 (필수)</span>
                <input
                  type="text"
                  placeholder="이메일 주소를 입력해주세요."
                  onChange={(e) => setContactMail(e.target.value)}
                  value={contactMail}
                  onKeyUp={checkEmail}
                />
              </div>
            </li>
            <li>
              <div className="input-wrap">
                <span className="tit">제목</span>
                <input
                  type="text"
                  placeholder="제목을 입력해주세요."
                  onChange={(e) => setContactTitle(e.target.value)}
                  value={contactTitle}
                />
              </div>
            </li>
            <li>
              <div className="input-wrap">
                <span className="tit">내용</span>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="문의 하실 내용을 입력해주세요."
                  onChange={(e) => setContactContents(e.target.value)}
                  value={contactContents}
                ></textarea>
              </div>
            </li>
          </ul>
          <div className="file">
            <div className="input-box">
              <label htmlFor="choice" className="file-choice">
                <input
                  type="file"
                  id="choice"
                  className="file"
                  ref={fileRef}
                  onChange={onUploadFile}
                />
                파일첨부 +
              </label>
              <span
                className={fileName ? 'upload-name on' : 'upload-name'}
                onClick={onDeleteFile}
              >
                {fileName}
              </span>
            </div>
            <p>
              ※ 첨부파일은 최대 50MB 이하의 jpg, png, gif, jpeg, pdf, hwp, xlsx,
              docx, ppt, pptx 파일만 업로드 가능합니다.
            </p>
          </div>
          <NavLink to="" className="qa-btn" onClick={onCreate}>
            문의하기
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default InconvenienceForm;
