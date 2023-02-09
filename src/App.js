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

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/logout" element={<Logout />} />
        <Route path="/admin/main/popup" element={<PopupPage />} />
        <Route path="/admin/main/popupAdd" element={<PopupAddPage />} />
        <Route path="/admin/main/popupMod/:id" element={<PopupModPage />} />
        <Route path="/admin/main/popupInfo/:id" element={<PopupInfoPage />} />
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
      </Routes>
    </Router>
  );
};

export default App;
