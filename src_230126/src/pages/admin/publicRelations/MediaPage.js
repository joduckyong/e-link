import React from 'react';
import Menu from 'components/admin/Menu';
import MediaListForm from 'components/admin/publicRelations/MediaListForm';

const MediaPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <MediaListForm />
    </div>
  );
};

export default MediaPage;
