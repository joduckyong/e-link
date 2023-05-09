import React from 'react';
import Header from 'components/client_en/Header';
import Footer from 'components/client_en/Footer';
import FinancialForm from 'components/client_en/investment/FinancialForm';

const FinancialPage = () => {
  return (
    <>
      <Header />
      <FinancialForm />
      <Footer />
    </>
  );
};

export default FinancialPage;
