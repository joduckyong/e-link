import React from 'react';
import Menu from 'components/admin/Menu';
import JobVacancyListForm from 'components/admin/employmentInfo/JobVacancyListForm';

const JobVacancyPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <JobVacancyListForm />
    </div>
  );
};

export default JobVacancyPage;
