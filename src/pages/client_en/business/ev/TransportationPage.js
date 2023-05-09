import React from 'react';
import Header from 'components/client_en/Header';
import Footer from 'components/client_en/Footer';
import TransportationForm from 'components/client_en/business/ev/TransportationForm';

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
