import React from 'react';
import Menu from 'components/admin/Menu';
import AnnounceAddForm from 'components/admin/investInfo/AnnounceAddForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const AnnounceAddPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <AnnounceAddForm />
    </div>
  );
};

export default AnnounceAddPage;
