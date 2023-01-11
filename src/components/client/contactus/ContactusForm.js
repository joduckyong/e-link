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
    const [contactAgree, setContactAgree] = useState(false);
    const [fileName, setFileName] = useState('선택된 파일 없음');
    const [activeMenu1, setActiveMenu1] = useState(false);
    const [activeMenu2, setActiveMenu2] = useState(false);

    const fileRef = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        AOS.init();
    });

    const onClickMenuLink = (menu) => {
        if(menu === '1'){
            setActiveMenu1(!activeMenu1);
            setActiveMenu2(false);
        }else if(menu === '2'){
            setActiveMenu1(false);
            setActiveMenu2(!activeMenu2);
        }
    }

    const onCreate = async (e) => {
        e.preventDefault();

        const fileObj = fileRef.current.constructor.name === 'File' && fileRef.current;

        if(contactNm === ''){
            alert('이름을 입력하세요');
            return;
        }
        if(contactPhone === ''){
            alert('연락처를 입력하세요');
            return;
        }
        if(contactMail === ''){
            alert('메일을 입력하세요');
            return;
        }
        if(contactTitle === ''){
            alert('제목을 입력하세요');
            return;
        }
        if(contactContents === ''){
            alert('내용을 입력하세요');
            return;
        }
        if(window.confirm('등록 하시겠습니까?')){
            const newList = { 
                contactId: 'CON', 
                contactNm: contactNm, 
                contactTitle: contactTitle, 
                contactPhone: contactPhone, 
                contactMail: contactMail, 
                contactContents: contactContents,
                contactAgree: contactAgree ? 'Y' : 'N',
                file: fileObj
            }
            const result = await dispatch(insertContactUs(newList));
            if(result.payload.data > 0){
                alert("등록 되었습니다.");
                document.location.href = '/contactUs';
            }else{
                alert("등록에 실패하였습니다.");
            }
            
        }
    }

    const onUploadFile = useCallback((e) => {

        const acceptFileTypes= /(\.|\/)(jpg|gif|png|jpeg|pdf|hwp|xlsx|docx|ppt|pptx)$/i;
        const acceptFileSize = 50 * 1024 * 1024;

        if (!e.target.files) {
            return;
        }

        if (!acceptFileTypes.test(e.target.files[0].name)) {
            alert("첨부파일은 jpg, png, gif, jpeg, pdf, hwp, xlsx, docx, ppt, pptx 파일만 업로드 가능합니다.");
            return;
        }

        if(e.target.files[0].size > acceptFileSize){
            alert("첨부파일은 최대 50MB 이하의 파일만 업로드 가능합니다.");
            return;
        }

        setFileName(e.target.files[0].name);
        fileRef.current = e.target.files[0];
    }, []);

    const checkHandler = (e) => {
        setContactAgree(!contactAgree);
      };

    return (
      <div className="sub sub06">
            <div className="sub-top">
                <div className="bg big-frame"></div>
                <div className="txt-wrap wrap">
                    <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">Contact us</h2>
                    <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
                        <li><NavLink to="/"><img src="./../img/sub/ico-home.svg" alt="" /></NavLink></li>
                        <li className={classnames('link', {show: activeMenu1})}>
                            <NavLink to="" onClick={(e) => onClickMenuLink('1')}>Contact us</NavLink>
                            <ul className={classnames('links', {active: activeMenu1})}>
                                <li><NavLink to="/company/lselink">회사소개</NavLink></li>
                                <li><NavLink to="/business/e-link/evcharge">사업영역</NavLink></li>
                                <li><NavLink to="/investment/management">투자정보</NavLink></li>
                                <li><NavLink to="/pr/press-list">홍보센터</NavLink></li>
                                <li><NavLink to="/recruit/people">채용정보</NavLink></li>
                                <li><NavLink to="/contactus" className="on">Contact Us</NavLink></li>
                                <li><NavLink to="">EV 충전소</NavLink></li>
                            </ul>
                        </li>
                        <li className="on link">
                            <NavLink to="/contactus" onClick={(e) => onClickMenuLink('2')}>Contact us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="content">
                <div className="wrap">
                    <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">고객님의 질의와 소중한 제안을 받습니다.</h3>
                    <div className="term">
                        <div className="agree">
                            <label htmlFor="privacychk">
                                <input type="checkbox" id="privacychk" checked={contactAgree} onChange={(e) => checkHandler(e)}/>
                                <span className="chkimg"></span>
                                개인정보 수집 및 이용에 동의합니다.
                            </label>
                        </div>
                        <NavLink to="">약관보기</NavLink>
                    </div>   
                    <ul className="write">
                        <li>
                            <div className="input-wrap">
                                <span className="tit">이름</span>
                                <input 
                                    type="text" 
                                    placeholder="이름을 입력해주세요." 
                                    onChange={(e) => setContactNm(e.target.value)}
                                    value={contactNm}
                                />
                            </div>
                            <div className="input-wrap pc-block"></div>
                        </li>
                        <li>
                            <div className="input-wrap">
                                <span className="tit">연락처</span>
                                <input 
                                    type="text" 
                                    placeholder="-를 제외하고 입력해주세요." 
                                    onChange={(e) => setContactPhone(e.target.value)}
                                    value={contactPhone}
                                />
                            </div>
                            <div className="input-wrap">
                                <span className="tit">이메일</span>
                                <input 
                                    type="text" 
                                    placeholder="이메일 주소를 입력해주세요." 
                                    onChange={(e) => setContactMail(e.target.value)}
                                    value={contactMail}
                                />
                            </div>
                        </li>
                        <li>
                            <div className="input-wrap">
                                <span className="tit">제목</span>
                                <input 
                                    type="text" 
                                    placeholder="제목을 입력해주세요." 
                                    onChange={(e) => setContactTitle(e.target.value)}
                                    value={contactTitle}
                                />
                            </div>
                        </li>
                        <li>
                            <div className="input-wrap">
                                <span className="tit">내용</span>
                                <textarea 
                                    name="" 
                                    id="" 
                                    cols="30" 
                                    rows="10" 
                                    placeholder="문의 하실 내용을 입력해주세요."
                                    onChange={(e) => setContactContents(e.target.value)}
                                    value={contactContents}
                                ></textarea>
                            </div>
                        </li>
                    </ul>
                    <div className="file">
                        <div className="input-box">
                            <label htmlFor="choice" className="file-choice">
                                <input type="file" id="choice" className="file" ref={fileRef} onChange={onUploadFile}/>파일첨부 +
                            </label>
                            <span className="upload-name">{fileName}</span>
                        </div>
                        <p>※ 첨부파일은 최대 50MB 이하의 jpg, png, gif, jpeg, pdf, hwp, xlsx, docx, ppt, pptx 파일만 업로드 가능합니다.</p>
                    </div>    
                    <NavLink to="" className="qa-btn" onClick={onCreate}>문의하기</NavLink>       
                </div>
            </div>
        </div>
  );
};

export default ContactusForm;
