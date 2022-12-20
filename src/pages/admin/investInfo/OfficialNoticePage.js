import React from 'react';
import Menu from 'components/admin/Menu';
import OfficialNoticeListForm from 'components/admin/investInfo/OfficialNoticeListForm';

import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const OfficialNoticePage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <OfficialNoticeListForm />
    </div>
  );
};

export default OfficialNoticePage;
