import React from 'react';
import Menu from 'components/admin/Menu';
import FinancialAddForm from 'components/admin/investInfo/FinancialAddForm';

const FinancialAddPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <FinancialAddForm />
    </div>
  );
};

export default FinancialAddPage;
