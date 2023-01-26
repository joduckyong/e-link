import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import PresslistForm from 'components/client/pr/PresslistForm';

const PresslistPage = () => {
  return (
    <>
      <Header />
      <PresslistForm />
      <Footer />
    </>
  );
};

export default PresslistPage;
