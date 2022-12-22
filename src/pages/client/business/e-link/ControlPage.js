import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import ControlForm from 'components/client/business/e-link/ControlForm';

const ControlPage = () => {
  return (
    <div className="main">
      <Header />
      <ControlForm />
      <Footer />
    </div>
  );
};

export default ControlPage;
