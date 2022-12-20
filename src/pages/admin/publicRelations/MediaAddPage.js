import React from 'react';
import Menu from 'components/admin/Menu';
import MediaAddForm from 'components/admin/publicRelations/MediaAddForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const MediaAddPage = () => {
    return (
      <div className="adminsub">
        <Menu />
        <MediaAddForm />
      </div>
    );
  };
  
  export default MediaAddPage;