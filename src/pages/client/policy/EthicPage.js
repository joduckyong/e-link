import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import EthicForm from 'components/client/policy/EthicForm';

const EthicPage = () => {
  return (
    <>
      <Header />
      <EthicForm />
      <Footer />
    </>
  );
};

export default EthicPage;
