import React from "react";
import Menu from 'components/admin/Menu';
import ContactUsListForm from 'components/admin/customerService/ContactUsListForm'
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const ContactUsPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <ContactUsListForm />
    </div>
  );
};

export default ContactUsPage;
