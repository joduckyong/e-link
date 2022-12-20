import React from 'react';
import Menu from 'components/admin/Menu';
import MediaInfoForm from 'components/admin/publicRelations/MediaInfoForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const MediaInfoPage = () => {
    return (
      <div className="adminsub">
        <Menu />
        <MediaInfoForm />
      </div>
    );
  };
  
  export default MediaInfoPage;