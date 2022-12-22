import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import ManagementForm from 'components/client/investment/ManagementForm';

const ManagementPage = () => {
  return (
    <div className="main">
      <Header />
      <ManagementForm />
      <Footer />
    </div>
  );
};

export default ManagementPage;
