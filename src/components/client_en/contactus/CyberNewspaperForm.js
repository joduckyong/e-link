import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientContactUs } from 'store/contactUsReducer';
import AOS from 'aos';
import classnames from 'classnames';

const CyberNewspaperForm = () => {
  const dispatch = useDispatch();

  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    AOS.init();
  });

  const onClickMenuLink = (menu) => {
    if (menu === '1') {
      setActiveMenu1(!activeMenu1);
      setActiveMenu2(false);
    } else if (menu === '2') {
      setActiveMenu1(false);
      setActiveMenu2(!activeMenu2);
    }
  };

  const Popup = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="sub sub06 report">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-delay="200"
          >
            Contact us
          </h2>
          <ul
            className="path"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <li>
              <NavLink to="/">
                <img src="./../img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                Contact us
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/en/company/lselink">Company</NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/e-link/evcharge">Business</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/management">IR Center</NavLink>
                </li>
                <li>
                  <NavLink to="/en/pr/press-list">PR Center</NavLink>
                </li>
                <li>
                  <NavLink to="/en/recruit/people">Recruitment</NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus" className="on">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                Report complaints
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/contactus/consult">
                    Consultation request
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus/inconvenience">
                    Report complaints
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus/inquiry">Contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus/cyberNewspaper" className="on">
                    Cyber Whistleblower System
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <h3
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            Cyber Whistleblower System
          </h3>
          <div className="report_cont report01">
            <h4>Report Submission</h4>
            <div>
              <img src="/img/sub/error.svg" alt="" />
              <p>
                This is the place where representatives and employees of LS
                E-Link can report instances of misconduct, corruption, unfair
                business practices, etc., that have caused disadvantages to
                representatives/employees of collaborating companies as well as
                customers. Your valuable report will serve as the foundation of
                our ethical management, and we promise to thoroughly protect the
                personal information and content of the reporter.
              </p>
            </div>
          </div>
          <div className="report_cont report02">
            <h4>Subjects of Reporting</h4>
            <ul>
              <li>
                Misconduct/corruption of LS E-Link employees (acceptance of
                bribes, gifts, hospitality, etc.)
              </li>
              <li>
                Negligence/unfaithful attitudes of LS E-Link employees in their
                duties
              </li>
              <li>
                Unfair treatment of collaborating companies (selection of
                companies, contract/trading relationships, etc.)
              </li>
              <li>Others (violations of LS E-Link ethical norms)</li>
            </ul>
          </div>
          <div className="report_cont report03">
            <h4>Methods of Reporting</h4>
            <div className="report_box">
              Cyber Whistleblower System
              <p>
                Accessible on all websites operated by LS E-Link
                <br className="mBr" /> where reports can be submitted based on
                specific forms.
              </p>
            </div>
            <div className="report_btn">
              <button
                type="button"
                onClick={() =>
                  Popup(
                    'https://ethics.lsholdings.co.kr/en/view/report.asp?cn=014000',
                  )
                }
                className="btn01"
              >
                Submit Report
              </button>
              <button
                type="button"
                onClick={() =>
                  Popup('https://ethics.lsholdings.co.kr/en/view/process.asp')
                }
                className="btn02"
              >
                Check Report Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberNewspaperForm;
