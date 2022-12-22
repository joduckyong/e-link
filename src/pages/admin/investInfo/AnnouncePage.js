import React from 'react';
import Menu from 'components/admin/Menu';
import AnnounceListForm from 'components/admin/investInfo/AnnounceListForm';

const AnnouncePage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <AnnounceListForm />
    </div>
  );
};

export default AnnouncePage;
