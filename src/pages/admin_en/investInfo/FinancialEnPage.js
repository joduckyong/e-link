import React from 'react';
import Menu from 'components/admin/Menu';
import FinancialListEnForm from 'components/admin_en/investInfo/FinancialListEnForm';

const FinancialEnPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <FinancialListEnForm />
    </div>
  );
};

export default FinancialEnPage;
