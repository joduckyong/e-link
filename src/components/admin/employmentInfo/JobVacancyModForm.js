import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo, updateBoard } from 'store/boardReducer';

const JobVacancyModForm = () => {
    const [boardTitle, setBoardTitle] = useState('');
    const [boardContents, setBoardContents] = useState('');
    const [boardType, setBoardType] = useState('1');

    const { id } = useParams();
    const dispatch = useDispatch();
    const boardInfo = useSelector((state) => state.boardReducer.dataInfo);

    useEffect(() => {
        dispatch(selectBoardInfo(id));
    }, [dispatch, id]);
    
    useEffect(() => {
        setBoardTitle(boardInfo.boardTitle); 
        setBoardContents(boardInfo.boardContents);
        setBoardType(boardInfo.boardType);
    }, [boardInfo]);
    

    const onEdit = (e) => {
        e.preventDefault();

        if (boardTitle === '') {
            alert('제목을 입력하세요');
            return;
        }
        if (boardContents === '') {
            alert('내용을 입력하세요');
            return;
        }
        if (window.confirm('수정 하시겠습니까?')) {
            const newList = { boardId: id, boardTitle: boardTitle, boardContents: boardContents, boardType: boardType };
            dispatch(updateBoard(newList));
            document.location.href = '/admin/employmentInfo/jobVacancy';
        }
    };

    return(
        <div className="a-content">
            <h2>보도자료 등록</h2>
            <div className="ban-list bg-white"> 
                <div className="btn-area position">
                    <Link to="/admin/employmentInfo/jobVacancy">
                    <button className="btn btn-white btn-120">취소</button>
                    </Link>
                    <button className="btn btn-blue btn-120" onClick={onEdit}>수정</button>
                </div>
                <div className="edit">
                    <div className="radio">
                        <label htmlFor="new">
                            <input 
                                type="radio" 
                                id="new" 
                                name="dist"
                                value="1"
                                checked={boardType === '1' ? true : false}
                                onChange={(e) => setBoardType(e.target.value)}
                            />
                            <span className="rdimg"></span>신입
                        </label>
                        <label htmlFor="career">
                            <input 
                                type="radio" 
                                id="career" 
                                name="dist"
                                value="2"
                                checked={boardType === '2' ? true : false}
                                onChange={(e) => setBoardType(e.target.value)}
                            />
                            <span className="rdimg"></span>경력
                        </label>
                    </div>
                    <div className="ed-tit">
                        <div className="s-tit">제목</div>
                        <input 
                            type="text"
                            name="boardTitle" 
                            placeholder="제목을 입력해주세요." 
                            onChange={(e) => setBoardTitle(e.target.value)}
                            value={boardTitle}
                        />
                    </div>
                    <div className="ed-area">
                        <textarea 
                            name="" 
                            id="" 
                            cols="30" 
                            rows="10" 
                            placeholder="내용을 입력해주세요."
                            onChange={(e) => setBoardContents(e.target.value)}
                            value={boardContents}
                        ></textarea>
                    </div>
                    <div className="ed-file">
                        <div className="s-tit">썸네일</div>
                        <div className="file-area">
                            <div className="input-box">
                                <label htmlFor="e-choice01" className="file-choice">
                                    <input type="file" id="e-choice01" className="file" />+ 파일선택
                                </label>
                                <span className="upload-name">선택된 파일 없음</span>
                            </div>
                        </div>
                    </div>
                    <div className="ed-file">
                        <div className="s-tit">첨부파일</div>
                        <div className="file-area">
                            <div className="input-box">
                                <label htmlFor="e-choice02" className="file-choice">
                                    <input type="file" id="e-choice02" className="file" />+ 파일선택
                                </label>
                                <span className="upload-name">선택된 파일 없음</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobVacancyModForm;