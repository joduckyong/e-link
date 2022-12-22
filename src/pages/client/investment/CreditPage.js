import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import CreditForm from 'components/client/investment/CreditForm';

const CreditPage = () => {
  return (
    <div className="main">
      <Header />
      <CreditForm />
      <Footer />
    </div>
  );
};

export default CreditPage;
