import React from 'react';
import Menu from 'components/admin/Menu';
import AnnounceInfoForm from 'components/admin/investInfo/AnnounceInfoForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const AnnounceInfoPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <AnnounceInfoForm />
    </div>
  );
};

export default AnnounceInfoPage;
