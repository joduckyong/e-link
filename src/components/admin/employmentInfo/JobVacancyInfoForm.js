import React from 'react';
import { Link } from 'react-router-dom';

const JobVacancyInfoForm = () => {

    return(
        <div className="a-content">
            <h2>채용공고 관리</h2>
            <div className="ban-list p0"> 
                <div className="btn-area position">
                    <Link to="/admin/employmentInfo/jobVacancy">
                        <button className="btn btn-white btn-120">목록</button>
                    </Link>
                </div>
                <div className="view-detail bg-white">
                    <ul>
                        <li>
                            <span className="tit">순번</span>
                            <div className="text">No.5</div>
                        </li>
                        <li>
                            <span className="tit">이름</span>
                            <div className="text">이지원</div>
                        </li>
                        <li>
                            <span className="tit">연락처</span>
                            <div className="text">010-1234-5678</div>
                        </li>
                        <li>
                            <span className="tit">제목</span>
                            <div className="text">커넥터분리 문의드립니다.</div>
                        </li>
                        <li>
                            <span className="tit">내용</span>
                            <div className="text">특히 국내 1위 전기∙전력 기술력을 보유한 관계사 LS전선∙LS일렉트릭 등과 시너지를 모색한다. LS전선은 국내 최초로 800V 고전압에서 사용할 수 있는 전기차용 권선을 양산 중이다. 전기차용 고전압 하네스(전기배선), 배터리팩 등을 생산하고 있다. LS일렉트릭은 배전 분야에서 안정적인 스마트 전력설비 기술을 보유하고 있다. E1은 국내 350여개 충전소 운영 노하우를 갖고 있다. 구자은 LS 회장은 올해 취임사에서 에너지 전환이라는 거대한 흐름은 결국 전기화 시대를 더욱 가속화 시킬 것”이라며 “LS가 강점을 가지고 있는 전기∙전력∙소재 분야의 앞선 기술력을 바탕으로 고객에게 이전에 경험해보지 못한 차별적인 경험과 가치를 제공하여 미래 종합 에너지 솔루션 기업으로 도약할 것”이라고 밝힌 바 있다. 한편 LS E-Link 초대 대표는 김대근 이사가 선임됐다. 그는 E1에서 강원지사장, 서울지사장, E1 컨테이너터미널 대표 등을 거치며 충전 사업과 영업 관리에 대한 경험을 갖췄다.</div>
                        </li>
                        <li>
                            <span className="tit"></span>
                            <div className="text"></div>
                        </li>
                    </ul>
                </div>
                <div className="view-detail bg-white mt10">
                    <ul>
                        <li>
                            <span className="tit">첨부파일</span>
                            <div className="text">
                                <span>커넥터분리.pdf</span>
                                <button className="btn-down"><img src="../../img/admin/ico-download.svg" alt="" /></button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="view-detail bg-white mt10">
                    <ul>
                        <li>
                            <span className="tit">약관동의</span>
                            <div className="text"><label htmlFor="allagree"><input type="checkbox" id="allagree" /><span className="chkimg"></span></label>개인정보 수집 및 이용에 동의합니다.</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default JobVacancyInfoForm;