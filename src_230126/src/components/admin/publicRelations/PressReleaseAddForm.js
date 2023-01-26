import React, { useState, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertBoard } from 'store/boardReducer';




const PressReleaseAddForm = () => {
    const [boardTitle, setBoardTitle] = useState('');
    const [boardContents, setBoardContents] = useState('');
    const [thumbnailName, setThumbnailName] = useState('선택된 파일 없음');
    const [fileName, setFileName] = useState('선택된 파일 없음');

    const thumbnailRef = useRef();
    const fileRef = useRef();



    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onCreate = async (e) => {
        e.preventDefault();

        const thumbnailObj = thumbnailRef.current.constructor.name === 'File' && thumbnailRef.current;
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
            const newList = { boardId: 'PRE', boardTitle: boardTitle, boardContents: boardContents, thumbnail: thumbnailObj, file: fileObj};
            await dispatch(insertBoard(newList));
            return navigate('/admin/publicRelations/pressRelease');
        }

	
    }
  
    const onUploadImage = useCallback((e) => {
        if (!e.target.files) {
            return;
        }
        setThumbnailName(e.target.files[0].name);
        thumbnailRef.current = e.target.files[0];
	
		var fildDel = document.querySelector('.file-del01');
		fildDel.classList.add('active');
		fildDel.onclick = function(){
			document.querySelector('#e-choice01').setAttribute('value','');
			document.querySelector('.upload-name1').innerText = "선택된 파일 없음";
			this.classList.remove('active');
		} 

	}, []);

    const onUploadFile = useCallback((e) => {
        if (!e.target.files) {
            return;
        }
        setFileName(e.target.files[0].name);
        fileRef.current = e.target.files[0];
		
		var fildDel2 = document.querySelector('.file-del02');
		fildDel2.classList.add('active');
		fildDel2.onclick = function(){
			document.querySelector('#e-choice02').setAttribute('value','');
			document.querySelector('.upload-name2').innerText = "선택된 파일 없음";
			this.classList.remove('active');
		} 
		
    }, []);

	
    
    return (
        <div className="a-content">
            <h2>보도자료 등록</h2>
            <div className="ban-list bg-white"> 
                <div className="btn-area position">
                    <Link to="/admin/publicRelations/pressRelease">
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
                        <div className="s-tit">썸네일</div>
                        <div className="file-area">
                            <div className="input-box">
                                <label htmlFor="e-choice01" className="file-choice">
                                    <input type="file" accept="image/*" id="e-choice01" className="file" ref={thumbnailRef} onChange={onUploadImage}/>+ 파일선택
                                </label>
                                <span className="upload-name upload-name1">{thumbnailName}</span>
								<img className="file-del file-del01" src="/img/admin/del-ico.png" alt="파일삭제"/>
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
                                <span className="upload-name upload-name2">{fileName}</span>
								<img className="file-del file-del02" src="/img/admin/del-ico.png" alt="파일삭제"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PressReleaseAddForm;