import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';

/* 관리자 */
//로그인
import LoginPage from './pages/admin/LoginPage';

//로그아웃
import Logout from './components/admin/Logout';

//팝업 국문
import PopupPage from './pages/admin/main/PopupPage';
import PopupAddPage from './pages/admin/main/PopupAddPage';
import PopupModPage from './pages/admin/main/PopupModPage';
import PopupInfoPage from './pages/admin/main/PopupInfoPage';

//팝업 영문
import PopupEnPage from './pages/admin_en/main/PopupEnPage';
import PopupAddEnPage from './pages/admin_en/main/PopupAddEnPage';
import PopupModEnPage from './pages/admin_en/main/PopupModEnPage';
import PopupInfoEnPage from './pages/admin_en/main/PopupInfoEnPage';

//회사 연혁 국문
import OutlinePage from './pages/admin/company/OutlinePage';

//회사 연혁 영문
import OutlineEnPage from './pages/admin_en/company/OutlineEnPage';

//공시정보 국문
import OfficialNoticePage from './pages/admin/investInfo/OfficialNoticePage';

//공시정보 영문
import OfficialNoticeEnPage from './pages/admin_en/investInfo/OfficialNoticeEnPage';

//재무정보 국문
import FinancialPage from './pages/admin/investInfo/FinancialPage';
import FinancialAddPage from './pages/admin/investInfo/FinancialAddPage';
import FinancialModPage from './pages/admin/investInfo/FinancialModPage';
import FinancialInfoPage from './pages/admin/investInfo/FinancialInfoPage';

//재무정보 영문
import FinancialEnPage from './pages/admin_en/investInfo/FinancialEnPage';
import FinancialAddEnPage from './pages/admin_en/investInfo/FinancialAddEnPage';
import FinancialModEnPage from './pages/admin_en/investInfo/FinancialModEnPage';
import FinancialInfoEnPage from './pages/admin_en/investInfo/FinancialInfoEnPage';

//공고 국문
import AnnouncePage from './pages/admin/investInfo/AnnouncePage';
import AnnounceAddPage from './pages/admin/investInfo/AnnounceAddPage';
import AnnounceModPage from './pages/admin/investInfo/AnnounceModPage';
import AnnounceInfoPage from './pages/admin/investInfo/AnnounceInfoPage';

//공고 영문
import AnnounceEnPage from './pages/admin_en/investInfo/AnnounceEnPage';
import AnnounceAddEnPage from './pages/admin_en/investInfo/AnnounceAddEnPage';
import AnnounceModEnPage from './pages/admin_en/investInfo/AnnounceModEnPage';
import AnnounceInfoEnPage from './pages/admin_en/investInfo/AnnounceInfoEnPage';

//보도자료 국문
import PressReleasePage from './pages/admin/publicRelations/PressReleasePage';
import PressReleaseAddPage from './pages/admin/publicRelations/PressReleaseAddPage';
import PressReleaseModPage from './pages/admin/publicRelations/PressReleaseModPage';
import PressReleaseInfoPage from './pages/admin/publicRelations/PressReleaseInfoPage';

//보도자료 영문
import PressReleaseEnPage from './pages/admin_en/publicRelations/PressReleaseEnPage';
import PressReleaseAddEnPage from './pages/admin_en/publicRelations/PressReleaseAddEnPage';
import PressReleaseModEnPage from './pages/admin_en/publicRelations/PressReleaseModEnPage';
import PressReleaseInfoEnPage from './pages/admin_en/publicRelations/PressReleaseInfoEnPage';

//미디어 국문
import MediaPage from './pages/admin/publicRelations/MediaPage';
import MediaAddPage from './pages/admin/publicRelations/MediaAddPage';
import MediaModPage from './pages/admin/publicRelations/MediaModPage';
import MediaInfoPage from './pages/admin/publicRelations/MediaInfoPage';

//미디어 영문
import MediaEnPage from './pages/admin_en/publicRelations/MediaEnPage';
import MediaAddEnPage from './pages/admin_en/publicRelations/MediaAddEnPage';
import MediaModEnPage from './pages/admin_en/publicRelations/MediaModEnPage';
import MediaInfoEnPage from './pages/admin_en/publicRelations/MediaInfoEnPage';

//채용정보 국문
import JobVacancyPage from './pages/admin/employmentInfo/JobVacancyPage';
import JobVacancyAddPage from './pages/admin/employmentInfo/JobVacancyAddPage';
import JobVacancyModPage from './pages/admin/employmentInfo/JobVacancyModPage';
import JobVacancyInfoPage from './pages/admin/employmentInfo/JobVacancyInfoPage';

//채용정보 영문
import JobVacancyEnPage from './pages/admin_en/employmentInfo/JobVacancyEnPage';
import JobVacancyAddEnPage from './pages/admin_en/employmentInfo/JobVacancyAddEnPage';
import JobVacancyModEnPage from './pages/admin_en/employmentInfo/JobVacancyModEnPage';
import JobVacancyInfoEnPage from './pages/admin_en/employmentInfo/JobVacancyInfoEnPage';

//고객센터 국문
import ContactUsPage from './pages/admin/customerService/ContactUsPage';
import ContactUsInfoPage from './pages/admin/customerService/ContactUsInfoPage';

//고객센터 영문
import ContactUsEnPage from './pages/admin_en/customerService/ContactUsEnPage';
import ContactUsInfoEnPage from './pages/admin_en/customerService/ContactUsInfoEnPage';

//관리자권한
import MgmtPage from './pages/admin/role/MgmtPage';
import MgmtAddPage from './pages/admin/role/MgmtAddPage';
import MgmtModPage from './pages/admin/role/MgmtModPage';

/* 클라이언트 */
//국문
import MainPage from './pages/MainPage';
import ClientPopupPage from './pages/PopupPage';

//영문
import MainEnPage from './pages/MainEnPage';
import ClientPopupEnPage from './pages/PopupEnPage';

// 회사소개 국문
import LselinkPage from './pages/client/company/LselinkPage';
import VisionPage from './pages/client/company/VisionPage';
import HistoryPage from './pages/client/company/HistoryPage';
import IdentityPage from './pages/client/company/IdentityPage';
import BusinessplacePage from './pages/client/company/BusinessplacePage';

// 회사소개 영문
import LselinkEnPage from './pages/client_en/company/LselinkPage';
import VisionEnPage from './pages/client_en/company/VisionPage';
import HistoryEnPage from './pages/client_en/company/HistoryPage';
import IdentityEnPage from './pages/client_en/company/IdentityPage';
import BusinessplaceEnPage from './pages/client_en/company/BusinessplacePage';

// 사업영역 국문
import EvchargePage from './pages/client/business/e-link/EvchargePage';
import ControlPage from './pages/client/business/e-link/ControlPage';
import ElinkRenewablePage from './pages/client/business/e-link/RenewablePage';
import TransportationPage from './pages/client/business/ev/TransportationPage';
import LogiticsPage from './pages/client/business/ev/LogiticsPage';
import CoporatePage from './pages/client/business/ev/CoporatePage';
import RenewablePage from './pages/client/business/renewable/RenewablePage';

// 사업영역 영문
import EvchargeEnPage from './pages/client_en/business/e-link/EvchargePage';
import ControlEnPage from './pages/client_en/business/e-link/ControlPage';
import ElinkRenewableEnPage from './pages/client_en/business/e-link/RenewablePage';
import TransportationEnPage from './pages/client_en/business/ev/TransportationPage';
import LogiticsEnPage from './pages/client_en/business/ev/LogiticsPage';
import CoporateEnPage from './pages/client_en/business/ev/CoporatePage';
import RenewableEnPage from './pages/client_en/business/renewable/RenewablePage';

// 투자정보 국문
import ManagementPage from './pages/client/investment/ManagementPage';
import ClientFinancialPage from './pages/client/investment/FinancialPage';
import ClientFinancialviewPage from './pages/client/investment/FinancialviewPage';
import CreditPage from './pages/client/investment/CreditPage';
import InvAnnouncePage from './pages/client/investment/AnnouncePage';
import InvAnnounceviewPage from './pages/client/investment/AnnounceviewPage';

// 투자정보 영문
import ManagementEnPage from './pages/client_en/investment/ManagementPage';
import ClientFinancialEnPage from './pages/client_en/investment/FinancialPage';
import ClientFinancialviewEnPage from './pages/client_en/investment/FinancialviewPage';
import CreditEnPage from './pages/client_en/investment/CreditPage';
import InvAnnounceEnPage from './pages/client_en/investment/AnnouncePage';
import InvAnnounceviewEnPage from './pages/client_en/investment/AnnounceviewPage';

// 흥보센터 국문
import PresslistPage from './pages/client/pr/PresslistPage';
import PressviewPage from './pages/client/pr/PressviewPage';
import MedialistPage from './pages/client/pr/MedialistPage';
import MediaviewPage from './pages/client/pr/MediaviewPage';

// 흥보센터 영문
import PresslistEnPage from './pages/client_en/pr/PresslistPage';
import PressviewEnPage from './pages/client_en/pr/PressviewPage';
import MedialistEnPage from './pages/client_en/pr/MedialistPage';
import MediaviewEnPage from './pages/client_en/pr/MediaviewPage';

// 채용정보 국문
import PeoplePage from './pages/client/recruit/PeoplePage';
import BenefitsPage from './pages/client/recruit/BenefitsPage';
import PostingPage from './pages/client/recruit/PostingPage';
import PostingviewPage from './pages/client/recruit/PostingviewPage';

// 채용정보 영문
import PeopleEnPage from './pages/client_en/recruit/PeoplePage';
import BenefitsEnPage from './pages/client_en/recruit/BenefitsPage';
import PostingEnPage from './pages/client_en/recruit/PostingPage';
import PostingviewEnPage from './pages/client_en/recruit/PostingviewPage';

// Contact US 국문
import ConsultPage from './pages/client/contactus/ConsultPage';
import InconveniencePage from './pages/client/contactus/InconveniencePage';
import InquiryPage from './pages/client/contactus/InquiryPage';

// Contact US 영문
import ConsultEnPage from './pages/client_en/contactus/ConsultPage';
import InconvenienceEnPage from './pages/client_en/contactus/InconveniencePage';
import InquiryEnPage from './pages/client_en/contactus/InquiryPage';

// 약관 국문
import PrivacyPage from './pages/client/policy/PrivacyPage';
import TermsPage from './pages/client/policy/TermsPage';
import LocationPage from './pages/client/policy/LocationPage';

// 약관 영문
import PrivacyEnPage from './pages/client_en/policy/PrivacyPage';
import TermsEnPage from './pages/client_en/policy/TermsPage';
import LocationEnPage from './pages/client_en/policy/LocationPage';

/* EV 충전소 */
//브랜드 소개
import IndexPage from './pages/client/ev/IndexPage';

//충전소 찾기
import FindPage from './pages/client/ev/FindPage';

//로그인
import LoginEvPage from './pages/client/ev/login/loginPage';

//회원가입 약관동의
import Join1Page from './pages/client/ev/login/Join1Page';
//회원가입 약관동의
import Join1SnsPage from './pages/client/ev/login/Join1SnsPage';

//회원가입 정보입력
import Join2Page from './pages/client/ev/login/Join2Page';
//회원가입 정보입력
import Join2SnsPage from './pages/client/ev/login/Join2SnsPage';
//회원가입 가입완료
import Join3Page from './pages/client/ev/login/Join3Page';

//아이디 찾기
import FindIdPage from './pages/client/ev/login/FindIdPage';
//아이디 결과
import FindId2Page from './pages/client/ev/login/FindId2Page';

//비밀번호 찾기
import FindPwPage from './pages/client/ev/login/FindPwPage';
//비밀번호 재설정
import RepwPage from './pages/client/ev/login/RepwPage';

//고객센터 공지사항
import NoticePage from './pages/client/ev/NoticePage';
//고객센터 공지사항 View
import NoticeInfoPage from './pages/client/ev/NoticeInfoPage';
//고객센터 Faq
import FaqPage from './pages/client/ev/FaqPage';
//고객센터 문의하기
import InquiryEvPage from './pages/client/ev/InquiryPage';
//고객센터 문의하기 View
import InquiryInfoPage from './pages/client/ev/InquiryInfoPage';
//고객센터 문의하기 Write
import InquiryAddPage from './pages/client/ev/InquiryAddPage';

//마이페이지 이용내역
import MyPage1 from './pages/client/ev/MyPage1';
//마이페이지 Elvis 캐시
import MyPage2 from './pages/client/ev/MyPage2';
//마이페이지 커뮤니티
import MyPage3 from './pages/client/ev/MyPage3';

//관제센터
import ControlEvPage from './pages/client/ev/ControlPage';

//네이버리다이렉트
import NaverRedirect from './components/client/ev/login/NaverRedirect';
//카카오다이렉트
import KakaoRedirect from './components/client/ev/login/KakaoRedirect';
//구글다이렉트
import GoogleRedirect from './components/client/ev/login/GoogleRedirect';
//애플다이렉트
import AppleRedirect from './components/client/ev/login/AppleRedirect';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/admin/logout" element={<Logout />} />
        <Route path="/admin/main/popup" element={<PopupPage />} />
        <Route path="/admin/main/popupAdd" element={<PopupAddPage />} />
        <Route path="/admin/main/popupMod/:id" element={<PopupModPage />} />
        <Route path="/admin/main/popupInfo/:id" element={<PopupInfoPage />} />

        <Route path="/admin/main/popupEn" element={<PopupEnPage />} />
        <Route path="/admin/main/popupAddEn" element={<PopupAddEnPage />} />
        <Route path="/admin/main/popupModEn/:id" element={<PopupModEnPage />} />
        <Route path="/admin/main/popupInfoEn/:id" element={<PopupInfoEnPage />} />

        <Route path="/admin/company/outline" element={<OutlinePage />} />
        <Route path="/admin/company/outlineEn" element={<OutlineEnPage />} />

        <Route path="/admin/investInfo/officialNotice" element={<OfficialNoticePage />} />
        <Route path="/admin/investInfo/officialNoticeEn" element={<OfficialNoticeEnPage />} />

        <Route path="/admin/investInfo/financial" element={<FinancialPage />} />
        <Route path="/admin/investInfo/financialAdd" element={<FinancialAddPage />} />
        <Route path="/admin/investInfo/financialMod/:id" element={<FinancialModPage />} />
        <Route path="/admin/investInfo/financialInfo/:id" element={<FinancialInfoPage />} />
        <Route path="/admin/investInfo/financialEn" element={<FinancialEnPage />} />
        <Route path="/admin/investInfo/financialAddEn" element={<FinancialAddEnPage />} />
        <Route path="/admin/investInfo/financialModEn/:id" element={<FinancialModEnPage />} />
        <Route path="/admin/investInfo/financialInfoEn/:id" element={<FinancialInfoEnPage />} />

        <Route path="/admin/investInfo/announce" element={<AnnouncePage />} />
        <Route path="/admin/investInfo/announceAdd" element={<AnnounceAddPage />} />
        <Route path="/admin/investInfo/announceMod/:id" element={<AnnounceModPage />} />
        <Route path="/admin/investInfo/announceInfo/:id" element={<AnnounceInfoPage />} />
        <Route path="/admin/investInfo/announceEn" element={<AnnounceEnPage />} />
        <Route path="/admin/investInfo/announceAddEn" element={<AnnounceAddEnPage />} />
        <Route path="/admin/investInfo/announceModEn/:id" element={<AnnounceModEnPage />} />
        <Route path="/admin/investInfo/announceInfoEn/:id" element={<AnnounceInfoEnPage />} />

        <Route path="/admin/publicRelations/pressRelease" element={<PressReleasePage />} />
        <Route path="/admin/publicRelations/pressReleaseAdd" element={<PressReleaseAddPage />} />
        <Route path="/admin/publicRelations/pressReleaseMod/:id" element={<PressReleaseModPage />} />
        <Route path="/admin/publicRelations/pressReleaseInfo/:id" element={<PressReleaseInfoPage />} />
        <Route path="/admin/publicRelations/pressReleaseEn" element={<PressReleaseEnPage />} />
        <Route path="/admin/publicRelations/pressReleaseAddEn" element={<PressReleaseAddEnPage />} />
        <Route path="/admin/publicRelations/pressReleaseModEn/:id" element={<PressReleaseModEnPage />} />
        <Route path="/admin/publicRelations/pressReleaseInfoEn/:id" element={<PressReleaseInfoEnPage />} />

        <Route path="/admin/publicRelations/media" element={<MediaPage />} />
        <Route path="/admin/publicRelations/mediaAdd" element={<MediaAddPage />} />
        <Route path="/admin/publicRelations/mediaMod/:id" element={<MediaModPage />} />
        <Route path="/admin/publicRelations/mediaInfo/:id" element={<MediaInfoPage />} />
        <Route path="/admin/publicRelations/mediaEn" element={<MediaEnPage />} />
        <Route path="/admin/publicRelations/mediaAddEn" element={<MediaAddEnPage />} />
        <Route path="/admin/publicRelations/mediaModEn/:id" element={<MediaModEnPage />} />
        <Route path="/admin/publicRelations/mediaInfoEn/:id" element={<MediaInfoEnPage />} />

        <Route path="/admin/employmentInfo/jobVacancy" element={<JobVacancyPage />} />
        <Route path="/admin/employmentInfo/jobVacancyAdd" element={<JobVacancyAddPage />} />
        <Route path="/admin/employmentInfo/jobVacancyMod/:id" element={<JobVacancyModPage />} />
        <Route path="/admin/employmentInfo/jobVacancyInfo/:id" element={<JobVacancyInfoPage />} />
        <Route path="/admin/employmentInfo/jobVacancyEn" element={<JobVacancyEnPage />} />
        <Route path="/admin/employmentInfo/jobVacancyAddEn" element={<JobVacancyAddEnPage />} />
        <Route path="/admin/employmentInfo/jobVacancyModEn/:id" element={<JobVacancyModEnPage />} />
        <Route path="/admin/employmentInfo/jobVacancyInfoEn/:id" element={<JobVacancyInfoEnPage />} />

        <Route path="/admin/customerService/contactUs" element={<ContactUsPage />} />
        <Route path="/admin/customerService/contactUsInfo/:id" element={<ContactUsInfoPage />} />
        <Route path="/admin/customerService/contactUsEn" element={<ContactUsEnPage />} />
        <Route path="/admin/customerService/contactUsInfoEn/:id" element={<ContactUsInfoEnPage />} />

        <Route path="/admin/role/mgmt" element={<MgmtPage />} />
        <Route path="/admin/role/mgmtAdd" element={<MgmtAddPage />} />
        <Route path="/admin/role/mgmtMod/:id" element={<MgmtModPage />} />

        <Route path="/" element={<MainPage />} />
        <Route path="/popup/:id" element={<ClientPopupPage />} />
        <Route path="/en" element={<MainEnPage />} />
        <Route path="/en/popup/:id" element={<ClientPopupEnPage />} />

        <Route path="/company/lselink" element={<LselinkPage />} />
        <Route path="/company/vision" element={<VisionPage />} />
        <Route path="/company/history" element={<HistoryPage />} />
        <Route path="/company/identity" element={<IdentityPage />} />
        <Route path="/company/businessplace" element={<BusinessplacePage />} />
        <Route path="/en/company/lselink" element={<LselinkEnPage />} />
        <Route path="/en/company/vision" element={<VisionEnPage />} />
        <Route path="/en/company/history" element={<HistoryEnPage />} />
        <Route path="/en/company/identity" element={<IdentityEnPage />} />
        <Route path="/en/company/businessplace" element={<BusinessplaceEnPage />} />

        <Route path="/business/e-link/evcharge" element={<EvchargePage />} />
        <Route path="/business/e-link/control" element={<ControlPage />} />
        <Route path="/business/e-link/renewable" element={<ElinkRenewablePage />} />
        <Route path="/business/ev/transportation" element={<TransportationPage />} />
        <Route path="/business/ev/logitics" element={<LogiticsPage />} />
        <Route path="/business/ev/coporate" element={<CoporatePage />} />
        <Route path="/business/renewable/renewable" element={<RenewablePage />} />
        <Route path="/en/business/e-link/evcharge" element={<EvchargeEnPage />} />
        <Route path="/en/business/e-link/control" element={<ControlEnPage />} />
        <Route path="/en/business/e-link/renewable" element={<ElinkRenewableEnPage />} />
        <Route path="/en/business/ev/transportation" element={<TransportationEnPage />} />
        <Route path="/en/business/ev/logitics" element={<LogiticsEnPage />} />
        <Route path="/en/business/ev/coporate" element={<CoporateEnPage />} />
        <Route path="/en/business/renewable/renewable" element={<RenewableEnPage />} />

        <Route path="/investment/management" element={<ManagementPage />} />
        <Route path="/investment/financial" element={<ClientFinancialPage />} />
        <Route path="/investment/financial-view/:id" element={<ClientFinancialviewPage />} />
        <Route path="/investment/credit" element={<CreditPage />} />
        <Route path="/investment/announce" element={<InvAnnouncePage />} />
        <Route path="/investment/announce-view/:id" element={<InvAnnounceviewPage />} />
        <Route path="/en/investment/management" element={<ManagementEnPage />} />
        <Route path="/en/investment/financial" element={<ClientFinancialEnPage />} />
        <Route path="/en/investment/financial-view/:id" element={<ClientFinancialviewEnPage />} />
        <Route path="/en/investment/credit" element={<CreditEnPage />} />
        <Route path="/en/investment/announce" element={<InvAnnounceEnPage />} />
        <Route path="/en/investment/announce-view/:id" element={<InvAnnounceviewEnPage />} />

        <Route path="/pr/press-list" element={<PresslistPage />} />
        <Route path="/pr/press-view/:id" element={<PressviewPage />} />
        <Route path="/en/pr/press-list" element={<PresslistEnPage />} />
        <Route path="/en/pr/press-view/:id" element={<PressviewEnPage />} />

        <Route path="/pr/media-list" element={<MedialistPage />} />
        <Route path="/pr/media-view/:id" element={<MediaviewPage />} />
        <Route path="/en/pr/media-list" element={<MedialistEnPage />} />
        <Route path="/en/pr/media-view/:id" element={<MediaviewEnPage />} />

        <Route path="/recruit/people" element={<PeoplePage />} />
        <Route path="/recruit/benefits" element={<BenefitsPage />} />
        <Route path="/recruit/posting" element={<PostingPage />} />
        <Route path="/recruit/posting-view/:id" element={<PostingviewPage />} />
        <Route path="/en/recruit/people" element={<PeopleEnPage />} />
        <Route path="/en/recruit/benefits" element={<BenefitsEnPage />} />
        <Route path="/en/recruit/posting" element={<PostingEnPage />} />
        <Route path="/en/recruit/posting-view/:id" element={<PostingviewEnPage />} />

        <Route path="/contactus/consult" element={<ConsultPage />} />
        <Route path="/contactus/inconvenience" element={<InconveniencePage />} />
        <Route path="/contactus/inquiry" element={<InquiryPage />} />
        <Route path="/en/contactus/consult" element={<ConsultEnPage />} />
        <Route path="/en/contactus/inconvenience" element={<InconvenienceEnPage />} />
        <Route path="/en/contactus/inquiry" element={<InquiryEnPage />} />

        <Route path="/policy/privacy" element={<PrivacyPage />} />
        <Route path="/policy/terms" element={<TermsPage />} />
        <Route path="/policy/location" element={<LocationPage />} />
        <Route path="/en/policy/privacy" element={<PrivacyEnPage />} />
        <Route path="/en/policy/terms" element={<TermsEnPage />} />
        <Route path="/en/policy/location" element={<LocationEnPage />} />

        <Route path="/ev/index" element={<IndexPage />} />
        <Route path="/ev/find" element={<FindPage />} />

        <Route path="/ev/login" element={<LoginEvPage />} />

        <Route path="/ev/join1" element={<Join1Page />} />
        <Route path="/ev/join2" element={<Join2Page />} />
        <Route path="/ev/join1Sns" element={<Join1SnsPage />} />
        <Route path="/ev/join2Sns" element={<Join2SnsPage />} />
        <Route path="/ev/join3" element={<Join3Page />} />

        <Route path="/ev/findId" element={<FindIdPage />} />
        <Route path="/ev/findId2" element={<FindId2Page />} />

        <Route path="/ev/findPw" element={<FindPwPage />} />
        <Route path="/ev/rePw" element={<RepwPage />} />

        <Route path="/ev/notice" element={<NoticePage />} />
        <Route path="/ev/noticeInfo/:id" element={<NoticeInfoPage />} />
        <Route path="/ev/faq" element={<FaqPage />} />
        <Route path="/ev/inquiry" element={<InquiryEvPage />} />
        <Route path="/ev/inquiryInfo" element={<InquiryInfoPage />} />
        <Route path="/ev/inquiryAdd" element={<InquiryAddPage />} />

        <Route path="/ev/mypage1" element={<MyPage1 />} />
        <Route path="/ev/mypage2" element={<MyPage2 />} />
        <Route path="/ev/mypage3" element={<MyPage3 />} />

        <Route path="/ev/control" element={<ControlEvPage />} />

        <Route path="/ev/login/authNaver" element={<NaverRedirect />} />
        <Route path="/ev/login/authKakao" element={<KakaoRedirect />} />
        <Route path="/ev/login/authGoogle" element={<GoogleRedirect />} />
        <Route path="/ev/login/authApple" element={<AppleRedirect />} />
      </Routes>
    </Router>
  );
};

export default App;
