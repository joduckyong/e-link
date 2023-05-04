import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactUsInfo } from 'store/contactUsReducer';
import { downloadFile } from 'common/download';

const ContactUsInfoEnForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const contactNm = useSelector((state) => state.contactUsReducer.dataInfo.contactNm);
  const contactTitle = useSelector((state) => state.contactUsReducer.dataInfo.contactTitle);
  const contactPhone = useSelector((state) => state.contactUsReducer.dataInfo.contactPhone);
  const contactContents = useSelector((state) => state.contactUsReducer.dataInfo.contactContents);
  const contactAgree = useSelector((state) => state.contactUsReducer.dataInfo.contactAgree);
  const attachList = useSelector((state) => state.contactUsReducer.files);

  useEffect(() => {
    dispatch(selectContactUsInfo(id));
  }, [dispatch, id]);

  return (
    <div className="a-content">
      <ul className="sub-tab">
        <li>
          <Link to="">국문</Link>
        </li>
        <li className="active">
          <Link to="">영문</Link>
        </li>
      </ul>
      <h2>Contact Us</h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <Link to="/admin/customerService/contactUsEn">
            <button className="btn btn-white btn-120">목록</button>
          </Link>
        </div>
        <div className="view-detail bg-white">
          <ul>
            <li>
              <span className="tit">이름</span>
              <div className="text">{contactNm}</div>
            </li>
            <li>
              <span className="tit">연락처</span>
              <div className="text">{contactPhone}</div>
            </li>
            <li>
              <span className="tit">제목</span>
              <div className="text">{contactTitle}</div>
            </li>
            <li>
              <span className="tit">내용</span>
              <div className="text">{contactContents}</div>
            </li>
            <li>
              <span className="tit"></span>
              <div className="text"></div>
            </li>
          </ul>
        </div>
        {attachList.length > 0 && (
          <div className="view-detail bg-white mt10">
            <ul>
              {attachList.map((list, index) => (
                <li>
                  <span className="tit">첨부파일</span>
                  <div className="text">
                    <span>{list.fileOriginNm}</span>
                    <button className="btn-down" onClick={() => downloadFile(list.fileNm, list.fileOriginNm)}>
                      <img src="/img/admin/ico-download.svg" alt="" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="view-detail bg-white mt10">
          <ul>
            <li>
              <span className="tit">약관동의</span>
              <div className="text">
                <label htmlFor="allagree">
                  <input type="checkbox" id="allagree" checked={contactAgree === 'Y' && 'checked'} readOnly />
                  <span className="chkimg"></span>
                </label>
                개인정보 수집 및 이용에 동의합니다.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUsInfoEnForm;
