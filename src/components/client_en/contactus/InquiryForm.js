import React, { useEffect, useState, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertContactUs } from 'store/contactUsReducer';
import AOS from 'aos';
import classnames from 'classnames';

const ContactusForm = () => {
  const [contactNm, setContactNm] = useState('');
  const [contactTitle, setContactTitle] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMail, setContactMail] = useState('');
  const [contactContents, setContactContents] = useState('');
  const [contactPw, setContactPw] = useState('');
  const [contactAgree, setContactAgree] = useState(false);
  const [fileName, setFileName] = useState('');
  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);

  const [agreeActive, setAgreeActive] = useState(false);

  const [emailCheck, setEmailCheck] = useState(true);

  const fileRef = useRef();

  const dispatch = useDispatch();

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

  // 핸드폰 등록
  const phoneChange = (e) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    setContactPhone(onlyNumber);
  };

  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴

    setEmailCheck(regExp.test(e.target.value));
    console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value));
  };

  const onCreate = async (e) => {
    e.preventDefault();

    const fileObj = fileRef.current.constructor.name === 'File' && fileRef.current;

    if (contactNm === '') {
      alert('Please enter your name.');
      return;
    }
    if (contactPhone === '') {
      alert('Please enter without -.');
      return;
    }
    if (contactMail === '') {
      alert('Please enter your email address.');
      return;
    }
    if (!emailCheck) {
      alert('Email is invalid.');
      return;
    }
    if (contactTitle === '') {
      alert('Please enter the title.');
      return;
    }
    if (contactContents === '') {
      alert('Please enter your inquiry details.');
      return;
    }
    if (contactPw === '') {
      alert('Please enter your password');
      return;
    }
    if (!contactAgree) {
      alert('Please agree to the collection and use of personal information.');
      return;
    }
    if (window.confirm('Would you like to register?')) {
      const newList = {
        contactId: 'CON',
        contactNm: contactNm,
        contactTitle: contactTitle,
        contactPhone: contactPhone,
        contactMail: contactMail,
        contactContents: contactContents,
        contactPw: contactPw,
        contactAgree: contactAgree ? 'Y' : 'N',
        contactType: 'C',
        file: fileObj,
      };
      const result = await dispatch(insertContactUs(newList));
      if (result.payload.data > 0) {
        alert('Success!');
        document.location.href = '/en/contactUs/inquiry';
      } else {
        alert('Fail!');
      }
    }
  };

  const onUploadFile = useCallback((e) => {
    const acceptFileTypes = /(\.|\/)(jpg|gif|png|jpeg|pdf|hwp|xlsx|docx|ppt|pptx)$/i;
    const acceptFileSize = 50 * 1024 * 1024;

    if (!e.target.files) {
      return;
    }

    if (!acceptFileTypes.test(e.target.files[0].name)) {
      alert('Only jpg, png, gif, jpeg, pdf, hwp, xlsx, docx, ppt, pptx files can be uploaded.');
      return;
    }

    if (e.target.files[0].size > acceptFileSize) {
      alert('Attachments can only be uploaded with a maximum size of 50MB or less.');
      return;
    }

    setFileName(e.target.files[0].name);
    fileRef.current = e.target.files[0];
    e.target.value = '';
  }, []);

  const onDeleteFile = useCallback((e) => {
    e.preventDefault();
    setFileName('');
    fileRef.current = '';
  }, []);

  const checkHandler = (e) => {
    setContactAgree(!contactAgree);
  };

  return (
    <div className="sub sub06">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            Contact us
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
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
                  <NavLink to="/en/contactus/consult">Consultation request</NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus/inconvenience">Report complaints</NavLink>
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
              <NavLink to="/en/contactus/inconvenience">Report complaints</NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/en/contactus/inquiry" className="on">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            We receive your inquiries and valuable suggestions.
          </h3>
          <div className="term">
            <div className="agree">
              <label htmlFor="privacychk">
                <input type="checkbox" id="privacychk" checked={contactAgree} onChange={(e) => checkHandler(e)} />
                <span className="chkimg"></span>I agree to the collection and use of personal information.
              </label>
            </div>
            <NavLink to="" className={agreeActive ? 'open' : ''} onClick={() => setAgreeActive(!agreeActive)}>
              View Terms
            </NavLink>
          </div>
          <div className="agree-detail-wp">
            <div className="agree-detail-box" style={agreeActive ? { display: 'block' } : { display: 'none' }}>
              <h3>1. General rules</h3>
              <p className="depth01_p">
                LSE Link Co., Ltd. (hereinafter referred to as the "Company") collects and uses personal information based on the user's consent for
                the convenience of customers using ELVIS electric vehicle charging service (hereinafter referred to as "electric vehicle charging
                service") operated by LSE Link Co., Ltd. and are providing. The company complies with the contents set forth in related laws, personal
                information protection regulations and guidelines, such as the "Personal Information Protection Act" and the "Act on Promotion of
                Information and Communications Network Utilization and Information Protection, etc." that information and communication service
                providers must comply with. "Personal information handling policy" refers to the guidelines that the company must comply with for the
                protection of personal information when collecting and processing personal information provided by customers for the use of electric
                vehicle charging service for the purpose and method of using electric vehicle charging service.
              </p>
              <h3>2. Purpose of personal information processing, items and retention period</h3>
              <p className="depth01_p">
                1) The company handles the following personal information items for the following purposes. Personal information is processed and
                retained within the period of retention and use of personal information in accordance with the law or within the period of retention
                and use of personal information agreed upon when collecting personal information from customers. Personal information processed by the
                company will not be used for purposes other than the following, and if the purpose of use or items are changed, necessary measures
                will be taken, such as obtaining separate consent in accordance with Article 18 of the 「Personal Information Protection Act」 no see.
              </p>
              <h4>① Member management service: Member management of electric vehicle charging service </h4>
              <p className="depth02_p">
                a. Purpose of collection and use: Membership registration and identification, confirmation of vehicle availability, provision of
                simple subscription service, prevention of fraudulent use of service, confirmation of intent to subscribe and maintenance/management
                of membership, service use and consultation support, notification of charging service notification, etc. Delivery of information
                <br />
                b. Collected items: [Required items] ID, name, CI, mobile phone number, address, email, identification number, simple sign-up
                authentication number
                <br />
                - Partially masked credit card number for credit card payment, encrypted billkey ) and date of issuance
                <br />
                - Date of birth Collected through PASS authentication to verify ownership of credit card and stored and managed as decryptable
                password value
                <br />
                - [Optional] Vehicle ownership type, vehicle registration number (vehicle number), vehicle manufacturer, vehicle model, Vehicle year,
                vehicle model, and vehicle nickname
                <br />
                c. Retention period: Delete immediately when membership is withdrawn (unless there are related laws)
              </p>
              <h4>② Service: Electric vehicle charging service</h4>
              <p className="depth02_p">
                a. Purpose of collection and use: <br />
                - ELVIS cash, charge history inquiry, payment card and vehicle management <br />
                - Affiliate point conversion and use, service provision, etc. <br />
                * Credit card registration information is encrypted immediately after input and transmitted to each financial company, and is not
                stored by the company . The company receives and uses only encrypted information for payment processing. <br />
                b. Collected items: [Required items] Mobile phone number, payment/approval related information [payment card authentication number,
                CI, payment card alias, charging history, payment history, affiliate point usage history, membership card/point related information
                [membership card number, Vehicle registration number (vehicle number), vehicle manufacturer, vehicle model, and vehicle information
                (in case of additional vehicle registration after initial subscription) <br />
                c. Retention period: Delete immediately when membership is withdrawn (unless there are related laws)
              </p>
              <h4>③ Service: Improvement of electric vehicle charging service </h4>
              <p className="depth02_p">
                a. Purpose of collection and use: Statistical processing for VOC processing, identification of access frequency, and improvement of
                service use <br />
                b. Collected items: [Required items] Service use records, defective use records, charging details, 1:1 inquiry details, vehicle
                diagnosis data
                <br />
                c. Retention period: Delete immediately when membership is withdrawn (unless there are related laws)
              </p>
              <h4>④ Service: Location-based service</h4>
              <p className="depth02_p">
                a. Purpose of collection and use: search for charging stations, directions to charging stations <br />
                b. Collection items: [Required items] Real-time location information (GPS) <br />
                c. Retention period: Deletion immediately after termination of charging station search and route guidance (no separate storage)
              </p>
              <h4>⑤ Service: Marketing and Advertising</h4>
              <p className="depth02_p">
                a. Purpose of collection and use: Delivery of advertising information related to electric vehicle charging service and utilization for
                marketing, market research, product and event information, etc.
                <br />
                b.Collected items: [Required items] Name, date of birth, gender, encrypted identification information (CI), mobile phone number,
                domestic or foreigner status, e-mail address, purchased vehicle information, charging history, ELVIS cache usage history <br />
                c. Retention period: Delete immediately when membership is withdrawn (unless there are related laws)
              </p>
              <h4>⑥ Service: Vehicle Registration </h4>
              <p className="depth02_p">
                a. Purpose of collection and use: Set membership level when signing up for membership <br />
                b. Collection items: vehicle nickname, vehicle ownership type, vehicle registration number (vehicle number), vehicle manufacturer,
                vehicle type, model name, vehicle year <br />
                c. Retention period: Delete immediately when membership is withdrawn (unless there are related laws)
              </p>
              <p className="depth01_p">
                2) However, if there is an obligation to preserve it in accordance with the provisions of related laws such as the Commercial Act, the
                company will keep the customer's personal information. In this case, the company uses the information it keeps only for the purpose of
                keeping it, and the retention period is as follows.
              </p>
              <p className="depth02_p">
                ① Information related to the company's commercial books and important documents and slips related to business: 10 years - important
                documents / 5 years - slips (Commercial Act) <br />
                ② Information related to books and supporting documents related to all transactions: 5 years (Basic National Tax Act, corporate Tax
                Act)
                <br />
                ③ Records on contracts or subscription withdrawals, records on payment and supply of goods, etc.: 5 years (Consumer Protection Act in
                Electronic Commerce, etc.)
                <br />
                ④ Records on consumer complaints or dispute handling: 3 years (electronic Consumer Protection Act in Commercial Transactions, etc.)
                <br />
                ⑤ Tax invoices or receipts issued with books: 5 years (Value Added Tax Act)
                <br />⑥ Service use records, access logs, access IP information in accordance with the 「Communications Secrets Protection Act」: 3
                months
              </p>
              <p className="depth01_p">
                3) The company Data confirming the use and provision of personal location information are automatically recorded in the location
                information system in accordance with Article 16, Paragraph 2 of the 『Act on Protection and Use of Location Information』, and
                personal location information is used for handling civil complaints, etc. We retain the fact-checking data provided for 6 months from
                the time of recording.
              </p>

              <h3>3. Destruction procedure and method of personal information</h3>
              <p className="depth01_p">
                1) The company destroys the personal information without delay when the personal information becomes unnecessary, such as the elapse
                of the personal information retention period and the achievement of the purpose of processing, unless it is required to preserve
                personal information in accordance with other laws.
              </p>
              <p className="depth01_p">
                2) Unless the company is required to retain it according to other laws, when personal location information becomes unnecessary, such
                as the expiration of the retention period of personal location information and the achievement of the purpose of processing, the
                location that must be recorded and preserved in accordance with Article 2, Paragraph 3 Personal location information other than data
                to confirm the use and provision of information is immediately destroyed.
              </p>
              <p className="depth01_p">
                3) Even though the personal information retention period agreed to by the customer has elapsed or the purpose of processing has been
                achieved, in the event that personal information must be retained in accordance with other laws and internal policies and reasons for
                information protection (refer to retention and use period) , The personal information is moved to a separate database (DB) or stored
                in a different storage location (separate filing cabinet in the case of paper). Personal information transferred to a separate DB is
                not used for any purpose other than the purpose for which it is retained unless otherwise required by law.
              </p>
              <p className="depth01_p">
                4) The procedure and method of destroying personal information (including personal location information) are as follows.
              </p>
              <p className="depth02_p">
                - Destruction procedure: The company selects the personal information for which the reason for destruction occurred and destroys the
                personal information with the approval of the person in charge of personal (location) information protection of the company.
                <br />- Destruction method: The company destroys personal information recorded and stored in electronic file form so that the record
                cannot be reproduced, and personal information recorded and stored in paper documents is destroyed by shredding or incineration.
              </p>

              <h3>4. Provision of personal information to third parties</h3>
              <p className="depth01_p">
                1) The company processes customers' personal information only within the scope specified in Article 2 (Purpose of processing personal
                information, items and retention period), and in accordance with Article 17 of the 「Personal Information Protection Act」 and
                Personal information will be provided to third parties only if it falls under Article 18.
              </p>
              <p className="depth01_p">
                2) If the company provides the customer's personal location information to a third party designated by the customer, the company
                immediately notifies the customer of the recipient, the date and time of provision, and the purpose of provision through the
                communication terminal device that collected the personal location information. However, in the following cases, notification will be
                made to the communication terminal device specified and designated by the customer in advance or by e-mail.
              </p>
              <p className="depth02_p">
                - When the relevant communication terminal device that collected personal location information does not have a function to receive
                text, voice, or video <br />- When the personal location information subject collects personal location information, other than the
                relevant communication terminal device or e-mail If you have requested in advance to be notified
              </p>

              <h3>5. Measures to ensure the safety of personal information</h3>
              <p className="depth01_p">
                ※ Technical/administrative protection measures for personal information <br />
                Electric vehicle charging service applies the following technical/management measures to ensure safety so that personal information is
                not lost, stolen, leaked, falsified, or damaged in processing customer personal information.
              </p>
              <h4>1) Technical measures</h4>
              <p className="depth02_p">
                ① Encryption of customer information In the case of storing personal information that requires encryption by law, such as unique
                identification information and card number, it is encrypted and stored in the DB so that the customer's personal information cannot be
                used even if it is leaked due to external intrusion.
                <br />
                ② Encryption of communication section We take measures to ensure that customer information is safely transmitted through encrypted
                communication such as SSL for the section where customer information is entered and delivered, such as membership registration and
                login through the website. <br />③ In order to provide security solution installation services and safely manage customer information,
                vaccine programs are installed, periodic updates, and regular inspections are performed on the personal information processing system,
                and DB access control solutions and screen capture prevention solutions, if necessary, etc. is applying.
              </p>
              <h4>2) Administrative measures </h4>
              <p className="depth02_p">
                ① Establishment of personal information management system In order to safely manage personal information, the company has established
                and operated a personal information management system internally.
                <br />
                ② Operating the Personal Information Protection Committee The company organizes a committee for personal information protection, holds
                a committee meeting at least once a year, and makes efforts to improve and correct matters such as the operation of the personal
                information management system and personal information protection issues. there is. <br />③ Management of personal information
                handlers Personal information handlers who handle personal information of customers are required to submit a personal information
                protection pledge, and personal information protection training is conducted at least once a year to ensure the importance and safe
                management of customer information. In addition, we minimize unnecessary access to and exposure of customers' personal information by
                managing the authority of the personal information manager.
              </p>

              <h3>6. Matters concerning the installation, operation and rejection of automatic personal information collection devices</h3>
              <p className="depth01_p">
                1) The electric vehicle charging service uses 'cookies' that store and retrieve usage information from time to time in order to
                provide individually customized services to users.
              </p>
              <p className="depth01_p">
                2) Cookies are a small amount of information that the server (http(s)) used to run the website sends to the user's computer browser,
                and is sometimes stored on the hard disk of the user's PC computer.
              </p>
              <p className="depth02_p">
                ① Purpose of use of cookies: It is used to provide optimized information to users by identifying the types of visits and usage of each
                service and website visited by the user, security access, etc. Customers have a choice about installing cookies. Therefore, customers
                may allow all cookies by setting options in their web browser, go through confirmation whenever a cookie is saved, or refuse to save
                all cookies.
                <br />② Installation, Operation, and Rejection of Cookies: To reject cookie settings, you can accept all cookies by selecting the
                option of the web browser used by the customer, go through confirmation every time a cookie is saved, or refuse to save all cookies
                can.
              </p>
              <p className="notice_p">
                ※ Example of setting method (in case of Internet Explorer): Tools at the top of the web browser &gt; Internet Options &gt; Privacy
                &gt; Advanced &gt; Select setting method
              </p>
              <p className="depth02_p">③ However, if you refuse to save cookies, you may have difficulty using some services that require login.</p>

              <h3>7. Access and correction of personal information</h3>
              <p className="depth01_p">
                1) Members can view or correct their registered personal information at any time. In particular, in response to a member's request for
                correction of personal information, the company will not use the personal information until it is corrected.
              </p>
              <p className="depth01_p">
                2) The company notifies the member of the member's personal information usage details at least once a year by e-mail, writing, fax, or
                phone.
              </p>

              <h3>8. Withdrawal of Consent to Collection, Use and Provision of Personal Information</h3>
              <p className="depth01_p">
                1) Members can withdraw their consent to the collection, use and provision of personal information at any time when signing up for
                membership.
              </p>
              <p className="depth01_p">
                2) To withdraw consent, contact the homepage or customer center and go through the identification process and directly apply for
                withdrawal of consent, or if you send it in writing or by e-mail to the person in charge of personal information protection or
                personal information protection, action will be taken without delay.
              </p>

              <h3>9. Rights and obligations of customers and legal representatives and how to exercise them</h3>
              <p className="depth01_p">
                1) Customers or legal representatives (in the case of children under the age of 14) may withdraw (cancel subscription) their consent
                to the collection, use, and provision of personal information to the company at any time, and view, correct, delete, or suspend
                processing of personal information. You can exercise your rights, such as requests.
                <br />
                <br />
                2) The customer or legal representative can exercise the above rights online by accessing the company homepage, going through the
                identity verification process, and then going through the personal information management menu. You can do this by contacting the
                person in charge, and the company will take action without delay.
                <br />
                <br />
                3) The exercise of rights pursuant to Paragraphs 1 and 2 can be done through an agent, such as a customer's legal representative or an
                authorized person. In this case, you must submit a power of attorney in accordance with the “Public Notice on Personal Information
                Processing Methods (No. 2020-7)” Annex No. 11.
                <br />
                <br />
                4) Requests for viewing and suspension of processing of personal information may be restricted in accordance with Article 35 Paragraph
                4 and Article 37 Paragraph 2 of the Personal Information Protection Act.
                <br />
                <br />
                5) Requests for correction and deletion of personal information cannot be requested if the personal information is specified as the
                subject of collection in other laws and regulations.
                <br />
                <br />
                6) The company checks whether the person who made the request, such as request for access, correction, deletion, or suspension of
                processing according to the rights of the information subject, is the person or a legitimate agent.
                <br />
                <br />
                7) If the customer requests correction of personal information error, the company will not use or provide the personal information
                until the error correction is completed, and if the personal information has already been provided to a third party, Notify us so that
                errors can be corrected.
                <br />
                <br />
                8) If a customer or legal representative withdraws consent (termination of subscription), the company in principle destroys it without
                delay, but if it is mandated to be retained by the relevant laws and regulations, it is in accordance with the personal information
                handling policy 'retention and use period of personal information' We take measures to ensure that personal information is processed
                according to personal information and is only available for viewing or use when absolutely necessary.
              </p>

              <h3>10. Rights and obligations of persons obligated to protect children under the age of 8, etc., and how to exercise them</h3>
              <p className="depth01_p">
                1) In order to protect the life or body of a child under the age of 8, etc. If you agree to the collection, use, and provision of
                information, you are deemed to have given your consent.
              </p>
              <p className="depth02_p">
                - Children under the age of 8<br />
                - Adult guardians <br />- Persons with mental disabilities according to Article 2, Paragraph 2, Item 2 of the 『Welfare of Persons
                with Disabilities Act』 and severely disabled according to Article 2, Subparagraph 2 of the Employment Promotion and Vocational
                Rehabilitation Act (Limited to those who have been registered as disabled pursuant to Article 32 of the 『Welfare of Persons with
                Disabilities Act』)
              </p>
              <p className="depth01_p">
                2) A person obligated to protect children under the age of 8, etc. means a person who actually protects a child under the age of 8,
                etc. and falls under any of the following:
              </p>
              <p className="depth02_p">
                - A legal representative of a child under the age of 8 or a guardian pursuant to Article 3 of the 「Act on Guardianship of Minors in
                Protection Facilities」
                <br />
                - A legal representative of an adult guardian <br />- A legal representative of a child under Paragraph 1 Subparagraph 3 The head of a
                residential facility for the disabled (limited to facilities established and operated by the state or local governments) under Article
                58 (1) 1, mental health care under Article 22 of the Act on Mental Health Promotion and Welfare Service Support for Persons with
                Mental Disorders The head of a facility and the head of a mental rehabilitation facility (limited to facilities established and
                operated by the state or local government) under Article 26 of the same Act
              </p>
              <p className="depth01_p">
                3) If you intend to consent to the collection, use, and provision of personal location information for the protection of the life or
                body of children under the age of 8, etc., write the following information in the written consent form to prove that you are the
                guardian of the child under the age of 8 and must be submitted to the company after the person responsible for protection affixes
                his/her name and seal or signature.
              </p>
              <p className="depth02_p">
                - Name, address and date of birth of children under the age of 8 <br />
                - Name, address and contact information of the person responsible for protection <br />
                - The fact that the purpose of collecting, using or providing personal location information is limited to protecting the life or body
                of children under the age of 8 <br />- Date of consent
              </p>
              <p className="depth01_p">
                4) If the person responsible for protection consents to the collection, use, and provision of personal location information of
                children under the age of 8, the “customer (subject of personal location information)” is regarded as the person responsible for
                protection, and the company at any time “protects location information and You can exercise your rights under Article 24 of the Act on
                Utilization, Etc. Also, as a customer, the rights and obligations and how to exercise them are [8. Rights and obligations of customers
                and legal representatives and how to exercise them].
              </p>

              <h3>11. Remedies for Infringement of Customer Rights and Interests</h3>
              <p className="depth01_p">
                Customers can inquire about damage relief and consultation for personal information infringement to the following organizations. The
                organizations below are independent from the electric vehicle charging service. If you are not satisfied with the results of personal
                information complaint handling and damage relief of the ELVIS charging service, or if you need more detailed help, please contact us.
              </p>

              <table className="table_basic tb01">
                <tr>
                  <th>Personal Information Infringement Report Center (operated by Korea Internet & Security Agency)</th>
                  <td>
                    - Responsibilities: Report infringement of personal information, apply for consultation <br />
                    - Website: privacy.kisa.or.kr <br />
                    - Phone: (without area code) 118 <br />- Address: (58324) 3rd floor, 9 Jinheung-gil, Naju-si, Jeollanam-do (301-2 Bitgaram-dong)
                  </td>
                </tr>
                <tr>
                  <th>Personal Information Dispute Mediation Committee </th>
                  <td>
                    - Jurisdiction: personal information dispute mediation application, collective dispute mediation (civil settlement)
                    <br />
                    - Website: www.kopico.go.kr <br />
                    - Phone: (without area code) 1833-6972 <br />- Address: (03171) 209 Sejong-daero, Jongno-gu, Seoul Government Complex Seoul 12th
                    floor
                  </td>
                </tr>
                <tr>
                  <th>Supreme Prosecutor's Office</th>
                  <td> (without area code) 1301 (www.spo.go.kr) </td>
                </tr>
                <tr>
                  <th>National Police Agency </th>
                  <td>(without area code) 182 (ecrm.cyber.go.kr)</td>
                </tr>
              </table>

              <h3>12. Personal information protection manager and person in charge, business processing department</h3>
              <p className="depth01_p">
                1) The electric vehicle charging service is responsible for overall handling of personal information, and the person in charge of
                personal information protection is designated as follows for customer complaint handling and damage relief related to personal
                information processing.
              </p>

              <table className="table_basic tb02">
                <tr>
                  <th>Privacy Policy and General</th>
                  <th>ELVIS Charging Service Division</th>
                </tr>
                <tr>
                  <td>
                    Person in charge of personal information protection: Jinbok Noh, Team Leader
                    <br />
                    (Affiliation: Business Support Team, E-mail: jbnoh@lselink.com)
                  </td>
                  <td>
                    Person in charge of personal (location) information protection: Manager Jang Dong-soo
                    <br />
                    (Affiliation: Service Development Department, E-mail: dschang@lselink.com)
                  </td>
                </tr>
              </table>

              <p className="depth01_p">
                2) The department in charge of personal information protection is in charge of requesting access to personal information
                <br />
                <br />
                3) Customers can inquire about personal information protection related inquiries, complaint handling, damage relief, etc. that
                occurred while using the electric vehicle charging service (or business) to the person in charge of personal information protection
                and the department in charge. Electric vehicle charging service will answer and process your inquiries without delay. <br />
                <br />
              </p>

              <p className="depth02_p">
                ※ However, it is difficult to answer and process emails sent with contents other than personal information protection related
                inquiries, complaints, and damages. In accordance with the provisions of Articles 50 through 50-8 of the relevant Act, measures such
                as reporting to related agencies may be taken.
              </p>

              <h3>13. Information on transmission of advertising information</h3>
              <p className="depth01_p">
                1) The electric vehicle charging service does not transmit commercial advertising information without prior consent from the customer.
                <br />
                <br />
                2) The electric vehicle charging service is sent only to customers who have obtained prior consent for the transmission of advertising
                information for commercial purposes, such as event information, marketing and publicity.
                <br />
                <br />
                3) Electric vehicle charging service transmits advertising information using electronic transmission media after taking the following
                measures in accordance with Articles 50 to 50-8 of the 「Act on Promotion of Information and Communications Network Utilization and
                Information Protection, Etc.」
              </p>
              <h4>Electronic transmission method: mobile phone text message, e-mail, fax, and other electronic transmission media</h4>
              <p className="depth02_p">
                ① Display (advertisement) at the beginning of the title <br />
                ② Name and contact information of the sender <br />③ Display a number that allows you to reject free calls
              </p>
              <p className="depth01_p">
                4) Electric vehicle charging service confirms the customer's consent to receiving advertising information every two years from the
                date the customer consents to receiving advertising information. If the customer does not express any intention after being informed
                of whether or not to consent to receiving, the intention to consent to receiving is maintained.
                <br />
                <br />
                5) Electric vehicle charging service does not transmit advertising information using electronic transmission media from 9:00 pm to
                8:00 am the next day.
                <br />
                <br />
                6) However, in the following cases, contents sent by electronic transmission medium are regarded as exceptions to advertising
                information.
              </p>
              <p className="depth02_p">
                - Information related to the fulfillment of electric vehicle charging service contracts concluded between the company and customers
                <br />- Matters that the company must notify customers, such as vehicle safety and quality-related contents, in accordance with
                relevant laws and regulations
              </p>

              <h3>14. Matters regarding changes to the personal information processing policy</h3>
              <p className="depth01_p">
                In the case of changing this personal information processing policy, the EV charging service is notified in advance of the reason and
                details of the change, such as through a notice on the first screen of the homepage or through a separate window, before being changed
                and applied.
                <br />
                <br />
              </p>
              <p className="depth02_p">[Addendum] (Enforcement date) This policy will be effective from February 1, 2023.</p>
            </div>
          </div>
          <ul className="write">
            <li>
              <div className="input-wrap">
                <span className="tit">Name</span>
                <input type="text" placeholder="Please enter your name." onChange={(e) => setContactNm(e.target.value)} value={contactNm} />
              </div>
              <div className="input-wrap pc-block"></div>
            </li>
            <li>
              <div className="input-wrap">
                <span className="tit">Contact</span>
                <input type="text" placeholder="Please enter without -." onChange={phoneChange} value={contactPhone} />
              </div>
              <div className="input-wrap">
                <span className="tit">Email</span>
                <input
                  type="text"
                  placeholder="Please enter your email address."
                  onChange={(e) => setContactMail(e.target.value)}
                  value={contactMail}
                  onKeyUp={checkEmail}
                />
              </div>
            </li>
            <li>
              <div className="input-wrap">
                <span className="tit">Title</span>
                <input type="text" placeholder="Please enter the title." onChange={(e) => setContactTitle(e.target.value)} value={contactTitle} />
              </div>
            </li>
            <li>
              <div className="input-wrap">
                <span className="tit">Detail</span>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Please enter your inquiry details."
                  onChange={(e) => setContactContents(e.target.value)}
                  value={contactContents}
                ></textarea>
              </div>
            </li>
            <li>
              <div className="input-wrap">
                <span className="tit">Password</span>
                <input type="text" placeholder="Please enter your password." onChange={(e) => setContactPw(e.target.value)} />
              </div>
            </li>
          </ul>
          <div className="file">
            <div className="input-box">
              <label htmlFor="choice" className="file-choice">
                <input type="file" id="choice" className="file" ref={fileRef} onChange={onUploadFile} />
                File +
              </label>
              <span className={fileName ? 'upload-name on' : 'upload-name'} onClick={onDeleteFile}>
                {fileName}
              </span>
            </div>
            <p>※ Only jpg, png, gif, jpeg, pdf, hwp, xlsx, docx, ppt, and pptx files with a maximum size of 50MB or less can be uploaded.</p>
          </div>
          <NavLink to="" className="qa-btn" onClick={onCreate}>
            Send
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContactusForm;
