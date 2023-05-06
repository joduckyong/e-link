import React from 'react';
import Menu from 'components/admin/Menu';
import JobVacancyInfoEnForm from 'components/admin/employmentInfo/JobVacancyInfoEnForm';

const JobVacancyInfoEnPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <JobVacancyInfoEnForm />
    </div>
  );
};

export default JobVacancyInfoEnPage;
