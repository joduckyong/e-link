import React from 'react';
import Menu from 'components/admin/Menu';
import JobVacancyAddEnForm from 'components/admin_en/employmentInfo/JobVacancyAddEnForm';

const JobVacancyAddEnPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <JobVacancyAddEnForm />
    </div>
  );
};

export default JobVacancyAddEnPage;
