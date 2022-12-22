import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import PeopleForm from 'components/client/recruit/PeopleForm';

const PeoplePage = () => {
  return (
    <div className="main">
      <Header />
      <PeopleForm />
      <Footer />
    </div>
  );
};

export default PeoplePage;
