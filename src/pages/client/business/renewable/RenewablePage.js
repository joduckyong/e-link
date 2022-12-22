import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import RenewableForm from 'components/client/business/renewable/RenewableForm';

const RenewablePage = () => {
  return (
    <div className="main">
      <Header />
      <RenewableForm />
      <Footer />
    </div>
  );
};

export default RenewablePage;
