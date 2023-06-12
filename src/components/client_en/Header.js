import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [headerClass, setHeaderClass] = useState('');
  const [pcMenuClass, setPcMenuClass] = useState('');
  const [elinkMenuActive, setElinkMenuActive] = useState(false);
  const [evMenuActive, setEvMenuActive] = useState(false);
  const [moMenuActive, setMoMenuActive] = useState(false);
  const [moMenuClass, setMoMenuClass] = useState('');

  const onClickMoMenu = (menu) => {
    if (moMenuClass === menu) {
      setMoMenuClass('');
    } else {
      setMoMenuClass(menu);
    }
  };
  return (
    <header className={headerClass}>
      <div className="pc-menu">
        <div className="wrap">
          <h1>
            <NavLink to="/en">
              <img src="/img/common/ci.svg" alt="" />
            </NavLink>
          </h1>
          <ul className="gnb" onMouseOver={() => setHeaderClass('on')} onMouseOut={() => setHeaderClass('')}>
            <li>
              <NavLink to="/en/company/lselink">Company</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/en/company/lselink">LS E-Link</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/company/vision">Vision</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/company/history">History</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/company/identity">CI·BI </NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/company/businessplace">Locations</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/en/business/e-link/evcharge">Business</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/en/business/e-link/evcharge">E-Link BUSINESS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/business/ev/transportation">EV Charging Business</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/business/renewable/renewable">Renewable Energy Business</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/en/investment/financial">IR Center</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/en/investment/management">Management Information</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/investment/financial">Financial Information</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/investment/credit">Disclosure Information</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/investment/announce">Announcement</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/en/pr/press-list">PR Center</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/en/pr/press-list">Press</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/pr/media-list">Media</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/en/recruit/people">Recruitment</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/en/recruit/people">Ideal Talent</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/recruit/benefits">Welfare</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/recruit/posting">Job Posting</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              {/* <NavLink to="/contactus/consult">Contact Us</NavLink> */}
              <NavLink to="/en/contactus/consult">Contact Us</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/en/contactus/consult">Consultation Request</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/contactus/inconvenience">Report Complaints</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/contactus/inquiry">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="lang">
            <NavLink to="/">KOR</NavLink>
          </div>
          <NavLink to="" className="menu" onClick={() => setPcMenuClass('on')}>
            <span></span>
          </NavLink>
        </div>
      </div>
      <div className={`all-menu ${pcMenuClass}`}>
        <div className="top">
          <div className="wrap">
            <h1>
              <img src="/img/common/ci.svg" alt="" />
            </h1>
            <NavLink to="" className="close" onClick={() => setPcMenuClass('')}>
              <img src="/img/common/ico-close.svg" alt="" />
            </NavLink>
          </div>
        </div>
        <div className="middle">
          <ul className="big-menu">
            <li>
              <NavLink to="/en/company/lselink">
                <strong>Company</strong>
              </NavLink>
              <ul className="small-menu">
                <li>
                  <NavLink to="/en/company/lselink">LS E-Link</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/vision">Vision</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/history">History</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/identity">CI·BI </NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/businessplace">Locations</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/en/business/e-link/evcharge">
                <strong>Business</strong>
              </NavLink>
              <ul className="small-menu">
                <li className={elinkMenuActive ? 'click on' : 'click'} onClick={() => setElinkMenuActive(!elinkMenuActive)}>
                  <NavLink to="">E-Link BUSINESS</NavLink>
                  <ul className="hide" style={elinkMenuActive ? { display: 'block' } : { display: 'none' }}>
                    <li>
                      <NavLink to="/en/business/e-link/evcharge">B2B specialized EV charging business</NavLink>
                    </li>
                    <li>
                      <NavLink to="/en/business/e-link/control">Establishment of control system</NavLink>
                    </li>
                    <li>
                      <NavLink to="/en/business/e-link/renewable">
                        Establishment of new and renewable energy convergence charging infrastructure
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className={evMenuActive ? 'click on' : 'click'} onClick={() => setEvMenuActive(!evMenuActive)}>
                  <NavLink to="">EV Charging Business</NavLink>
                  <ul className="hide" style={evMenuActive ? { display: 'block' } : { display: 'none' }}>
                    <li>
                      <NavLink to="/en/business/ev/transportation">Fortune</NavLink>
                    </li>
                    <li>
                      <NavLink to="/en/business/ev/logitics">Distribution</NavLink>
                    </li>
                    <li>
                      <NavLink to="/en/business/ev/coporate">Energy Center</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/en/business/renewable/renewable">Renewable Energy Business</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/en/investment/financial">
                <strong>IR Center</strong>
              </NavLink>
              <ul className="small-menu">
                <li>
                  <NavLink to="/en/investment/management">Management Information</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/financial">Financial Information</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/credit">Disclosure Information</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/announce">Announcement</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/en/pr/press-list">
                <strong>PR Center</strong>
              </NavLink>
              <ul className="small-menu">
                <li>
                  <NavLink to="/en/pr/press-list">Press</NavLink>
                </li>
                <li>
                  <NavLink to="/en/pr/media-list">Media</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/en/recruit/people">
                <strong>Recruitment</strong>
              </NavLink>
              <ul className="small-menu">
                <li>
                  <NavLink to="/en/recruit/people">Ideal Talent</NavLink>
                </li>
                <li>
                  <NavLink to="/en/recruit/benefits">Welfare</NavLink>
                </li>
                <li>
                  <NavLink to="/en/recruit/posting">Job Posting</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/en/contactus/consult">
                <strong>Contact Us</strong>
              </NavLink>
              <ul className="small-menu">
                <li>
                  <NavLink to="/en/contactus/consult">Consultation Request</NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus/inconvenience">Report Complaints</NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus/inquiry">Contact Us</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <ul>
            <li>
              <NavLink to="/en/policy/privacy">
                <strong>Privacy Policy</strong>
              </NavLink>
            </li>
            <li>
              <NavLink to="/en/policy/terms">Terms of Service</NavLink>
            </li>
            <li>
              <NavLink to="/en/policy/location">Terms of Use for Location-Based Services</NavLink>
            </li>
          </ul>
          <p>ⓒ2023. LS E-Link ALL RIGHT RESERVED.</p>
        </div>
      </div>
      <div className="mo-menu">
        <div className="wrap">
          <h1>
            <NavLink to="/">
              <img src="/img/common/ci.svg" alt="" />
            </NavLink>
          </h1>
          <NavLink to="" className={moMenuActive ? 'menu on' : 'menu'} onClick={() => setMoMenuActive(!moMenuActive)}>
            <span></span>
          </NavLink>
        </div>
        <div className={moMenuActive ? 'in active' : 'in'}>
          <ul className="big-menu">
            <li className={moMenuClass === '1' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('1')}>
              <NavLink to="">Company</NavLink>
              <div className="depth-1" style={moMenuClass === '1' ? { display: 'block' } : { display: 'none' }}>
                <ul>
                  <li>
                    <NavLink to="/en/company/lselink">LS E-Link</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/company/vision">Vision</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/company/history">History</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/company/identity">CI·BI </NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/company/businessplace">Locations</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className={moMenuClass === '2' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('2')}>
              <NavLink to="">Business</NavLink>
              <div className="depth-1" style={moMenuClass === '2' ? { display: 'block' } : { display: 'none' }}>
                <ul>
                  <li>
                    <NavLink to="/en/business/e-link/evcharge">E-Link Business</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/business/ev/transportation">EV Charging Business</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/business/renewable/renewable">Renewable Energy Business</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className={moMenuClass === '3' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('3')}>
              <NavLink to="">IR Center</NavLink>
              <div className="depth-1" style={moMenuClass === '3' ? { display: 'block' } : { display: 'none' }}>
                <ul>
                  <li>
                    <NavLink to="/en/investment/management">Management Information</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/investment/financial">Financial Information</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/investment/credit">Disclosure Information</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/investment/announce">Announcement</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className={moMenuClass === '4' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('4')}>
              <NavLink to="">PR Center</NavLink>
              <div className="depth-1" style={moMenuClass === '4' ? { display: 'block' } : { display: 'none' }}>
                <ul>
                  <li>
                    <NavLink to="/en/pr/press-list">Press</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/pr/media-list">Media</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className={moMenuClass === '5' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('5')}>
              <NavLink to="">Recruitment</NavLink>
              <div className="depth-1" style={moMenuClass === '5' ? { display: 'block' } : { display: 'none' }}>
                <ul>
                  <li>
                    <NavLink to="/en/recruit/people">Ideal Talent</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/recruit/benefits">Welfare</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/recruit/posting">Job Posting</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className={moMenuClass === '6' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('6')}>
              <NavLink to="">Contact Us</NavLink>
              <div className="depth-1" style={moMenuClass === '6' ? { display: 'block' } : { display: 'none' }}>
                <ul>
                  <li>
                    <NavLink to="/en/contactus/consult">Consultation Request</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/contactus/inconvenience">Report Complaints</NavLink>
                  </li>
                  <li>
                    <NavLink to="/en/contactus/inquiry">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
