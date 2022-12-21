import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* 관리자 */
import LoginPage from './pages/admin/LoginPage';

import PopupPage from './pages/admin/main/PopupPage';
import PopupAddPage from './pages/admin/main/PopupAddPage';

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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/main/popup" element={<PopupPage />} />
        <Route path="/admin/main/popupAdd" element={<PopupAddPage />} />
        <Route
          path="/admin/investInfo/officialNotice"
          element={<OfficialNoticePage />}
        />
        <Route path="/admin/investInfo/announce" element={<AnnouncePage />} />
        <Route
          path="/admin/investInfo/announceAdd"
          element={<AnnounceAddPage />}
        />
        <Route
          path="/admin/investInfo/announceMod"
          element={<AnnounceModPage />}
        />
        <Route
          path="/admin/investInfo/announceInfo"
          element={<AnnounceInfoPage />}
        />
        <Route
          path="/admin/publicRelations/pressRelease"
          element={<PressReleasePage />}
        />
        <Route
          path="/admin/publicRelations/pressReleaseAdd"
          element={<PressReleaseAddPage />}
        />
        <Route
          path="/admin/publicRelations/pressReleaseMod"
          element={<PressReleaseModPage />}
        />
        <Route
          path="/admin/publicRelations/pressReleaseInfo"
          element={<PressReleaseInfoPage />}
        />
        <Route path="/admin/publicRelations/media" element={<MediaPage />} />
        <Route
          path="/admin/publicRelations/mediaAdd"
          element={<MediaAddPage />}
        />
        <Route
          path="/admin/publicRelations/mediaMod"
          element={<MediaModPage />}
        />
        <Route
          path="/admin/publicRelations/mediaInfo"
          element={<MediaInfoPage />}
        />
        <Route
          path="/admin/employmentInfo/jobVacancy"
          element={<JobVacancyPage />}
        />
        <Route
          path="/admin/employmentInfo/jobVacancyAdd"
          element={<JobVacancyAddPage />}
        />
        <Route
          path="/admin/employmentInfo/jobVacancyMod"
          element={<JobVacancyModPage />}
        />
        <Route
          path="/admin/employmentInfo/jobVacancyInfo"
          element={<JobVacancyInfoPage />}
        />
        <Route
          path="/admin/customerService/contactUs"
          element={<ContactUsPage />}
        />
        <Route
          path="/admin/customerService/contactUsInfo"
          element={<ContactUsInfoPage />}
        />

        <Route
          path="/main"
          element={<MainPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
