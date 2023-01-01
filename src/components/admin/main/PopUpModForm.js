import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopupInfo, updatePopup } from 'store/popupReducer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import moment from 'moment';

export function changeFormat(date, format) {
  //moment 변환을 함수로 미리 빼 두어서 사용.
  if (moment(date).isValid()) {
    return moment(date).format(format);
  } else {
    return null;
  }
}

const PopUpAddForm = () => {
  const [popupTitle, setPopupTitle] = useState('');
  const [popupLink, setPopupLink] = useState('');
  const [popupClose1, setPopupClose1] = useState('');
  const [popupClose2, setPopupClose2] = useState('');
  const [popupHeight, setPopupHeight] = useState('');
  const [popupWidth, setPopupWidth] = useState('');
  const [popupStartdate, setPopupStartdate] = useState(new Date());
  const [popupEnddate, setPopupEnddate] = useState(new Date());

  const { id } = useParams();
  const dispatch = useDispatch();
  const popupInfo = useSelector((state) => state.popupReducer);

  useEffect(() => {
    dispatch(selectPopupInfo(id));
  }, [dispatch, id]);

  useEffect(() => {
    setPopupTitle(popupInfo.dataInfo.popupTitle);
    setPopupLink(popupInfo.dataInfo.popupLink);
    setPopupClose1(popupInfo.dataInfo.popupClose1);
    setPopupClose2(popupInfo.dataInfo.popupClose2);
    setPopupHeight(popupInfo.dataInfo.popupHeight);
    setPopupWidth(popupInfo.dataInfo.popupWidth);
    if (popupInfo.dataInfo.popupStartdate !== undefined && typeof popupInfo.dataInfo.popupStartdate !== 'undefined') {
      setPopupStartdate(new Date(popupInfo.dataInfo.popupStartdate));
    }
    if (popupInfo.dataInfo.popupEnddate !== undefined && typeof popupInfo.dataInfo.popupEnddate !== 'undefined') {
      setPopupEnddate(new Date(popupInfo.dataInfo.popupEnddate));
    }
  }, [popupInfo]);

  const onEdit = (e) => {
    e.preventDefault();

    if (popupTitle === '') {
      alert('관리 타이틀를 입력하세요');
      return;
    }
    if (popupLink === '') {
      alert('팝업 링크를 입력하세요');
      return;
    }
    if (popupClose1 === '') {
      alert('닫기영역을 입력하세요');
      return;
    }
    if (popupClose2 === '') {
      alert('닫기영역을 입력하세요');
      return;
    }
    if (popupHeight === '') {
      alert('팝업위치 가로를 입력하세요');
      return;
    }
    if (popupWidth === '') {
      alert('팝업위치 세로를 입력하세요');
      return;
    }
    if (popupStartdate === '') {
      alert('팝업 게시기간을 입력하세요');
      return;
    }
    if (popupEnddate === '') {
      alert('팝업 게시기간을 입력하세요');
      return;
    }
    if (window.confirm('수정 하시겠습니까?')) {
      const newList = {
        popupId: id,
        popupTitle: popupTitle,
        popupLink: popupLink,
        popupClose1: popupClose1,
        popupClose2: popupClose2,
        popupHeight: popupHeight,
        popupWidth: popupWidth,
        popupStartdate: changeFormat(popupStartdate, 'yyyy-MM-DD') || '',
        popupEnddate: changeFormat(popupEnddate, 'yyyy-MM-DD') || '',
      };
      dispatch(updatePopup(newList));
      document.location.href = '/admin/main/popup';
    }
  };

  return (
    <div className="a-content a01">
      <h2>팝업 등록</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <NavLink to="/admin/main/popup">
            <button className="btn btn-white btn-120">취소</button>
          </NavLink>
          <button className="btn btn-blue btn-120" onClick={onEdit}>
            수정
          </button>
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
              <input
                type="text"
                placeholder="파일명을 입력해주세요."
                className="write-input"
                name="popupTitle"
                onChange={(e) => setPopupTitle(e.target.value)}
                value={popupTitle}
              />
              <div className="s-tit">팝업 링크</div>
              <input
                type="text"
                placeholder="파일명을 입력해주세요."
                className="write-input"
                name="popupLink"
                onChange={(e) => setPopupLink(e.target.value)}
                value={popupLink}
              />
            </div>
            <div className="pop-close">
              <div className="s-tit">닫기 영역</div>
              <input
                type="text"
                placeholder="오늘 하루 이 창을 열지 않습니다."
                className="input01"
                name="popupClose1"
                onChange={(e) => setPopupClose1(e.target.value)}
                value={popupClose1}
              />
              <input
                type="text"
                placeholder="닫기"
                className="input02"
                name="popupClose2"
                onChange={(e) => setPopupClose2(e.target.value)}
                value={popupClose2}
              />
            </div>
            <div className="pop-where">
              <div className="s-tit">팝업 위치</div>
              <div className="input-wrap">
                <div>
                  <span>가로</span>
                  <input type="text" name="popupHeight" onChange={(e) => setPopupHeight(e.target.value.replace(/[^0-9]/g, ''))} value={popupHeight} />
                </div>
                <div>
                  <span>세로</span>
                  <input type="text" name="popupWidth" onChange={(e) => setPopupWidth(e.target.value.replace(/[^0-9]/g, ''))} value={popupWidth} />
                </div>
              </div>
            </div>
            <div className="pop-show">
              <div className="s-tit">팝업 게시기간</div>
              <span>
                <DatePicker locale={ko} dateFormat="yyyy-MM-dd" selected={popupStartdate} onChange={(date) => setPopupStartdate(date)} />
              </span>
              -
              <span>
                <DatePicker locale={ko} dateFormat="yyyy-MM-dd" selected={popupEnddate} onChange={(date) => setPopupEnddate(date)} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpAddForm;
