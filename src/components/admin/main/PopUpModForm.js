import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopupInfo, updatePopup } from 'store/popupReducer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import moment from 'moment';
import ViewImage from 'components/common/ViewImage';

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
  // const [thumbnailName, setThumbnailName] = useState('선택된 파일 없음');
  const [fileName, setFileName] = useState('선택된 파일 없음');
  // const [storedThumbnailName, setStoredThumbnailName] = useState('');
  const [storedFileName, setStoredFileName] = useState('');
  const [storedFileArr, setStoredFileArr] = useState([]);
  const [imgCheck, setImgCheck] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const popupInfo = useSelector((state) => state.popupReducer.dataInfo);
  const fileList = useSelector((state) => state.popupReducer.files);

  // const thumbnailRef = useRef();
  const fileRef = useRef();

  useEffect(() => {
    dispatch(selectPopupInfo(id));
  }, [dispatch, id]);

  useEffect(() => {
    setPopupTitle(popupInfo.popupTitle);
    setPopupLink(popupInfo.popupLink);
    setPopupClose1(popupInfo.popupClose1);
    setPopupClose2(popupInfo.popupClose2);
    setPopupHeight(popupInfo.popupHeight);
    setPopupWidth(popupInfo.popupWidth);
    if (popupInfo.popupStartdate !== undefined && typeof popupInfo.popupStartdate !== 'undefined') {
      setPopupStartdate(new Date(popupInfo.popupStartdate));
    }
    if (popupInfo.popupEnddate !== undefined && typeof popupInfo.popupEnddate !== 'undefined') {
      setPopupEnddate(new Date(popupInfo.popupEnddate));
    }
  }, [popupInfo]);

  useEffect(() => {
    for (let file of fileList) {
      // if (file.fileType === '0') {
      //이미지
      // setThumbnailName(file.fileOriginNm);
      // setStoredThumbnailName(file.fileNm);
      setFileName(file.fileOriginNm);
      setStoredFileName(file.fileNm);
      // }
    }
  }, [fileList]);

  const onEdit = async (e) => {
    e.preventDefault();

    // const thumbnailObj = thumbnailRef.current.constructor.name === 'File' && thumbnailRef.current;
    const fileObj = fileRef.current.constructor.name === 'File' && fileRef.current;

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
        ids: storedFileArr,
        // thumbnail: thumbnailObj,
        file: fileObj,
      };
      await dispatch(updatePopup(newList));
      return navigate('/admin/main/popup');
    }
  };

  // const onUploadImage = useCallback(
  //   (e) => {
  //     if (!e.target.files) {
  //       return;
  //     }

  //     setThumbnailName(URL.createObjectURL(e.target.files[0]));
  //     if (!'blob'.includes(thumbnailName)) {
  //       setImgCheck(true);
  //     }
  //     // setThumbnailName(e.target.files[0].name);
  //     thumbnailRef.current = e.target.files[0];
  //     if (!storedFileArr.includes(storedThumbnailName)) {
  //       setStoredFileArr([...storedFileArr, storedThumbnailName]);
  //     }
  //   },
  //   [storedFileArr, storedThumbnailName],
  // );

  const onUploadFile = useCallback(
    (e) => {
      if (!e.target.files) {
        return;
      }

      setFileName(URL.createObjectURL(e.target.files[0]));
      if (!'blob'.includes(fileName)) {
        setImgCheck(true);
      }

      fileRef.current = e.target.files[0];
      if (!storedFileArr.includes(storedFileName)) {
        setStoredFileArr([...storedFileArr, storedFileName]);
      }
    },
    [storedFileArr, storedFileName],
  );

  return (
    <div className="a-content a01">
      <h2>팝업 수정</h2>
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
                  <input type="file" accept="image/*" id="idvf" name="u_file" className="file" ref={fileRef} onChange={onUploadFile} />
                </span>
              </label>
              {imgCheck ? <img src={fileName} alt="" width={220} height={240} /> : <ViewImage fileNm={storedFileName} />}
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
