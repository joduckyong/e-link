import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const AnnounceListForm = () => {
  return (
    <div className="a-content">
      <h2>
        공고관리<span>총 5건</span>
      </h2>
      <div className="ban-list p0">
        <div className="search-box">
          <div className="search-input">
            <input type="text" placeholder="검색어를 입력해주세요." />
            <button className="btn-primary"></button>
          </div>
        </div>
        <div className="btn-area position">
          <button className="btn btn-red btn-120">선택삭제</button>
          <Link to="/admin/investInfo/announceAdd">
            <button className="btn btn-blue btn-120">글쓰기</button>
          </Link>
        </div>
        <div className="table-wrap">
          <table>
            <colgroup>
              <col width="10%" />
              <col width="6%" />
              <col width="50%" />
              <col width="14%" />
              <col width="20%" />
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
                <th>제목</th>
                <th>작성일</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="e01">
                    <input type="checkbox" id="e01" />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <td>5</td>
                <td className="tal pl40">
                  <Link to="/admin/investInfo/announceInfo">
                    제 38기 결산공고
                  </Link>
                </td>
                <td>2023-11-14</td>
                <td>
                  <Link to="/admin/investInfo/announceMod">
                    <button className="btn btn-white btn-70">수정</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="e01">
                    <input type="checkbox" id="e01" />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <td>5</td>
                <td className="tal pl40">제 38기 결산공고</td>
                <td>2023-11-14</td>
                <td>
                  <button
                    className="btn btn-white btn-70"
                    onclick="location.href='a02-2-view.html';"
                  >
                    수정
                  </button>
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

export default AnnounceListForm;
