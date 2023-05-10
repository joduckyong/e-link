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

const NoticeInfoForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const noticeList = useSelector((state) => state.EvReducer.data);

  if(noticeList.length === 0){  //새로고침 시 목록 페이지 이동
    window.location.href = '/ev/notice';
  }

  return (
    <>
      <section className="ev-sub-sect">
        <div className="view-wp">
          <div className="ttl-wp">
            <h2>공지사항</h2>
            <h1>{noticeList[id].ttl}</h1>
            <p>{changeFormat(noticeList[id].dttm, 'yyyy-MM-DD') || ''}</p>
          </div>
          <div className="cont-wp" dangerouslySetInnerHTML={{ __html: noticeList[id].cont }}>
          </div>
          <div className="nav-wp">
            <Link className="arrow prev" to={ id < noticeList.length-1 ? `/ev/noticeInfo/${Number(id)+1}` : `/ev/noticeInfo/${id}` }>
              <img src="/img/ev/ev_arrow_list.png" alt="화살표 왼쪽" />
              <span>이전글</span>
            </Link>
            <Link className="list" to="/ev/notice">
              목록
            </Link>
            <Link className="arrow next" to={ id > 0 ? `/ev/noticeInfo/${Number(id)-1}` : `/ev/noticeInfo/${id}` }>
              <span>다음글</span>
              <img src="/img/ev/ev_arrow_list.png" alt="화살표 오른쪽" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoticeInfoForm;
