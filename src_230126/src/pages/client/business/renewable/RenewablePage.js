import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import RenewableForm from 'components/client/business/renewable/RenewableForm';

const RenewablePage = () => {
  return (
    <>
      <Header />
      <RenewableForm />
      <Footer />
    </>
  );
};

export default RenewablePage;
