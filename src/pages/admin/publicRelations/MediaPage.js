import React from "react";
import Menu from 'components/admin/Menu';
import MediaListForm from 'components/admin/publicRelations/MediaListForm'
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const MediaPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <MediaListForm />
    </div>
  );
};

export default MediaPage;
