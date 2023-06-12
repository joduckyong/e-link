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

const BreakdownInfoForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const breakdownList = useSelector((state) => state.EvReducer.data);

  if(breakdownList.length === 0){  //새로고침 시 목록 페이지 이동
    window.location.href = '/ev/breakdown';
  }

  return (
    <>
      <section className="ev-sub-sect">
        <div className="view-wp">
          <div className="ttl-wp">
            <h2>고장신고 답변</h2>
            <h1></h1>
            <div className="info">
              <p>
                관리자<span>|</span>
              </p>
              <p>{changeFormat(breakdownList[id].uptDttm, 'yyyy-MM-DD') || ''}</p>
            </div>
          </div>
          <div className="cont-wp" dangerouslySetInnerHTML={{ __html: breakdownList[id].reqAns }}>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreakdownInfoForm;
