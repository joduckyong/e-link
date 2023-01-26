import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import EvchargeForm from 'components/client/business/e-link/EvchargeForm';

const EvchargePage = () => {
  return (
    <>
      <Header />
      <EvchargeForm />
      <Footer />
    </>
  );
};

export default EvchargePage;
