import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import BreakdownAddForm from 'components/client/ev/BreakdownAddForm';

const BreakdownAddPage = () => {
  return (
    <>
      <Header />
      <BreakdownAddForm />
      <Footer />
    </>
  );
};

export default BreakdownAddPage;
