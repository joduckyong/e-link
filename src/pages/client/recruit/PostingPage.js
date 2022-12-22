import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import PostingForm from 'components/client/recruit/PostingForm';

const PostingPage = () => {
  return (
    <div className="main">
      <Header />
      <PostingForm />
      <Footer />
    </div>
  );
};

export default PostingPage;
