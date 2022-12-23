import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import TransportationForm from 'components/client/business/ev/TransportationForm';

const TransportationPage = () => {
  return (
    <>
      <Header />
      <TransportationForm />
      <Footer />
    </>
  );
};

export default TransportationPage;
