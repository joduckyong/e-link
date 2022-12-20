import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/admin/LoginPage';

import PopupPage from './pages/admin/main/PopupPage';
import PopupAddPage from './pages/admin/main/PopupAddPage';

import OfficialNoticePage from './pages/admin/investInfo/OfficialNoticePage';

import AnnouncePage from './pages/admin/investInfo/AnnouncePage';
import AnnounceAddPage from './pages/admin/investInfo/AnnounceAddPage';
import AnnounceModPage from './pages/admin/investInfo/AnnounceModPage';
import AnnounceInfoPage from './pages/admin/investInfo/AnnounceInfoPage';

import PressReleasePage from './pages/admin/publicRelations/PressReleasePage';
import MediaPage from './pages/admin/publicRelations/MediaPage';
import JobVacancyPage from './pages/admin/employmentInfo/JobVacancyPage';
import ContactUsPage from './pages/admin/customerService/ContactUsPage';

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
        <Route path="/admin/publicRelations/media" element={<MediaPage />} />
        <Route
          path="/admin/employmentInfo/jobVacancy"
          element={<JobVacancyPage />}
        />
        <Route
          path="/admin/customerService/contactUs"
          element={<ContactUsPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
