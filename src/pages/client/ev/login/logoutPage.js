import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import LogoutForm from 'components/client/ev/login/LogoutForm';

const logoutPage = () => {
  return (
    <>
      <Header />
      <LogoutForm />
      <Footer />
    </>
  );
};

export default logoutPage;
