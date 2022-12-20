import React from 'react';
import Menu from 'components/admin/Menu';
import AnnounceModForm from 'components/admin/investInfo/AnnounceModForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const AnnounceModPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <AnnounceModForm />
    </div>
  );
};

export default AnnounceModPage;
