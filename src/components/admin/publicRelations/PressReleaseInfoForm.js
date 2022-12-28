import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo } from 'store/boardReducer';

const PressReleaseInfoForm = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const boardTitle = useSelector((state) => state.boardReducer.dataInfo.boardTitle);
    const boardContents = useSelector((state) => state.boardReducer.dataInfo.boardContents);

    useEffect(() => {
        dispatch(selectBoardInfo(id));
    }, [dispatch, id]);

    return (
        <div className="a-content">
            <h2>보도자료 관리</h2>
            <div className="ban-list p0"> 
                <div className="btn-area position">
                    <Link to="/admin/publicRelations/pressRelease">
                        <button className="btn btn-white btn-120">목록</button>
                    </Link>
                </div>
                <div className="view-detail bg-white">
                    <ul>
                        <li>
                            <span className="tit">제목</span>
                            <div className="text">{boardTitle}</div>
                        </li>
                        <li>
                            <span className="tit">내용</span>
                            <div className="text">{boardContents}</div>
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
                                <button className="btn-down"><img src="/img/admin/ico-download.svg" alt="" /></button>
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

export default PressReleaseInfoForm;