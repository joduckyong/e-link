import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import AnnounceForm from 'components/client/investment/AnnounceForm';

const AnnouncePage = () => {
  return (
    <div className="main">
      <Header />
      <AnnounceForm />
      <Footer />
    </div>
  );
};

export default AnnouncePage;
