import React from 'react';
import Menu from 'components/admin/Menu';
import FinancialModEnForm from 'components/admin/investInfo/FinancialModEnForm';

const FinancialModEnPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <FinancialModEnForm />
    </div>
  );
};

export default FinancialModEnPage;
