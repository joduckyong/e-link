import React from 'react';
import Menu from 'components/admin/Menu';
import JobVacancyModEnForm from 'components/admin/employmentInfo/JobVacancyModEnForm';

const JobVacancyModEnPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <JobVacancyModEnForm />
    </div>
  );
};

export default JobVacancyModEnPage;
