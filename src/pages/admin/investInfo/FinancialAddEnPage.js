import React from 'react';
import Menu from 'components/admin/Menu';
import FinancialAddEnForm from 'components/admin/investInfo/FinancialAddEnForm';

const FinancialAddEnPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <FinancialAddEnForm />
    </div>
  );
};

export default FinancialAddEnPage;