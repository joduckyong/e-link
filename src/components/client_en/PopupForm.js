import React, { useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import ViewImage from 'components/common/ViewImage';
import classNames from 'classnames';

const PopupForm = ({ popupLink, fileNm, popupId, popupHeight, popupWidth, popupClose1, popupClose2 }) => {
  const [popupCookies, setPopupCookies] = useCookies();

  const displayRef = useRef();

  const getExpiredDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const dayModalClose = (id) => {
    const expires = getExpiredDate(1);
    setPopupCookies('POPUP_' + id, id, { path: '/', expires });
    displayRef.current.style = 'display:none';
  };

  const modalClose = (id) => {
    displayRef.current.style = 'display:none';
  };

  return (
    <div className={classNames('main_pop', popupId)} style={{ top: `${popupHeight}px`, left: `${popupWidth}px` }} ref={displayRef}>
      <a className="img_area" rel="noreferrer" href={popupLink} target="_blank">
        <ViewImage fileNm={fileNm !== '' ? fileNm.replace('s_', '') : ''} />
      </a>
      <div className="text">
        <button onClick={() => dayModalClose(popupId)}>{popupClose1}</button>
        <button onClick={() => modalClose()}>{popupClose2}</button>
      </div>
    </div>
  );
};

export default PopupForm;
