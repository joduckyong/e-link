import React from 'react';
import { NavLink } from 'react-router-dom';

const OfficialNoticeListForm = () => {
  return (
    <div className="a-content a02">
      <h2>
        공시정보<span>총 21건</span>
      </h2>
      <div className="ban-register p0">
        <h3>전자공고 등록</h3>
        <div className="btn-area">
          <button className="btn btn-gray btn-120">등록</button>
        </div>
        <div className="ban-input">
          <div className="ban-tit">
            <div className="s-tit">제목</div>
            <input type="text" placeholder="제목을 입력해주세요." />
          </div>
          <div className="ban-url">
            <div className="s-tit">Dart URL(링크)</div>
            <input type="text" value="http://" />
          </div>
        </div>
      </div>
      <div className="ban-list p0">
        <h3 className="mt70">전체 공시정보 리스트</h3>
        <div className="btn-area">
          <button className="btn btn-red btn-120">선택삭제</button>
        </div>
        <div className="table-wrap">
          <table>
            <colgroup>
              <col width="7%" />
              <col width="7%" />
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
                <th>Dart URL (링크)</th>
                <th>작성일</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr className="editwrite">
                <th>
                  <label htmlFor="e01">
                    <input type="checkbox" id="e01" />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <td>5</td>
                <td>
                  <input type="text" value="분기보고서 (2023.09)" />
                </td>
                <td>
                  <input
                    type="text"
                    value="https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20221114001528"
                  />
                </td>
                <td>2023-11-14</td>
                <td>
                  <button className="btn btn-darkgray btn-70 btn-complete">
                    수정완료
                  </button>
                  <button className="btn btn-white btn-70 btn-cancle">
                    취소
                  </button>
                </td>
              </tr>
              <tr className="readonly">
                <th>
                  <label htmlFor="e01">
                    <input type="checkbox" id="e01" />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <td>4</td>
                <td>분기보고서 (2023.09)</td>
                <td>
                  https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20221114001528
                </td>
                <td>2023-11-14</td>
                <td>
                  <button className="btn btn-white">수정</button>
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

export default OfficialNoticeListForm;
