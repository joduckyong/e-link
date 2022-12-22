import React from 'react';
import Menu from 'components/admin/Menu';
import JobVacancyAddForm from 'components/admin/employmentInfo/JobVacancyAddForm';

const JobVacancyAddPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <JobVacancyAddForm />
    </div>
  );
};

export default JobVacancyAddPage;
