import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import LogiticsForm from 'components/client/business/ev/LogiticsForm';

const LogiticsPage = () => {
  return (
    <div className="main">
      <Header />
      <LogiticsForm />
      <Footer />
    </div>
  );
};

export default LogiticsPage;
