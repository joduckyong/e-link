import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* 관리자 */
import LoginPage from './pages/admin/LoginPage';

import PopupPage from './pages/admin/main/PopupPage';
import PopupAddPage from './pages/admin/main/PopupAddPage';
import PopupModPage from './pages/admin/main/PopupModPage';
import PopupInfoPage from './pages/admin/main/PopupInfoPage';

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
import FinancialPage from './pages/client/investment/FinancialPage';
import CreditPage from './pages/client/investment/CreditPage';
import InvAnnouncePage from './pages/client/investment/AnnouncePage';

/* 흥보센터 */
import PresslistPage from './pages/client/pr/PresslistPage';
import PressviewPage from './pages/client/pr/PressviewPage';
import MedialistPage from './pages/client/pr/MedialistPage';
import MediaviewPage from './pages/client/pr/MediaviewPage';

/* 채용정보 */
import PeoplePage from './pages/client/recruit/PeoplePage';
import BenefitsPage from './pages/client/recruit/BenefitsPage';
import PostingPage from './pages/client/recruit/PostingPage';

/* Contact US */
import ContactusPage from './pages/client/contactus/ContactusPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/main/popup" element={<PopupPage />} />
        <Route path="/admin/main/popupAdd" element={<PopupAddPage />} />
        <Route path="/admin/main/popupMod/:id" element={<PopupModPage />} />
        <Route path="/admin/main/popupInfo/:id" element={<PopupInfoPage />} />
        <Route path="/admin/investInfo/officialNotice" element={<OfficialNoticePage />} />
        <Route path="/admin/investInfo/announce" element={<AnnouncePage />} />
        <Route path="/admin/investInfo/announceAdd" element={<AnnounceAddPage />} />
        <Route path="/admin/investInfo/announceMod/:id" element={<AnnounceModPage />} />
        <Route path="/admin/investInfo/announceInfo/:id" element={<AnnounceInfoPage />} />
        <Route path="/admin/publicRelations/pressRelease" element={<PressReleasePage />} />
        <Route path="/admin/publicRelations/pressReleaseAdd" element={<PressReleaseAddPage />} />
        <Route path="/admin/publicRelations/pressReleaseMod" element={<PressReleaseModPage />} />
        <Route path="/admin/publicRelations/pressReleaseInfo" element={<PressReleaseInfoPage />} />
        <Route path="/admin/publicRelations/media" element={<MediaPage />} />
        <Route path="/admin/publicRelations/mediaAdd" element={<MediaAddPage />} />
        <Route path="/admin/publicRelations/mediaMod" element={<MediaModPage />} />
        <Route path="/admin/publicRelations/mediaInfo" element={<MediaInfoPage />} />
        <Route path="/admin/employmentInfo/jobVacancy" element={<JobVacancyPage />} />
        <Route path="/admin/employmentInfo/jobVacancyAdd" element={<JobVacancyAddPage />} />
        <Route path="/admin/employmentInfo/jobVacancyMod" element={<JobVacancyModPage />} />
        <Route path="/admin/employmentInfo/jobVacancyInfo" element={<JobVacancyInfoPage />} />
        <Route path="/admin/customerService/contactUs" element={<ContactUsPage />} />
        <Route path="/admin/customerService/contactUsInfo" element={<ContactUsInfoPage />} />

        <Route path="/" element={<MainPage />} />

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
        <Route path="/investment/financial" element={<FinancialPage />} />
        <Route path="/investment/credit" element={<CreditPage />} />
        <Route path="/investment/announce" element={<InvAnnouncePage />} />

        <Route path="/pr/press-list" element={<PresslistPage />} />
        <Route path="/pr/press-view" element={<PressviewPage />} />
        <Route path="/pr/media-list" element={<MedialistPage />} />
        <Route path="/pr/media-view" element={<MediaviewPage />} />

        <Route path="/recruit/people" element={<PeoplePage />} />
        <Route path="/recruit/benefits" element={<BenefitsPage />} />
        <Route path="/recruit/posting" element={<PostingPage />} />

        <Route path="/contactus" element={<ContactusPage />} />
      </Routes>
    </Router>
  );
};

export default App;
