import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import BusinessplaceForm from 'components/client/company/BusinessplaceForm';

const BusinessplacePage = () => {
  return (
    <div className="main">
      <Header />
      <BusinessplaceForm />
      <Footer />
    </div>
  );
};

export default BusinessplacePage;
