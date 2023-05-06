import React from 'react';
import Menu from 'components/admin/Menu';
import JobVacancyListEnForm from 'components/admin/employmentInfo/JobVacancyListEnForm';

const JobVacancyEnPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <JobVacancyListEnForm />
    </div>
  );
};

export default JobVacancyEnPage;
