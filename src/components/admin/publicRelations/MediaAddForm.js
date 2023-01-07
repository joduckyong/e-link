import React, { useState, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertBoard } from 'store/boardReducer';

const MediaAddForm = () => {
    const [boardTitle, setBoardTitle] = useState('');
    const [boardContents, setBoardContents] = useState('');
    const [url, setUrl] = useState('');
    const [fileName, setFileName] = useState('선택된 파일 없음');

    const fileRef = useRef();

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
            const newList = { boardId: 'MED', boardTitle: boardTitle, boardContents: boardContents, url: url, file: fileObj };
            await dispatch(insertBoard(newList));
            return navigate('/admin/publicRelations/media');
        }
    }

    const onUploadFile = useCallback((e) => {
        if (!e.target.files) {
            return;
        }
        setFileName(e.target.files[0].name);
        fileRef.current = e.target.files[0];
    }, []);
    

    return (
        <div className="a-content">
            <h2>미디어 등록</h2>
            <div className="ban-list bg-white"> 
                <div className="btn-area position">
                    <Link to="/admin/publicRelations/media">
                        <button className="btn btn-white btn-120">취소</button>
                    </Link>
                    <button className="btn btn-blue btn-120" onClick={onCreate}>등록</button>
                </div>
                <div className="edit">
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
                            <div className="input-box">
                                <label htmlFor="e-choice01" className="file-choice">
                                    <input type="file" id="e-choice01" className="file" ref={fileRef} onChange={onUploadFile}/>+ 파일선택
                                </label>
                                <span className="upload-name">{fileName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="ed-youtube">
                        <div className="s-tit">유튜브 링크</div>
                        <input 
                            type="text" 
                            name="url" 
                            onChange={(e) => setUrl(e.target.value)}
                            value={url}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MediaAddForm;