import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import FinancialviewForm from 'components/client/investment/FinancialviewForm';

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
