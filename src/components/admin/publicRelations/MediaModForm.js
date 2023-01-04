import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo, updateBoard } from 'store/boardReducer';

const MediaModForm = () => {
    const [boardTitle, setBoardTitle] = useState('');
    const [boardContents, setBoardContents] = useState('');
    const [url, setUrl] = useState('http://');
    const [fileName, setFileName] = useState('선택된 파일 없음');
    const [storedFileName, setStoredFileName] = useState('');
    const [storedFileArr, setStoredFileArr] = useState([]); 

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const boardInfo = useSelector((state) => state.boardReducer.dataInfo);
    const fileList = useSelector((state) => state.boardReducer.files);

    const fileRef = useRef();

    useEffect(() => {
        dispatch(selectBoardInfo(id));
    }, [dispatch, id]);
    
    useEffect(() => {
        setBoardTitle(boardInfo.boardTitle); 
        setBoardContents(boardInfo.boardContents);
        setUrl(boardInfo.url);
    }, [boardInfo]);
    
    useEffect(() => {
        for(let file of fileList){
            setFileName(file.fileOriginNm);
            setStoredFileName(file.fileNm)
        }
    }, [fileList]);

    const onEdit = async (e) => {
        e.preventDefault();

        const fileObj = fileRef.current.constructor.name === 'File' && fileRef.current;

        if (boardTitle === '') {
            alert('제목을 입력하세요');
            return;
        }
        if (boardContents === '') {
            alert('내용을 입력하세요');
            return;
        }
        if (window.confirm('수정 하시겠습니까?')) {
            const newList = { boardId: id, boardTitle: boardTitle, boardContents: boardContents, url: url, ids: storedFileArr, file: fileObj };
            await dispatch(updateBoard(newList));
            return navigate('/admin/publicRelations/media');
        }
    };

    const onUploadFile = useCallback((e) => {
        if (!e.target.files) {
            return;
        }
        setFileName(e.target.files[0].name);
        fileRef.current = e.target.files[0];
        if(!storedFileArr.includes(storedFileName)){
            setStoredFileArr([...storedFileArr, storedFileName]);
        }
        
    }, [storedFileArr, storedFileName]);

    return (
        <div className="a-content">
            <h2>미디어 수정</h2>
            <div className="ban-list bg-white"> 
                <div className="btn-area position">
                    <Link to="/admin/publicRelations/media">
                    <button className="btn btn-white btn-120">취소</button>
                    </Link>
                    <button className="btn btn-blue btn-120" onClick={onEdit}>수정</button>
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
                                <label htmlFor="e-choice02" className="file-choice">
                                    <input type="file" id="e-choice02" className="file" ref={fileRef} onChange={onUploadFile} />+ 파일선택
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

export default MediaModForm;