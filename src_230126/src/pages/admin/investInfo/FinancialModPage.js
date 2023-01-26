import React from 'react';
import Menu from 'components/admin/Menu';
import FinancialModForm from 'components/admin/investInfo/FinancialModForm';

const FinancialModPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <FinancialModForm />
    </div>
  );
};

export default FinancialModPage;
