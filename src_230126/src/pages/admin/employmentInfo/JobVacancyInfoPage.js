import React from 'react';
import Menu from 'components/admin/Menu';
import JobVacancyInfoForm from 'components/admin/employmentInfo/JobVacancyInfoForm';

const JobVacancyInfoPage = () => {
  return (
    <div className="adminsub">
      <Menu />
      <JobVacancyInfoForm />
    </div>
  );
};

export default JobVacancyInfoPage;
