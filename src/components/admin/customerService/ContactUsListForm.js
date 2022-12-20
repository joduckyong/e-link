import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ContactUsListForm = () => {

    return(
        <div className="a-content">
            <h2>Contact Us<span>총 5건</span></h2>
            <div className="ban-list p0">
                <div className="search-box">
                    <select name="" id="">
                        <option value="">이름</option>
                    </select>
                    <div className="search-input">
                        <input type="text" placeholder="검색어를 입력해주세요." />
                        <button className="btn-primary"></button>
                    </div>
                </div>
                <div className="btn-area position">
                    <button className="btn btn-red btn-120">선택삭제</button>
                </div>
                <div className="table-wrap">
                    <table>
                        <colgroup>
                            <col width="7%" />
                            <col width="7%" />
                            <col width="7%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th><label htmlFor="allchk"><input type="checkbox" id="allchk" /><span className="chkimg"></span></label></th>
                                <th>번호</th>
                                <th>이름</th>
                                <th>연락처</th>
                                <th>메일</th>
                                <th>문의제목</th>
                                <th>작성일</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><label htmlFor="p01"><input type="checkbox" id="p01" /><span className="chkimg"></span></label></th>
                                <td>1</td>
                                <td>이지원</td>
                                <td>010-1234-5678</td>
                                <td>hello0404@gmail.com</td>
                                <td className="fb">커넥터 분리 문의드립니다.</td>
                                <td>2022-08-01</td>
                                <td>
                                    <Link to="/admin/customerService/contactUsInfo">
                                        <button className="btn">보기</button>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <th><label htmlFor="p01"><input type="checkbox" id="p01" /><span className="chkimg"></span></label></th>
                                <td>1</td>
                                <td>이지원</td>
                                <td>010-1234-5678</td>
                                <td>hello0404@gmail.com</td>
                                <td className="fb">커넥터 분리 문의드립니다.</td>
                                <td>2022-08-01</td>
                                <td>
                                    <Link to="/admin/customerService/contactUsInfo">
                                        <button className="btn">보기</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="paging">
                    <NavLink to="" className="prev-btn"><i></i><span className="text_blind">이전</span></NavLink>
                    <ul>
                        <li className="current"><NavLink to="">1</NavLink></li>
                        <li><NavLink to="">2</NavLink></li>
                        <li><NavLink to="">3</NavLink></li>
                        <li><NavLink to="">4</NavLink></li>
                        <li><NavLink to="">5</NavLink></li>
                    </ul>
                    <NavLink to="" className="next-btn"><i></i><span className="text_blind">다음</span></NavLink>
                </div>
            </div>
        </div>
    );
}

export default ContactUsListForm;