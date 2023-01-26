import React from 'react';
import Menu from 'components/admin/Menu';
import FinancialInfoForm from 'components/admin/investInfo/FinancialInfoForm';

const FinancialInfoPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <FinancialInfoForm />
    </div>
  );
};

export default FinancialInfoPage;
