import React from "react";
import Menu from 'components/admin/Menu';
import JobVacancyInfoForm from 'components/admin/employmentInfo/JobVacancyInfoForm'
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const JobVacancyInfoPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <JobVacancyInfoForm />
    </div>
  );
};

export default JobVacancyInfoPage;
