import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import PresslistForm from 'components/client/pr/PresslistForm';

const PresslistPage = () => {
  return (
    <div className="main">
      <Header />
      <PresslistForm />
      <Footer />
    </div>
  );
};

export default PresslistPage;
