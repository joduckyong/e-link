import React from 'react';
import Menu from 'components/admin/Menu';
import MediaModForm from 'components/admin/publicRelations/MediaModForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const MediaModPage = () => {
    return (
      <div className="adminsub">
        <Menu />
        <MediaModForm />
      </div>
    );
  };
  
  export default MediaModPage;