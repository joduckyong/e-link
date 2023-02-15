import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import TermsForm from 'components/client/policy/TermsForm';

const TermsPage = () => {
  return (
    <>
      <Header />
      <TermsForm />
      <Footer />
    </>
  );
};

export default TermsPage;
