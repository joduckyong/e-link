import React from 'react';
import Menu from 'components/admin/Menu';
import JobVacancyModForm from 'components/admin/employmentInfo/JobVacancyModForm';

const JobVacancyModPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <JobVacancyModForm />
    </div>
  );
};

export default JobVacancyModPage;
