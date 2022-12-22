import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import FinancialForm from 'components/client/investment/FinancialForm';

const FinancialPage = () => {
  return (
    <div className="main">
      <Header />
      <FinancialForm />
      <Footer />
    </div>
  );
};

export default FinancialPage;
