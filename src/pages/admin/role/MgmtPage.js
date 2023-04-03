import React from 'react';
import Menu from 'components/admin/Menu';
import MgmtListForm from 'components/admin/role/MgmtListForm';

const MgmtPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <MgmtListForm />
    </div>
  );
};

export default MgmtPage;
