import React from 'react';
import Header from 'components/client_en/Header';
import Footer from 'components/client_en/Footer';
import FinancialviewForm from 'components/client_en/investment/FinancialviewForm';

const FinancialviewPage = () => {
  return (
    <>
      <Header />
      <FinancialviewForm />
      <Footer />
    </>
  );
};

export default FinancialviewPage;
