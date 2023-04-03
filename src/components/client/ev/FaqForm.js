import React from 'react';

const FaqForm = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <div className="costomer-wp">
          <h1>고객센터</h1>
          <ul className="link-wp">
            <li>
              <a href="./notice.html">공지사항</a>
            </li>
            <li className="active">
              <a href="./faq.html">FAQ</a>
            </li>
            <li>
              <a href="./inquiry.html">문의하기</a>
            </li>
            <li>
              <a href="">고장신고</a>
            </li>
          </ul>
          <div className="list-wp faq-list-wp">
            <div className="swiper faq-nav">
              <div className="swiper-wrapper">
                <div className="swiper-slide active">
                  <a href="">TOP 10</a>
                </div>
                <div className="swiper-slide">
                  <a href="">회원가입/App이용</a>
                </div>
                <div className="swiper-slide">
                  <a href="">충전소 이용</a>
                </div>
                <div className="swiper-slide">
                  <a href="">OOOO 서비스</a>
                </div>
                <div className="swiper-slide">
                  <a href="">요금/결제</a>
                </div>
                <div className="swiper-slide">
                  <a href="">고장신고</a>
                </div>
              </div>
            </div>
            <ol className="list faq-list">
              <li className="active">
                <div className="qa q">
                  <div className="cir">Q</div>
                  <p className="txt">
                    <span>[회원가입/App 이용]</span>&nbsp; 회원가입은 어떻게 하나요?
                  </p>
                </div>
                <div className="qa a">
                  <div className="cir">A</div>
                  <p className="txt">
                    ㅇㅇㅇㅇㅇ의 모든 서비스를 회원으로 이용하기 위해서는, ㅇㅇㅇㅇㅇ 애플리케이션을 다운로드하여 앱 상의 안내에 따라 회원가입을
                    진행하시기 바랍니다. 애플리케이션을 통한 회원가입 외의 다른 가입 절차를 별도로 제공해 드리지 않고 있습니다.
                  </p>
                </div>
              </li>
              <li>
                <div className="qa q">
                  <div className="cir">Q</div>
                  <p className="txt">
                    <span>[충전소 이용]</span>&nbsp; 회원가입은 어떻게 하나요?
                  </p>
                </div>
                <div className="qa a" style="display:none;">
                  <div className="cir">A</div>
                  <p className="txt">
                    ㅇㅇㅇㅇㅇ의 모든 서비스를 회원으로 이용하기 위해서는, ㅇㅇㅇㅇㅇ 애플리케이션을 다운로드하여 앱 상의 안내에 따라 회원가입을
                    진행하시기 바랍니다. 애플리케이션을 통한 회원가입 외의 다른 가입 절차를 별도로 제공해 드리지 않고 있습니다.
                  </p>
                </div>
              </li>
              <li>
                <div className="qa q">
                  <div className="cir">Q</div>
                  <p className="txt">
                    <span>[요금/결제]</span>&nbsp; 회원가입은 어떻게 하나요?
                  </p>
                </div>
                <div className="qa a" style="display:none;">
                  <div className="cir">A</div>
                  <p className="txt">
                    ㅇㅇㅇㅇㅇ의 모든 서비스를 회원으로 이용하기 위해서는, ㅇㅇㅇㅇㅇ 애플리케이션을 다운로드하여 앱 상의 안내에 따라 회원가입을
                    진행하시기 바랍니다. 애플리케이션을 통한 회원가입 외의 다른 가입 절차를 별도로 제공해 드리지 않고 있습니다.
                  </p>
                </div>
              </li>
              <li>
                <div className="qa q">
                  <div className="cir">Q</div>
                  <p className="txt">
                    <span>[고장신고]</span>&nbsp; 회원가입은 어떻게 하나요?
                  </p>
                </div>
                <div className="qa a" style="display:none;">
                  <div className="cir">A</div>
                  <p className="txt">
                    ㅇㅇㅇㅇㅇ의 모든 서비스를 회원으로 이용하기 위해서는, ㅇㅇㅇㅇㅇ 애플리케이션을 다운로드하여 앱 상의 안내에 따라 회원가입을
                    진행하시기 바랍니다. 애플리케이션을 통한 회원가입 외의 다른 가입 절차를 별도로 제공해 드리지 않고 있습니다.
                  </p>
                </div>
              </li>
              <li>
                <div className="qa q">
                  <div className="cir">Q</div>
                  <p className="txt">
                    <span>[회원가입/App 이용]</span> 회원가입은 어떻게 하나요?
                  </p>
                </div>
                <div className="qa a" style="display:none;">
                  <div className="cir">A</div>
                  <p className="txt">
                    ㅇㅇㅇㅇㅇ의 모든 서비스를 회원으로 이용하기 위해서는, ㅇㅇㅇㅇㅇ 애플리케이션을 다운로드하여 앱 상의 안내에 따라 회원가입을
                    진행하시기 바랍니다. 애플리케이션을 통한 회원가입 외의 다른 가입 절차를 별도로 제공해 드리지 않고 있습니다.
                  </p>
                </div>
              </li>
            </ol>
            <ol className="page-wp">
              <li className="prev">
                <a href="">
                  <img src="/img/ev/ev_page_arrow.png" alt="이전" />
                </a>
              </li>
              <li className="active">
                <a href="">1</a>
              </li>
              <li>
                <a href="">2</a>
              </li>
              <li>
                <a href="">3</a>
              </li>
              <li className="next">
                <a href="">
                  <img src="/img/ev/ev_page_arrow.png" alt="다음" />
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqForm;
