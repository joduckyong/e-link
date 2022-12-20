import React from "react";
import Menu from 'components/admin/Menu';
import ContactUsInfoForm from 'components/admin/customerService/ContactUsInfoForm'
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const ContactUsInfoPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <ContactUsInfoForm />
    </div>
  );
};

export default ContactUsInfoPage;
