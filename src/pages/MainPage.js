import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import MainForm from 'components/client/MainForm';

const MainPage = () => {
  return (
    <>
    <Header />
      <div className="main">
        <MainForm />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
