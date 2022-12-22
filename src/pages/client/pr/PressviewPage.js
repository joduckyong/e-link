import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import PressviewForm from 'components/client/pr/PressviewForm';

const PressviewPage = () => {
  return (
    <div className="main">
      <Header />
      <PressviewForm />
      <Footer />
    </div>
  );
};

export default PressviewPage;
