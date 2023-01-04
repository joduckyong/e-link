import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo, updateBoard } from 'store/boardReducer';

const PressReleaseModForm = () => {
    const [boardTitle, setBoardTitle] = useState('');
    const [boardContents, setBoardContents] = useState('');
    const [thumbnailName, setThumbnailName] = useState('선택된 파일 없음');
    const [fileName, setFileName] = useState('선택된 파일 없음');
    const [storedThumbnailName, setStoredThumbnailName] = useState('');
    const [storedFileName, setStoredFileName] = useState('');
    const [storedFileArr, setStoredFileArr] = useState([]); 

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const boardInfo = useSelector((state) => state.boardReducer.dataInfo);
    const fileList = useSelector((state) => state.boardReducer.files);
    
    const thumbnailRef = useRef();
    const fileRef = useRef();

    useEffect(() => {
        dispatch(selectBoardInfo(id));
    }, [dispatch, id]);
    
    useEffect(() => {
        setBoardTitle(boardInfo.boardTitle); 
        setBoardContents(boardInfo.boardContents);
    }, [boardInfo]);

    useEffect(() => {
        for(let file of fileList){
            if(file.fileType === '1'){  //썸네일
                setThumbnailName(file.fileOriginNm);
                setStoredThumbnailName(file.fileNm);
            }else{
                setFileName(file.fileOriginNm);
                setStoredFileName(file.fileNm)
            }
        }
    }, [fileList]);
    

    const onEdit = async (e) => {
        e.preventDefault();

        const thumbnailObj = thumbnailRef.current.constructor.name === 'File' && thumbnailRef.current;
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
            const newList = { boardId: id, boardTitle: boardTitle, boardContents: boardContents, ids: storedFileArr, thumbnail: thumbnailObj, file: fileObj };
            await dispatch(updateBoard(newList));
            return navigate('/admin/publicRelations/pressRelease');
        }
    };

    const onUploadImage = useCallback((e) => {
        if (!e.target.files) {
            return;
        }
        setThumbnailName(e.target.files[0].name);
        thumbnailRef.current = e.target.files[0];
        if(!storedFileArr.includes(storedThumbnailName)){
            setStoredFileArr([...storedFileArr, storedThumbnailName]);
        }
    }, [storedFileArr, storedThumbnailName]);

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
            <h2>보도자료 수정</h2>
            <div className="ban-list bg-white"> 
                <div className="btn-area position">
                    <Link to="/admin/publicRelations/pressRelease">
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
                        <div className="s-tit">썸네일</div>
                        <div className="file-area">
                            <div className="input-box">
                                <label htmlFor="e-choice01" className="file-choice">
                                    <input type="file" accept="image/*" id="e-choice01" className="file" ref={thumbnailRef} onChange={onUploadImage}/>+ 파일선택
                                </label>
                                <span className="upload-name">{thumbnailName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="ed-file">
                        <div className="s-tit">첨부파일</div>
                        <div className="file-area">
                            <div className="input-box">
                                <label htmlFor="e-choice02" className="file-choice">
                                    <input type="file" id="e-choice02" className="file" ref={fileRef} onChange={onUploadFile}/>+ 파일선택
                                </label>
                                <span className="upload-name">{fileName}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PressReleaseModForm;