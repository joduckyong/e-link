import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import FinancialForm from 'components/client/investment/FinancialForm';

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
