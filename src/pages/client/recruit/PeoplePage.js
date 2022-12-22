import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import MainForm from 'components/client/MainForm';

const PeoplePage = () => {
  return (
    <div className="main">
      <Header />
      <MainForm />
      <Footer />
    </div>
  );
};

export default PeoplePage;
