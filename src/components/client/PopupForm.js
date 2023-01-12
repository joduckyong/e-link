import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientPopupInfo } from 'store/popupReducer';
import { useCookies } from 'react-cookie';
import ViewImage from 'components/common/ViewImage';

const PopupForm = () => {
  const { id } = useParams();

  const [popupCookies, setPopupCookies] = useCookies();
  const dispatch = useDispatch();
  const popupInfo = useSelector((state) => state.popupReducer.dataInfo);
  const fileList = useSelector((state) => state.popupReducer.files);
  const thumbnailList = fileList.filter((file) => file.fileType === '1'); //썸네일
  const realImageNm = thumbnailList.length > 0 ? thumbnailList[0].fileNm.replace('s_', '') : '';

  useEffect(() => {
    dispatch(selectClientPopupInfo(id));
  }, [dispatch, id]);

  const getExpiredDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const dayPopupClose = (id) => {
    const expires = getExpiredDate(1);
    setPopupCookies('POPUP_' + id, true, { path: '/', expires });
    window.close();
  };

  return (
    <div className="main_pop">
      <a className="img_area" rel="noreferrer" href={popupInfo.popupLink} target="_blank">
        <ViewImage fileNm={realImageNm} />
      </a>
      <div className="text">
        <button onClick={() => dayPopupClose(popupInfo.popupId)}>{popupInfo.popupClose1}</button>
        <button onClick={() => window.close()}>{popupInfo.popupClose2}</button>
      </div>
    </div>
  );
};

export default PopupForm;
