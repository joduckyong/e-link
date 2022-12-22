import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import ContactusForm from 'components/client/contactus/ContactusForm';

const ContactusPage = () => {
  return (
    <div className="main">
      <Header />
      <ContactusForm />
      <Footer />
    </div>
  );
};

export default ContactusPage;
