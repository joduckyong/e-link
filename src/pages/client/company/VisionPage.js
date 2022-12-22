import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import VisionForm from 'components/client/company/VisionForm';

const VisionPage = () => {
  return (
    <div className="main">
      <Header />
      <VisionForm />
      <Footer />
    </div>
  );
};

export default VisionPage;
