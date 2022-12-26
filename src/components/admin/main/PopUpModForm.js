import React from 'react';
import { NavLink } from 'react-router-dom';

const PopUpAddForm = () => {
  return (
    <div className="a-content a01">
      <h2>팝업 등록</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <button className="btn btn-white btn-120">취소</button>
          <button className="btn btn-blue btn-120">수정</button>
        </div>
        <div className="pop-in">
          <div className="popimg-area">
            <div className="s-tit">팝업 이미지</div>
            <div className="img-in">
              <div className="img-position">
                <img src="" alt="" id="img" />
              </div>
              <label htmlFor="idvf">
                <span>
                  <i>
                    <img src="/img/admin/ico-upload.svg" alt="" />
                  </i>
                  이미지등록
                </span>
                <input type="file" id="idvf" name="u_file" accept="image/*" />
              </label>
            </div>
            <p className="notice">※ 권장 : 가로 440px * 세로 490px</p>
          </div>
          <div className="popinfor-area">
            <div className="pop-tit">
              <div className="s-tit mt0">관리 타이틀</div>
              <input type="text" placeholder="파일명을 입력해주세요." className="write-input" />
              <div className="s-tit">팝업 링크</div>
              <input type="text" placeholder="파일명을 입력해주세요." className="write-input" />
            </div>
            <div className="pop-close">
              <div className="s-tit">닫기 영역</div>
              <input type="text" placeholder="오늘 하루 이 창을 열지 않습니다." className="input01" />
              <input type="text" placeholder="닫기" className="input02" />
            </div>
            <div className="pop-where">
              <div className="s-tit">팝업 위치</div>
              <div className="input-wrap">
                <div>
                  <span>가로</span>
                  <input type="text" />
                </div>
                <div>
                  <span>세로</span>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="pop-show">
              <div className="s-tit">팝업 게시기간</div>
              <span>
                <input type="text" />
                <NavLink to="">
                  <i>
                    <img src="/img/admin/ico-calendar.svg" alt="" />
                  </i>
                </NavLink>
              </span>
              -
              <span>
                <input type="text" />
                <NavLink to="">
                  <i>
                    <img src="/img/admin/ico-calendar.svg" alt="" />
                  </i>
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpAddForm;
