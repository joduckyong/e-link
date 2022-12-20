import React from 'react';
import { NavLink } from 'react-router-dom';

const PopUpListForm = () => {
  return (
    <div className="a-content a01">
      <h2>
        팝업 관리<span>총 5건</span>
      </h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <button className="btn btn-red btn-120">선택삭제</button>
          <button className="btn btn-blue btn-120">팝업생성</button>
        </div>
        <div className="table-wrap">
          <table>
            <colgroup>
              <col width="10%" />
              <col width="10%" />
              <col width="25%" />
              <col width="20%" />
              <col width="25%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <label htmlFor="allchk">
                    <input type="checkbox" id="allchk" />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <th>번호</th>
                <th>팝업제목</th>
                <th>미리보기</th>
                <th>게시기간</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="p01">
                    <input type="checkbox" id="p01" />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <td>1</td>
                <td>
                  <span className="pop-name">어린이날 행사(pc).jpg</span>
                </td>
                <td>
                  <div className="shape-90"></div>
                </td>
                <td>
                  <span className="pop-date">2022-08-01 ~ 2022-08-31</span>
                </td>
                <td>
                  <button className="btn">수정</button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="p01">
                    <input type="checkbox" id="p01" />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <td>2</td>
                <td>
                  <span className="pop-name">어린이날 행사(pc).jpg</span>
                </td>
                <td>
                  <div className="shape-90"></div>
                </td>
                <td>
                  <span className="pop-date">2022-08-01 ~ 2022-08-31</span>
                </td>
                <td>
                  <button className="btn">수정</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="paging">
          <NavLink to="" className="prev-btn">
            <i></i>
            <span className="text_blind">이전</span>
          </NavLink>
          <ul>
            <li className="current">
              <NavLink to="">1</NavLink>
            </li>
            <li>
              <NavLink to="">2</NavLink>
            </li>
            <li>
              <NavLink to="">3</NavLink>
            </li>
            <li>
              <NavLink to="">4</NavLink>
            </li>
            <li>
              <NavLink to="">5</NavLink>
            </li>
          </ul>
          <NavLink to="" className="next-btn">
            <i></i>
            <span className="text_blind">다음</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PopUpListForm;
