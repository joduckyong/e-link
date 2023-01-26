import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import HistoryForm from 'components/client/company/HistoryForm';

const HistoryPage = () => {
  return (
    <>
      <Header />
      <HistoryForm />
      <Footer />
    </>
  );
};

export default HistoryPage;
