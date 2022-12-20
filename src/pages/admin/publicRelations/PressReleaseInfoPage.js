import React from 'react';
import Menu from 'components/admin/Menu';
import PressReleaseInfoForm from 'components/admin/publicRelations/PressReleaseInfoForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const PressReleaseInfoPage = () => {
    return (
      <div className="adminsub">
        <Menu />
        <PressReleaseInfoForm />
      </div>
    );
  };
  
  export default PressReleaseInfoPage;