import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import BenefitsForm from 'components/client/recruit/BenefitsForm';

const BenefitsPage = () => {
  return (
    <div className="main">
      <Header />
      <BenefitsForm />
      <Footer />
    </div>
  );
};

export default BenefitsPage;
