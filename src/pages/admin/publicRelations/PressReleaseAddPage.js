import React from 'react';
import Menu from 'components/admin/Menu';
import PressReleaseAddForm from 'components/admin/publicRelations/PressReleaseAddForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const PressReleaseAddPage = () => {
    return (
      <div className="adminsub">
        <Menu />
        <PressReleaseAddForm />
      </div>
    );
  };
  
  export default PressReleaseAddPage;