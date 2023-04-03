import React from 'react';
import Menu from 'components/admin/Menu';
import MgmtAddForm from 'components/admin/role/MgmtAddForm';

const MgmtAddPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <MgmtAddForm />
    </div>
  );
};

export default MgmtAddPage;
