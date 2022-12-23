import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';

const ContactusForm = () => {

  useEffect(() => {
    AOS.init();
  });

  return (
      <div className="sub sub06">
            <div className="sub-top">
                <div className="bg big-frame"></div>
                <div className="txt-wrap wrap">
                    <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">Contact us</h2>
                    <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
                        <li className="on"><NavLink to="">Contact us</NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="content">
                <div className="wrap">
                    <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">고객님의 질의와 소중한 제안을 받습니다.</h3>
                    <div className="term">
                        <div className="agree">
                            <label htmlFor="privacychk"><input type="checkbox" id="privacychk" /><span className="chkimg"></span>개인정보 수집 및 이용에 동의합니다.</label>
                        </div>
                        <NavLink to="">약관보기</NavLink>
                    </div>   
                    <ul className="write">
                        <li>
                            <div className="input-wrap">
                                <span className="tit">이름</span>
                                <input type="text" placeholder="이름을 입력해주세요." />
                            </div>
                            <div className="input-wrap pc-block"></div>
                        </li>
                        <li>
                            <div className="input-wrap">
                                <span className="tit">연락처</span>
                                <input type="text" placeholder="-를 제외하고 입력해주세요." />
                            </div>
                            <div className="input-wrap">
                                <span className="tit">이메일</span>
                                <input type="text" placeholder="이메일 주소를 입력해주세요." />
                            </div>
                        </li>
                        <li>
                            <div className="input-wrap">
                                <span className="tit">제목</span>
                                <input type="text" placeholder="제목을 입력해주세요." />
                            </div>
                        </li>
                        <li>
                            <div className="input-wrap">
                                <span className="tit">내용</span>
                                <textarea name="" id="" cols="30" rows="10" placeholder="문의 하실 내용을 입력해주세요."></textarea>
                            </div>
                        </li>
                    </ul>
                    <div className="file">
                        <div className="input-box">
                            <label htmlFor="choice" className="file-choice">
                                <input type="file" id="choice" className="file" />파일첨부 +
                            </label>
                            <span className="upload-name">선택된 파일 없음</span>
                        </div>
                        <p>※ 첨부파일은 최대 50MB 이하의 jpg, png, gif, jpeg, pdf, hwp, xlsx, docx, ppt, pptx 파일만 업로드 가능합니다.</p>
                    </div>    
                    <NavLink to="" className="qa-btn">문의하기</NavLink>       
                </div>
            </div>
        </div>
  );
};

export default ContactusForm;
