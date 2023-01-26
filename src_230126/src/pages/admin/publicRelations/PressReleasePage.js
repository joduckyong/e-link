import React from 'react';
import Menu from 'components/admin/Menu';
import PressReleaseListForm from 'components/admin/publicRelations/PressReleaseListForm';

const PressReleasePage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <PressReleaseListForm />
    </div>
  );
};

export default PressReleasePage;
