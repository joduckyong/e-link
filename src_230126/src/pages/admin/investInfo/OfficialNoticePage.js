import React from 'react';
import Menu from 'components/admin/Menu';
import OfficialNoticeListForm from 'components/admin/investInfo/OfficialNoticeListForm';

const OfficialNoticePage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <OfficialNoticeListForm />
    </div>
  );
};

export default OfficialNoticePage;
