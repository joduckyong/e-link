import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientPopupInfo } from 'store/popupReducer';
import { useCookies } from 'react-cookie';
import ViewImage from 'components/common/ViewImage';

const PopupForm = () => {
  const { id } = useParams();
  const [thumbnailName, setThumbnailName] = useState('선택된 파일 없음');
  const [popupCookies, setPopupCookies] = useCookies();
  const dispatch = useDispatch();
  const popupInfo = useSelector((state) => state.popupReducer.dataInfo);
  const fileList = useSelector((state) => state.popupReducer.files);

  useEffect(() => {
    dispatch(selectClientPopupInfo(id));
  }, [dispatch, id]);

  useEffect(() => {
    for (let file of fileList) {
      setThumbnailName(file.fileNm);
    }
  }, [fileList]);

  const getExpiredDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const dayPopupClose = (id) => {
    const expires = getExpiredDate(1);
    setPopupCookies('POPUP_' + id, true, { path: '/', expires });
    // window.close();
  };

  return (
    <div className="main_pop">
      <a className="img_area" rel="noreferrer" href={popupInfo.popupLink} target="_blank">
        <ViewImage fileNm={thumbnailName} width={440} height={490} />
      </a>
      <div className="text">
        <button onClick={() => dayPopupClose(popupInfo.popupId)}>{popupInfo.popupClose1}</button>
        <button onClick={() => window.close()}>{popupInfo.popupClose2}</button>
      </div>
    </div>
  );
};

export default PopupForm;
