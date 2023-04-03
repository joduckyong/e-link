import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import LoginForm from 'components/client/ev/LoginForm';

const loginPage = () => {
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
};

export default loginPage;
