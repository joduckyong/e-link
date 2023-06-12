import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import BreakdownInfoForm from 'components/client/ev/BreakdownInfoForm';

const BreakdownInfoPage = () => {
  return (
    <>
      <Header />
      <BreakdownInfoForm />
      <Footer />
    </>
  );
};

export default BreakdownInfoPage;
