import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import ManagementForm from 'components/client/investment/ManagementForm';

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
