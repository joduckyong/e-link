import React from 'react';
import Menu from 'components/admin/Menu';
import FinancialListForm from 'components/admin/investInfo/FinancialListForm';

const FinancialPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <FinancialListForm />
    </div>
  );
};

export default FinancialPage;
