import React from "react";
import Menu from 'components/admin/Menu';
import JobVacancyModForm from 'components/admin/employmentInfo/JobVacancyModForm'
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const JobVacancyModPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <JobVacancyModForm />
    </div>
  );
};

export default JobVacancyModPage;
