import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import PrivacyForm from 'components/client/policy/PrivacyForm';

const PrivacyPage = () => {
  return (
    <>
      <Header />
      <PrivacyForm />
      <Footer />
    </>
  );
};

export default PrivacyPage;
