import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import LselinkForm from 'components/client/company/LselinkForm';

const LselinkPage = () => {
  return (
    <div className="main">
      <Header />
      <LselinkForm />
      <Footer />
    </div>
  );
};

export default LselinkPage;
