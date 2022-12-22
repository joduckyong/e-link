import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import IdentityForm from 'components/client/company/IdentityForm';

const IdentityPage = () => {
  return (
    <div className="main">
      <Header />
      <IdentityForm />
      <Footer />
    </div>
  );
};

export default IdentityPage;
