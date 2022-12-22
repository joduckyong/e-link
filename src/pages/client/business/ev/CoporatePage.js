import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import CoporateForm from 'components/client/business/ev/CoporateForm';

const CoporatePage = () => {
  return (
    <div className="main">
      <Header />
      <CoporateForm />
      <Footer />
    </div>
  );
};

export default CoporatePage;
