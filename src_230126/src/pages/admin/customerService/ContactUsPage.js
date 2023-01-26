import React from 'react';
import Menu from 'components/admin/Menu';
import ContactUsListForm from 'components/admin/customerService/ContactUsListForm';

const ContactUsPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <ContactUsListForm />
    </div>
  );
};

export default ContactUsPage;
