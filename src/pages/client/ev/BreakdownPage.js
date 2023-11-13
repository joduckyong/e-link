import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import BreakdownForm from 'components/client/ev/BreakdownForm';

const BreakdownPage = () => {
  return (
    <>
      <Header />
      <BreakdownForm />
      <Footer />
    </>
  );
};

export default BreakdownPage;
