import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopupInfo } from 'store/popupReducer';

const PopUpAddForm = () => {
  const [popupTitle, setPopupTitle] = useState('');
  const [popupLink, setPopupLink] = useState('');
  const [popupClose1, setPopupClose1] = useState('');
  const [popupClose2, setPopupClose2] = useState('');
  const [popupHeight, setPopupHeight] = useState('');
  const [popupWidth, setPopupWidth] = useState('');
  const [popupStartdate, setPopupStartdate] = useState('');
  const [popupEnddate, setPopupEnddate] = useState('');

  const { id } = useParams();
  const dispatch = useDispatch();
  const popupInfo = useSelector((state) => state.popupReducer);

  useEffect(() => {
    dispatch(selectPopupInfo(id));
  }, [dispatch, id]);

  useEffect(() => {
    popupInfo.forEach((info) => {
      setPopupTitle(info.popupTitle);
      setPopupLink(info.popupLink);
      setPopupClose1(info.popupClose1);
      setPopupClose2(info.popupClose2);
      setPopupHeight(info.popupHeight);
      setPopupWidth(info.popupWidth);
      setPopupStartdate(info.popupStartdate);
      setPopupEnddate(info.popupEnddate);
    });
  }, [popupInfo]);

  return (
    <div className="a-content a01">
      <h2>팝업 등록</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <NavLink to="/admin/main/popup">
            <button className="btn btn-white btn-120">목록</button>
          </NavLink>
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
              <input type="text" placeholder="파일명을 입력해주세요." className="write-input" value={popupTitle} disabled />
              <div className="s-tit">팝업 링크</div>
              <input type="text" placeholder="파일명을 입력해주세요." className="write-input" value={popupLink} disabled />
            </div>
            <div className="pop-close">
              <div className="s-tit">닫기 영역</div>
              <input type="text" placeholder="오늘 하루 이 창을 열지 않습니다." className="input01" value={popupClose1} disabled />
              <input type="text" placeholder="닫기" className="input02" value={popupClose2} disabled />
            </div>
            <div className="pop-where">
              <div className="s-tit">팝업 위치</div>
              <div className="input-wrap">
                <div>
                  <span>가로</span>
                  <input type="text" value={popupHeight} disabled />
                </div>
                <div>
                  <span>세로</span>
                  <input type="text" value={popupWidth} disabled />
                </div>
              </div>
            </div>
            <div className="pop-show">
              <div className="s-tit">팝업 게시기간</div>
              <span>
                <input type="text" value={popupStartdate} disabled />
              </span>
              -
              <span>
                <input type="text" value={popupEnddate} disabled />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpAddForm;
