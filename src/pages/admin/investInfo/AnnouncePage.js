import React from 'react';
import Menu from 'components/admin/Menu';
import AnnounceListForm from 'components/admin/investInfo/AnnounceListForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const AnnouncePage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <AnnounceListForm />
    </div>
  );
};

export default AnnouncePage;
