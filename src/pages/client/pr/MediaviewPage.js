import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import MediaviewForm from 'components/client/pr/MediaviewForm';

const MediaviewPage = () => {
  return (
    <div className="main">
      <Header />
      <MediaviewForm />
      <Footer />
    </div>
  );
};

export default MediaviewPage;
