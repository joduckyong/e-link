import React from "react";
import Menu from 'components/admin/Menu';
import JobVacancyAddForm from 'components/admin/employmentInfo/JobVacancyAddForm'
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const JobVacancyAddPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <JobVacancyAddForm />
    </div>
  );
};

export default JobVacancyAddPage;
