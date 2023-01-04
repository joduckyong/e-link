import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopupInfo } from 'store/popupReducer';
import ViewImage from 'components/common/ViewImage';

const PopUpInfoForm = () => {
  const { id } = useParams();
  const [thumbnailName, setThumbnailName] = useState('선택된 파일 없음');
  const dispatch = useDispatch();
  const popupInfo = useSelector((state) => state.popupReducer.dataInfo);
  const fileList = useSelector((state) => state.popupReducer.files);

  useEffect(() => {
    dispatch(selectPopupInfo(id));
  }, [dispatch, id]);

  useEffect(() => {
    for (let file of fileList) {
      setThumbnailName(file.fileNm);
    }
  }, [fileList]);

  return (
    <div className="a-content a01">
      <h2>팝업 관리</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <NavLink to="/admin/main/popup">
            <button className="btn btn-white btn-120">목록</button>
          </NavLink>
        </div>
        <div className="pop-in">
          <div className="popimg-area">
            <div className="s-tit"></div>
            <div className="img-in">
              <div className="img-position">
                <img src="" alt="" id="img" />
              </div>
              <label htmlFor="idvf">
                <span>
                  <i>
                    <ViewImage fileNm={thumbnailName} width={235} height={250} />
                  </i>
                </span>
              </label>
            </div>
            <p className="notice">※ 권장 : 가로 440px * 세로 490px</p>
          </div>
          <div className="popinfor-area">
            <div className="pop-tit">
              <div className="s-tit mt0">관리 타이틀</div>
              <input type="text" placeholder="파일명을 입력해주세요." className="write-input" value={popupInfo.popupTitle} disabled />
              <div className="s-tit">팝업 링크</div>
              <input type="text" placeholder="파일명을 입력해주세요." className="write-input" value={popupInfo.popupLink} disabled />
            </div>
            <div className="pop-close">
              <div className="s-tit">닫기 영역</div>
              <input type="text" placeholder="오늘 하루 이 창을 열지 않습니다." className="input01" value={popupInfo.popupClose1} disabled />
              <input type="text" placeholder="닫기" className="input02" value={popupInfo.popupClose2} disabled />
            </div>
            <div className="pop-where">
              <div className="s-tit">팝업 위치</div>
              <div className="input-wrap">
                <div>
                  <span>가로</span>
                  <input type="text" value={popupInfo.popupHeight} disabled />
                </div>
                <div>
                  <span>세로</span>
                  <input type="text" value={popupInfo.popupWidth} disabled />
                </div>
              </div>
            </div>
            <div className="pop-show">
              <div className="s-tit">팝업 게시기간</div>
              <span>
                <input type="text" value={popupInfo.popupStartdate} disabled />
              </span>
              -
              <span>
                <input type="text" value={popupInfo.popupEnddate} disabled />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpInfoForm;
