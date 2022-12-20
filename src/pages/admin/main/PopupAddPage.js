import React from 'react';
import Menu from 'components/admin/Menu';
import PopUpAddForm from 'components/admin/main/PopUpAddForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const PopupAddPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <PopUpAddForm />
    </div>
  );
};

export default PopupAddPage;
