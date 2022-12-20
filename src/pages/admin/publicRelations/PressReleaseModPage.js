import React from 'react';
import Menu from 'components/admin/Menu';
import PressReleaseModForm from 'components/admin/publicRelations/PressReleaseModForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const PressReleaseModPage = () => {
    return (
      <div className="adminsub">
        <Menu />
        <PressReleaseModForm />
      </div>
    );
  };
  
  export default PressReleaseModPage;