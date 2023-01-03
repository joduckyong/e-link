import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertBoard } from 'store/boardReducer';

const AddFileBox = ({fileName, fileRef, onUploadFile, fileCountList}) => {

    return (
        <>
        {fileCountList.map((list, index) => (
            <div className="input-box" key={index}>
                <label htmlFor="e-choice01" className="file-choice">
                    <input type="file" id="e-choice01" className="file" ref={fileRef} onChange={onUploadFile} />+ 파일선택
                </label>
                <span className="upload-name">{fileName}</span>
            </div>
        ))}
        </>
    );
}

const JobVacancyAddForm = () => {
    const [boardTitle, setBoardTitle] = useState('');
    const [boardContents, setBoardContents] = useState('');
    const [boardType, setBoardType] = useState('1');
    const [fileName, setFileName] = useState('선택된 파일 없음');
    const [fileCountList, setFileCountList] = useState([0]);

    const dispatch = useDispatch();

    const fileRef = useRef();

    const onCreate = async (e) => {
        e.preventDefault();

        const fileObj = fileRef.current.constructor.name === 'File' && fileRef.current;

        if(boardTitle === ''){
            alert('제목을 입력하세요');
            return;
        }
        if(boardContents === ''){
            alert('내용을 입력하세요');
            return;
        }
        if(window.confirm('등록 하시겠습니까?')){
            const newList = { boardId: 'JOB', boardTitle: boardTitle, boardContents: boardContents, boardType: boardType, file: fileObj };
            await dispatch(insertBoard(newList));
            document.location.href = '/admin/employmentInfo/jobVacancy';
        }
    }

    const onUploadFile = useCallback((e) => {
        if (!e.target.files) {
            return;
        }
        setFileName(e.target.files[0].name);
        fileRef.current = e.target.files[0];
    }, []);

    const onAddFileBox = () => {
        let countArr = [...fileCountList]
        let count = countArr.slice(-1)[0];
        count += 1;
        countArr.push(count);
        setFileCountList(countArr);
    }

    return(
        <div className="a-content">
            <h2>채용공고 등록</h2>
            <div className="ban-list bg-white"> 
                <div className="btn-area position">
                    <Link to="/admin/employmentInfo/jobVacancy">
                        <button className="btn btn-white btn-120">취소</button>
                    </Link>
                    <button className="btn btn-blue btn-120" onClick={onCreate}>등록</button>
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
                        <div className="s-tit">첨부파일</div>
                        <div className="file-area">
                            <AddFileBox fileName={fileName} fileRef={fileRef} onUploadFile={onUploadFile} fileCountList={fileCountList}/>
                            {/* <div className="input-box">
                                <label htmlFor="e-choice01" className="file-choice">
                                    <input type="file" id="e-choice01" className="file" ref={fileRef} onChange={onUploadFile} />+ 파일선택
                                </label>
                                <span className="upload-name">{fileName}</span>
                            </div> */}
                        </div>
                        <Link to="" className="btn-add" onClick={onAddFileBox}><img src="/img/admin/ico-plus.svg" alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobVacancyAddForm;