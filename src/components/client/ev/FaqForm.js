import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectEv } from 'store/EvReducer';

const FaqForm = () => {

  const dispatch = useDispatch();
  const faqList = useSelector((state) => state.EvReducer.data);
  const [faqActive, setFaqActive] = useState({});

  useEffect(() => {
    const url = '/api/m-service-mobile/meta/getFaqs';
    const newList = { url: url };
    dispatch(selectEv(newList));
  }, [dispatch]);

  return (
    <>
      <section className="ev-sub-sect">
        <div className="costomer-wp">
          <h1>고객센터</h1>
          <ul className="link-wp">
            <li>
            <Link to="/ev/notice">공지사항</Link>
            </li>
            <li className="active">
            <Link to="/ev/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/ev/inquiry">문의하기</Link>
            </li>
            <li>
              <Link to="/ev/breakdown">고장신고</Link>
            </li>
          </ul>
          <div className="list-wp faq-list-wp">
            {/* <div className="swiper faq-nav">
              <div className="swiper-wrapper">
                <div className="swiper-slide active" style={{ marginRight:"16px" }}>
                  <Link to="">TOP 10</Link>
                </div>
                <div className="swiper-slide" style={{ marginRight:"16px" }}>
                  <Link to="">회원가입/App이용</Link>
                </div>
                <div className="swiper-slide" style={{ marginRight:"16px" }}>
                  <Link to="">충전소 이용</Link>
                </div>
                <div className="swiper-slide" style={{ marginRight:"16px" }}>
                  <Link to="">OOOO 서비스</Link>
                </div>
                <div className="swiper-slide" style={{ marginRight:"16px" }}>
                  <Link to="">요금/결제</Link>
                </div>
                <div className="swiper-slide" style={{ marginRight:"16px" }}>
                  <Link to="">고장신고</Link>
                </div>
              </div>
            </div> */}
            <ol className="list faq-list">
            {faqList.map((list, index) => (
                <li 
                  className={faqActive[list.faqNo] ? 'active' : ''} 
                  key={index} 
                  onClick={() => setFaqActive({[list.faqNo]:!faqActive[list.faqNo]})}
                >
                  <div className="qa q">
                    <div className="cir">Q</div>
                    <p className="txt">
                      <span></span>&nbsp; {list.ttl}
                    </p>
                  </div>
                  <div className="qa a" style={faqActive[list.faqNo] ? { display: 'flex' } : { display: 'none' }}>
                    <div className="cir">A</div>
                    <p className="txt">
                      {list.ans}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqForm;
