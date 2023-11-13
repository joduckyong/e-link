import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import JoinErrorForm from 'components/client/ev/login/JoinErrorForm';

const JoinErrorPage = () => {
  return (
    <>
      <Header />
      <JoinErrorForm />
      <Footer />
    </>
  );
};

export default JoinErrorPage;
