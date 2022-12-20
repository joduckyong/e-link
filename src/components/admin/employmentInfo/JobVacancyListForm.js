import React from 'react';
import { NavLink } from 'react-router-dom';

const JobVacancyListForm = () => {

    const goInfoPage = () => {
        document.location.href = '/admin/employmentInfo/jobVacancyInfo';
    }
    
    const goAddPage = () => {
        document.location.href = '/admin/employmentInfo/jobVacancyAdd';
    }

    return(
        <div className="a-content">
            <h2>채용공고 관리<span>총 5건</span></h2>
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
                    <button className="btn btn-blue btn-120" onClick={goAddPage}>글쓰기</button>
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
                                <th><label htmlFor="allchk"><input type="checkbox" id="allchk" /><span className="chkimg"></span></label></th>
                                <th>번호</th>
                                <th>구분</th>
                                <th>제목</th>
                                <th>작성일</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><label htmlFor="p01"><input type="checkbox" id="p01" /><span className="chkimg"></span></label></th>
                                <td>1</td>
                                <td>신입</td>
                                <td className="tal"><span className="pop-name">[신입_해외영업] 23년 신입사원 공개채용 (해외영업 분야)</span></td>
                                <td><span className="pop-date">2022-08-01</span></td>
                                <td><button className="btn" onClick={goInfoPage}>수정</button></td>
                            </tr>
                            <tr>
                                <th><label htmlFor="p01"><input type="checkbox" id="p01" /><span className="chkimg"></span></label></th>
                                <td>2</td>
                                <td>신입</td>
                                <td className="tal"><span className="pop-name">[신입_해외영업] 23년 신입사원 공개채용 (해외영업 분야)</span></td>
                                <td><span className="pop-date">2022-08-01</span></td>
                                <td><button className="btn" onClick={goInfoPage}>수정</button></td>
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

export default JobVacancyListForm;