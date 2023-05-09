import React from 'react';
import Header from 'components/client_en/Header';
import Footer from 'components/client_en/Footer';
import ManagementForm from 'components/client_en/investment/ManagementForm';

const ManagementPage = () => {
  return (
    <>
      <Header />
      <ManagementForm />
      <Footer />
    </>
  );
};

export default ManagementPage;
