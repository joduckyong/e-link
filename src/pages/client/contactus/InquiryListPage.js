import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import InquiryListForm from 'components/client/contactus/InquiryListForm';

const InquiryListPage = () => {
  return (
    <>
      <Header />
      <InquiryListForm />
      <Footer />
    </>
  );
};

export default InquiryListPage;
