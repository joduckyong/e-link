import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

export function changeFormat(date, format) {
  //moment 변환을 함수로 미리 빼 두어서 사용.
  if (moment(date).isValid()) {
    return moment(date).format(format);
  } else {
    return null;
  }
}

const InquiryInfoForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const inquiryList = useSelector((state) => state.EvReducer.data);

  if(inquiryList.length === 0){  //새로고침 시 목록 페이지 이동
    window.location.href = '/ev/inquiry';
  }

  return (
    <>
      <section className="ev-sub-sect">
        <div className="view-wp">
          <div className="ttl-wp">
            <h2>문의하기 답변</h2>
            <h1></h1>
            <div className="info">
              <p>
                관리자<span>|</span>
              </p>
              <p>{changeFormat(inquiryList[id].uptDttm, 'yyyy-MM-DD') || ''}</p>
            </div>
            {/* <div className="modify-wp">
              <button className="btn">
                <img src="/img/ev/ev_view_btn.png" alt="" />
              </button>
              <div className="bub" style={{display:'none'}}>
                <Link className="modify" to="./inquiry_write.html">
                  <img src="/img/ev/ev_view_modify.png" alt="" />
                  수정
                </Link>
                <Link className="modify" to="">
                  <img src="/img/ev/ev_view_delete.png" alt="" />
                  삭제
                </Link>
              </div>
            </div> */}
          </div>
          <div className="cont-wp" dangerouslySetInnerHTML={{ __html: inquiryList[id].qustAns }}>
          </div>
          <div className="nav-wp">
          <Link className="arrow prev">
              {/* <img src="/img/ev/ev_arrow_list.png" alt="화살표 왼쪽" />
              <span>이전글</span> */}
            </Link>
            <Link className="list" to="/ev/inquiry">
              목록
            </Link>
            <Link className="arrow next">
              {/* <span>다음글</span>
              <img src="/img/ev/ev_arrow_list.png" alt="화살표 오른쪽" /> */}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InquiryInfoForm;
