import React, { useState, useRef, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertPopup } from 'store/popupReducer';
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
  const [popupStartdate, setPopupStartdate] = useState();
  const [popupEnddate, setPopupEnddate] = useState();
  const [thumbnailName, setThumbnailName] = useState();
  // const [fileName, setFileName] = useState();

  const thumbnailRef = useRef();
  // const fileRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCreate = async (e) => {
    e.preventDefault();

    const thumbnailObj = thumbnailRef.current.constructor.name === 'File' && thumbnailRef.current;
    // const fileObj = fileRef.current.constructor.name === 'File' && fileRef.current;

    if (thumbnailObj === false) {
      alert('팝업 이미지를 등록 하세요');
      return;
    }
    // if (fileObj === false) {
    //   alert('팝업 이미지를 등록 하세요');
    //   return;
    // }
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
    if (window.confirm('등록 하시겠습니까?')) {
      const newList = {
        popupId: 'POP',
        popupTitle: popupTitle,
        popupLink: popupLink,
        popupClose1: popupClose1,
        popupClose2: popupClose2,
        popupHeight: popupHeight,
        popupWidth: popupWidth,
        popupStartdate: changeFormat(popupStartdate, 'yyyy-MM-DD') || '',
        popupEnddate: changeFormat(popupEnddate, 'yyyy-MM-DD') || '',
        thumbnail: thumbnailObj,
        // file: fileObj,
      };
      await dispatch(insertPopup(newList));
      return navigate('/admin/main/popup');
    }
  };

  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }
    setThumbnailName(URL.createObjectURL(e.target.files[0]));
    thumbnailRef.current = e.target.files[0];
	document.querySelector('.adminsub .pop-in .img-in span.imgBox').classList.add('active');
	document.querySelector('.adminsub .pop-in .img-in label span').style.color = '#fff';
	document.querySelector('.adminsub .pop-in .img-in label i').style.background = 'url(/img/admin/ico-upload-on.png) center /31px';
  }, []);

  // const onUploadFile = useCallback((e) => {
  //   if (!e.target.files) {
  //     return;
  //   }
  //   setFileName(URL.createObjectURL(e.target.files[0]));
  //   fileRef.current = e.target.files[0];
  // }, []);

  return (
    <div className="a-content a01">
      <h2>팝업 등록</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <NavLink to="/admin/main/popup">
            <button className="btn btn-white btn-120">취소</button>
          </NavLink>
          <button className="btn btn-blue btn-120" onClick={onCreate}>
            등록
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
                  <i></i>
                  이미지등록
                </span>
                <input type="file" accept="image/*" id="idvf" name="u_file" className="file" ref={thumbnailRef} onChange={onUploadImage} />
              </label>
              <span className="upload-name imgBox">
                {thumbnailName !== undefined && <img src={thumbnailName} alt="" style={{ width: '236px', height: '263px', position: 'absolute', top: '0', left: '0' }} />}
              </span>
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
