import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientContactUsInfo } from 'store/contactUsEnReducer';
import AOS from 'aos';
import classnames from 'classnames';
import { downloadFile } from 'common/download';

const InquiryInfoForm = () => {
  const id = new URL(window.location.href).searchParams.get('id');
  const mail = new URL(window.location.href).searchParams.get('mail');
  const type = new URL(window.location.href).searchParams.get('type');
  const key = new URL(window.location.href).searchParams.get('key');

  const contactusInfo = useSelector((state) => state.contactUsEnReducer);
  const prevBoardId = useSelector(
    (state) => state.contactUsEnReducer.prevNextData?.prevBoardId,
  );
  const nextBoardId = useSelector(
    (state) => state.contactUsEnReducer.prevNextData?.nextBoardId,
  );

  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    // console.log('id === ' + id);
    // console.log('mail === ' + mail);

    const newList = { contactId: id, contactMail: mail, contactPw: key };
    dispatch(selectClientContactUsInfo(newList));
  }, [dispatch, id, mail, key]);

  const onClickMenuLink = (menu) => {
    if (menu === '1') {
      setActiveMenu1(!activeMenu1);
      setActiveMenu2(false);
    } else if (menu === '2') {
      setActiveMenu1(false);
      setActiveMenu2(!activeMenu2);
    }
  };

  return (
    <div className="sub sub06 qa_sub06">
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
              <NavLink to="/en">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                Contact Us
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
                Contact us
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
                  <NavLink to="/en/contactus/inquiry" className="on">
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-slide-wrap">
        <div className="nav-slide">
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
              <NavLink to="/en/contactus/consult">Consultation request</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/en/contactus/inconvenience">
                Report complaints
              </NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/en/contactus/inquiry" className="on">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="content view-wp">
        <div className="wrap">
          <h3
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            We receive your inquiries and valuable suggestions.
          </h3>
          <div className="tab_box">
            <NavLink to="/en/contactus/inquiry">Ask a question</NavLink>
            <NavLink to="/en/contactus/inquiry2" className="on">
              Inquiry details
            </NavLink>
          </div>
          {type === 'C' && (
            <>
              <div className="ttl-wp">
                <p>{contactusInfo.dataInfo.contactTitle}</p>
                <div className="info">
                  <p>
                    {contactusInfo.dataInfo.contactNm}
                    <span>|</span>
                  </p>
                  <p>{contactusInfo.dataInfo.createdDatetime}</p>
                </div>
              </div>
              <div className="cont-wp">
                <pre>{contactusInfo.dataInfo.contactContents}</pre>
              </div>
              <div className="list-num-wrap">
                <div className="file">
                  <button
                    className="btn-down"
                    onClick={() =>
                      downloadFile(
                        contactusInfo.dataInfo.fileNm,
                        contactusInfo.dataInfo.fileOriginNm,
                      )
                    }
                  >
                    <div className="list-num">
                      {contactusInfo.dataInfo.fileOriginNm}
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}
          {contactusInfo.dataInfo.contactRecontents && type === 'V' && (
            <>
              <div className="ttl-wp">
                <p>The answer has been completed.</p>
                <div className="info">
                  <p>
                    admin
                    <span>|</span>
                  </p>
                  <p>{contactusInfo.dataInfo.updatedDatetime}</p>
                </div>
              </div>
              <div className="cont-wp">
                <div
                  dangerouslySetInnerHTML={{
                    __html: contactusInfo.dataInfo.contactRecontents,
                  }}
                ></div>
              </div>
            </>
          )}

          <div className="view-control">
            <NavLink
              to={
                prevBoardId &&
                `/en/contactUs/inquiryInfo?id=${prevBoardId}&mail=${mail}&type=C&key=${key}`
              }
              className={classnames('prev-btn', { disable: !prevBoardId })}
            >
              Before
            </NavLink>
            <NavLink
              to={`/en/contactUs/inquiryList?mail=${mail}&key=${key}`}
              className="list-btn"
            >
              List
            </NavLink>
            <NavLink
              to={
                nextBoardId &&
                `/en/contactUs/inquiryInfo?id=${nextBoardId}&mail=${mail}&type=C&key=${key}`
              }
              className={classnames('next-btn', { disable: !nextBoardId })}
            >
              next
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryInfoForm;
