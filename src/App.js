import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';

/* 관리자 */
import LoginPage from './pages/admin/LoginPage';
import Logout from './components/admin/Logout';

import PopupPage from './pages/admin/main/PopupPage';
import PopupAddPage from './pages/admin/main/PopupAddPage';
import PopupModPage from './pages/admin/main/PopupModPage';
import PopupInfoPage from './pages/admin/main/PopupInfoPage';

import OutlinePage from './pages/admin/company/OutlinePage';

import FinancialPage from './pages/admin/investInfo/FinancialPage';
import FinancialAddPage from './pages/admin/investInfo/FinancialAddPage';
import FinancialModPage from './pages/admin/investInfo/FinancialModPage';
import FinancialInfoPage from './pages/admin/investInfo/FinancialInfoPage';

import OfficialNoticePage from './pages/admin/investInfo/OfficialNoticePage';

import AnnouncePage from './pages/admin/investInfo/AnnouncePage';
import AnnounceAddPage from './pages/admin/investInfo/AnnounceAddPage';
import AnnounceModPage from './pages/admin/investInfo/AnnounceModPage';
import AnnounceInfoPage from './pages/admin/investInfo/AnnounceInfoPage';

import PressReleasePage from './pages/admin/publicRelations/PressReleasePage';
import PressReleaseAddPage from './pages/admin/publicRelations/PressReleaseAddPage';
import PressReleaseModPage from './pages/admin/publicRelations/PressReleaseModPage';
import PressReleaseInfoPage from './pages/admin/publicRelations/PressReleaseInfoPage';

import MediaPage from './pages/admin/publicRelations/MediaPage';
import MediaAddPage from './pages/admin/publicRelations/MediaAddPage';
import MediaModPage from './pages/admin/publicRelations/MediaModPage';
import MediaInfoPage from './pages/admin/publicRelations/MediaInfoPage';

import JobVacancyPage from './pages/admin/employmentInfo/JobVacancyPage';
import JobVacancyAddPage from './pages/admin/employmentInfo/JobVacancyAddPage';
import JobVacancyModPage from './pages/admin/employmentInfo/JobVacancyModPage';
import JobVacancyInfoPage from './pages/admin/employmentInfo/JobVacancyInfoPage';

import ContactUsPage from './pages/admin/customerService/ContactUsPage';
import ContactUsInfoPage from './pages/admin/customerService/ContactUsInfoPage';

import MgmtPage from './pages/admin/role/MgmtPage';
import MgmtAddPage from './pages/admin/role/MgmtAddPage';
import MgmtModPage from './pages/admin/role/MgmtModPage';

/* 클라이언트 */

import MainPage from './pages/MainPage';
import ClientPopupPage from './pages/PopupPage';

/* 회사소개 */
import LselinkPage from './pages/client/company/LselinkPage';
import VisionPage from './pages/client/company/VisionPage';
import HistoryPage from './pages/client/company/HistoryPage';
import IdentityPage from './pages/client/company/IdentityPage';
import BusinessplacePage from './pages/client/company/BusinessplacePage';

/* 사업영역 */
import EvchargePage from './pages/client/business/e-link/EvchargePage';
import ControlPage from './pages/client/business/e-link/ControlPage';
import ElinkRenewablePage from './pages/client/business/e-link/RenewablePage';
import TransportationPage from './pages/client/business/ev/TransportationPage';
import LogiticsPage from './pages/client/business/ev/LogiticsPage';
import CoporatePage from './pages/client/business/ev/CoporatePage';
import RenewablePage from './pages/client/business/renewable/RenewablePage';

/* 투자정보 */
import ManagementPage from './pages/client/investment/ManagementPage';
import ClientFinancialPage from './pages/client/investment/FinancialPage';
import ClientFinancialviewPage from './pages/client/investment/FinancialviewPage';
import CreditPage from './pages/client/investment/CreditPage';
import InvAnnouncePage from './pages/client/investment/AnnouncePage';
import InvAnnounceviewPage from './pages/client/investment/AnnounceviewPage';

/* 흥보센터 */
import PresslistPage from './pages/client/pr/PresslistPage';
import PressviewPage from './pages/client/pr/PressviewPage';
import MedialistPage from './pages/client/pr/MedialistPage';
import MediaviewPage from './pages/client/pr/MediaviewPage';

/* 채용정보 */
import PeoplePage from './pages/client/recruit/PeoplePage';
import BenefitsPage from './pages/client/recruit/BenefitsPage';
import PostingPage from './pages/client/recruit/PostingPage';
import PostingviewPage from './pages/client/recruit/PostingviewPage';

/* Contact US */
import ConsultPage from './pages/client/contactus/ConsultPage';
import InconveniencePage from './pages/client/contactus/InconveniencePage';
import InquiryPage from './pages/client/contactus/InquiryPage';

/* 약간 */
import PrivacyPage from './pages/client/policy/PrivacyPage';
import TermsPage from './pages/client/policy/TermsPage';
import LocationPage from './pages/client/policy/LocationPage';

/* EV 충전소 */
//브랜드 소개
import IndexPage from './pages/client/ev/IndexPage';

//충전소 찾기
import FindPage from './pages/client/ev/FindPage';

//로그인
import LoginEvPage from './pages/client/ev/loginPage';

//회원가입 약관동의
import Join1Page from './pages/client/ev/Join1Page';
//회원가입 정보입력
import Join2Page from './pages/client/ev/Join2Page';
//회원가입 가입완료
import Join3Page from './pages/client/ev/Join3Page';

//아이디 찾기
import FindIdPage from './pages/client/ev/FindIdPage';
//아이디 결과
import FindId2Page from './pages/client/ev/FindId2Page';

//비밀번호 찾기
import FindPwPage from './pages/client/ev/FindPwPage';
//비밀번호 재설정
import RepwPage from './pages/client/ev/RepwPage';

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

//관제센터
import ControlEvPage from './pages/client/ev/ControlPage';

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
        <Route path="/admin/company/outline" element={<OutlinePage />} />
        <Route path="/admin/investInfo/officialNotice" element={<OfficialNoticePage />} />
        <Route path="/admin/investInfo/financial" element={<FinancialPage />} />
        <Route path="/admin/investInfo/financialAdd" element={<FinancialAddPage />} />
        <Route path="/admin/investInfo/financialMod/:id" element={<FinancialModPage />} />
        <Route path="/admin/investInfo/financialInfo/:id" element={<FinancialInfoPage />} />
        <Route path="/admin/investInfo/announce" element={<AnnouncePage />} />
        <Route path="/admin/investInfo/announceAdd" element={<AnnounceAddPage />} />
        <Route path="/admin/investInfo/announceMod/:id" element={<AnnounceModPage />} />
        <Route path="/admin/investInfo/announceInfo/:id" element={<AnnounceInfoPage />} />
        <Route path="/admin/publicRelations/pressRelease" element={<PressReleasePage />} />
        <Route path="/admin/publicRelations/pressReleaseAdd" element={<PressReleaseAddPage />} />
        <Route path="/admin/publicRelations/pressReleaseMod/:id" element={<PressReleaseModPage />} />
        <Route path="/admin/publicRelations/pressReleaseInfo/:id" element={<PressReleaseInfoPage />} />
        <Route path="/admin/publicRelations/media" element={<MediaPage />} />
        <Route path="/admin/publicRelations/mediaAdd" element={<MediaAddPage />} />
        <Route path="/admin/publicRelations/mediaMod/:id" element={<MediaModPage />} />
        <Route path="/admin/publicRelations/mediaInfo/:id" element={<MediaInfoPage />} />
        <Route path="/admin/employmentInfo/jobVacancy" element={<JobVacancyPage />} />
        <Route path="/admin/employmentInfo/jobVacancyAdd" element={<JobVacancyAddPage />} />
        <Route path="/admin/employmentInfo/jobVacancyMod/:id" element={<JobVacancyModPage />} />
        <Route path="/admin/employmentInfo/jobVacancyInfo/:id" element={<JobVacancyInfoPage />} />
        <Route path="/admin/customerService/contactUs" element={<ContactUsPage />} />
        <Route path="/admin/customerService/contactUsInfo/:id" element={<ContactUsInfoPage />} />
        <Route path="/admin/role/mgmt" element={<MgmtPage />} />
        <Route path="/admin/role/mgmtAdd" element={<MgmtAddPage />} />
        <Route path="/admin/role/mgmtMod/:id" element={<MgmtModPage />} />

        <Route path="/" element={<MainPage />} />
        <Route path="/popup/:id" element={<ClientPopupPage />} />

        <Route path="/company/lselink" element={<LselinkPage />} />
        <Route path="/company/vision" element={<VisionPage />} />
        <Route path="/company/history" element={<HistoryPage />} />
        <Route path="/company/identity" element={<IdentityPage />} />
        <Route path="/company/businessplace" element={<BusinessplacePage />} />

        <Route path="/business/e-link/evcharge" element={<EvchargePage />} />
        <Route path="/business/e-link/control" element={<ControlPage />} />
        <Route path="/business/e-link/renewable" element={<ElinkRenewablePage />} />
        <Route path="/business/ev/transportation" element={<TransportationPage />} />
        <Route path="/business/ev/logitics" element={<LogiticsPage />} />
        <Route path="/business/ev/coporate" element={<CoporatePage />} />
        <Route path="/business/renewable/renewable" element={<RenewablePage />} />

        <Route path="/investment/management" element={<ManagementPage />} />
        <Route path="/investment/financial" element={<ClientFinancialPage />} />
        <Route path="/investment/financial-view/:id" element={<ClientFinancialviewPage />} />
        <Route path="/investment/credit" element={<CreditPage />} />
        <Route path="/investment/announce" element={<InvAnnouncePage />} />
        <Route path="/investment/announce-view/:id" element={<InvAnnounceviewPage />} />

        <Route path="/pr/press-list" element={<PresslistPage />} />
        <Route path="/pr/press-view/:id" element={<PressviewPage />} />
        <Route path="/pr/media-list" element={<MedialistPage />} />
        <Route path="/pr/media-view/:id" element={<MediaviewPage />} />

        <Route path="/recruit/people" element={<PeoplePage />} />
        <Route path="/recruit/benefits" element={<BenefitsPage />} />
        <Route path="/recruit/posting" element={<PostingPage />} />
        <Route path="/recruit/posting-view/:id" element={<PostingviewPage />} />

        <Route path="/contactus/consult" element={<ConsultPage />} />
        <Route path="/contactus/inconvenience" element={<InconveniencePage />} />
        <Route path="/contactus/inquiry" element={<InquiryPage />} />

        <Route path="/policy/privacy" element={<PrivacyPage />} />
        <Route path="/policy/terms" element={<TermsPage />} />
        <Route path="/policy/location" element={<LocationPage />} />

        <Route path="/ev/index" element={<IndexPage />} />

        <Route path="/ev/find" element={<FindPage />} />

        <Route path="/ev/login" element={<LoginEvPage />} />

        <Route path="/ev/join1" element={<Join1Page />} />
        <Route path="/ev/join2" element={<Join2Page />} />
        <Route path="/ev/join3" element={<Join3Page />} />

        <Route path="/ev/findId" element={<FindIdPage />} />
        <Route path="/ev/findId2" element={<FindId2Page />} />

        <Route path="/ev/findPw" element={<FindPwPage />} />
        <Route path="/ev/rePw" element={<RepwPage />} />

        <Route path="/ev/notice" element={<NoticePage />} />
        <Route path="/ev/noticeInfo" element={<NoticeInfoPage />} />
        <Route path="/ev/faq" element={<FaqPage />} />
        <Route path="/ev/inquiry" element={<InquiryEvPage />} />
        <Route path="/ev/inquiryInfo" element={<InquiryInfoPage />} />
        <Route path="/ev/inquiryAdd" element={<InquiryAddPage />} />

        <Route path="/ev/mypage1" element={<MyPage1 />} />
        <Route path="/ev/mypage2" element={<MyPage2 />} />

        <Route path="/ev/control" element={<ControlEvPage />} />
      </Routes>
    </Router>
  );
};

export default App;
