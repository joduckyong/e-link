import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import AnnounceForm from 'components/client/investment/AnnounceForm';

const AnnouncePage = () => {
  return (
    <>
      <Header />
      <AnnounceForm />
      <Footer />
    </>
  );
};

export default AnnouncePage;
