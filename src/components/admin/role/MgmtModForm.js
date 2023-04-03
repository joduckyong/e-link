import React from 'react';

const MgmtModForm = () => {
  return (
    <div className="a-content a01">
      <h2>상세 관리자 정보</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <button className="btn btn-white btn-120">취소</button>
          <button className="btn btn-blue btn-120">수정</button>
        </div>
        <div className="ad-in">
          <div className="adinfor-area">
            <div className="ad-tit">
              <div className="s-tit mt0">상태</div>
              <div className="radio">
                <label for="active">
                  <input type="radio" id="active" name="dist" checked />
                  <span className="rdimg"></span>활성화
                </label>
                <label for="inactive">
                  <input type="radio" id="inactive" name="dist" />
                  <span className="rdimg"></span>비활성화
                </label>
              </div>
              <div className="s-tit">아이디</div>
              <input type="text" className="write-input" value="super_admin" disabled />
              <div className="s-tit">이름</div>
              <input type="text" className="write-input" value="이지원" />
              <div className="s-tit">비밀번호</div>
              <input type="password" className="write-input" value="sdfsdfsdfsdf" />
              <div className="s-tit">비밀번호 확인</div>
              <input type="password" className="write-input" value="sdfsdfsdfsdf" />
            </div>
          </div>
          <div className="adinfor-area">
            <div className="ad-tit">
              <div className="s-tit mt0">권한</div>
              <div className="radio-wp">
                <p>메인페이지 관리</p>
                <div className="radio">
                  <label for="permit1">
                    <input type="radio" id="permit1" name="dist1" checked />
                    <span className="rdimg"></span>허용
                  </label>
                  <label for="nopermit1">
                    <input type="radio" id="nopermit1" name="dist1" />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
              <div className="radio-wp">
                <p>홍보센터 관리</p>
                <div className="radio">
                  <label for="permit2">
                    <input type="radio" id="permit2" name="dist2" checked />
                    <span className="rdimg"></span>허용
                  </label>
                  <label for="nopermit2">
                    <input type="radio" id="nopermit2" name="dist2" />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
              <div className="radio-wp">
                <p>Contact Us 관리</p>
                <div className="radio">
                  <label for="permit3">
                    <input type="radio" id="permit3" name="dist3" checked />
                    <span className="rdimg"></span>허용
                  </label>
                  <label for="nopermit3">
                    <input type="radio" id="nopermit3" name="dist3" />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
              <div className="radio-wp">
                <p>관리자권한 관리</p>
                <div className="radio">
                  <label for="permit4">
                    <input type="radio" id="permit4" name="dist4" checked />
                    <span className="rdimg"></span>허용
                  </label>
                  <label for="nopermit4">
                    <input type="radio" id="nopermit4" name="dist4" />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
              <div className="radio-wp">
                <p>투자정보 관리</p>
                <div className="radio">
                  <label for="permit5">
                    <input type="radio" id="permit5" name="dist5" checked />
                    <span className="rdimg"></span>허용
                  </label>
                  <label for="nopermit5">
                    <input type="radio" id="nopermit5" name="dist5" />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
              <div className="radio-wp">
                <p>채용정보 관리</p>
                <div className="radio">
                  <label for="permit6">
                    <input type="radio" id="permit6" name="dist6" checked />
                    <span className="rdimg"></span>허용
                  </label>
                  <label for="nopermit6">
                    <input type="radio" id="nopermit6" name="dist6" />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
              <div className="radio-wp">
                <p>EV충전소 관리</p>
                <div className="radio">
                  <label for="permit7">
                    <input type="radio" id="permit7" name="dist7" checked />
                    <span className="rdimg"></span>허용
                  </label>
                  <label for="nopermit7">
                    <input type="radio" id="nopermit7" name="dist7" />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MgmtModForm;
