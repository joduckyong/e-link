import React from 'react';
import Menu from 'components/admin/Menu';
import PopUpListForm from 'components/admin/main/PopUpListForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const PopupPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <PopUpListForm />
    </div>
  );
};

export default PopupPage;
