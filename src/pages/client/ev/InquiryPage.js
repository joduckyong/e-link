import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import InquiryForm from 'components/client/ev/InquiryForm';

const InquiryPage = () => {
  return (
    <>
      <Header />
      <InquiryForm />
      <Footer />
    </>
  );
};

export default InquiryPage;
