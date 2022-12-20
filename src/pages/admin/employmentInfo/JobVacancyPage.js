import React from "react";
import Menu from 'components/admin/Menu';
import JobVacancyListForm from 'components/admin/employmentInfo/JobVacancyListForm'
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const JobVacancyPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <JobVacancyListForm />
    </div>
  );
};

export default JobVacancyPage;
