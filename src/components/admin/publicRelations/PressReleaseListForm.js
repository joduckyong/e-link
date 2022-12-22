import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const pressReleaseListForm = () => {

    return(
        <div className="a-content">
            <h2>보도자료 관리<span>총 5건</span></h2>
            <div className="ban-list p0">
                <div className="btn-area position">
                    <button className="btn btn-red btn-120">선택삭제</button>
                    <Link to="/admin/publicRelations/pressReleaseAdd">
                        <button className="btn btn-blue btn-120">글쓰기</button>
                    </Link>
                </div>
                <div className="table-wrap">
                    <table>
                        <colgroup>
                            <col width="10%" />
                            <col width="5%" />
                            <col width="15%" />
                            <col width="45%" />
                            <col width="10%" />
                            <col width="15%" />
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
                                <th className="pl40">미리보기</th>
                                <th>제목</th>
                                <th>작성일</th>
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
                                <td className="pl40">
                                    <div className="shape-150"></div>
                                </td>
                                <td className="tal pl40">
                                    <span className="pop-name">하나은행과 저탄소 발전 및 에너지 인프라 사업 공동개발 MOU 체결</span>
                                </td>
                                <td>
                                    <span className="pop-date">2022-08-01</span>
                                </td>
                                <td>
                                    <Link to="/admin/publicRelations/pressReleaseInfo">
                                        <button className="btn">수정</button>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label htmlFor="p01">
                                        <input type="checkbox" id="p01" />
                                        <span className="chkimg"></span>
                                    </label>
                                </th>
                                <td>2</td>
                                <td className="pl40">
                                    <div className="shape-150"></div>
                                </td>
                                <td className="tal pl40">
                                    <span className="pop-name">하나은행과 저탄소 발전 및 에너지 인프라 사업 공동개발 MOU 체결</span>
                                </td>
                                <td>
                                    <span className="pop-date">2022-08-01</span>
                                </td>
                                <td>
                                    <Link to="/admin/publicRelations/pressReleaseInfo">
                                        <button className="btn">수정</button>
                                    </Link>
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
}

export default pressReleaseListForm;