import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import MedialistForm from 'components/client/pr/MedialistForm';

const MedialistPage = () => {
  return (
    <div className="main">
      <Header />
      <MedialistForm />
      <Footer />
    </div>
  );
};

export default MedialistPage;
