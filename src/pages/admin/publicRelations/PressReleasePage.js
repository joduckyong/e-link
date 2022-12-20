import React from "react";
import Menu from 'components/admin/Menu';
import PressReleaseListForm from 'components/admin/publicRelations/PressReleaseListForm'
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const PressReleasePage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <PressReleaseListForm />
    </div>
  );
};

export default PressReleasePage;
