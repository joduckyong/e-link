import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo, updateBoard } from 'store/boardReducer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import moment from 'moment';
import { serverUrl } from 'store/serverUrl';
import { getCookieToken } from 'storage/Cookie';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export function changeFormat(date, format) {
    //moment 변환을 함수로 미리 빼 두어서 사용.
    if (moment(date).isValid()) {
      return moment(date).format(format);
    } else {
      return null;
    }
  }

const AddFileBox = ({fileName, filesRef, onUploadFile, onDeleteFile, fileCountList}) => {
    
    return (
        <>
        {fileCountList.map((list, index) => (
            <div className="input-box" key={index}>
                <label htmlFor={"e-choice01_"+index} className="file-choice">
                    <input type="file" id={"e-choice01_"+index} className="file" data-index={index} ref={filesRef[index]} onChange={onUploadFile} />+ 파일선택
                </label>
                <span className="upload-name">{fileName[index] ? fileName[index] : '선택된 파일 없음'}
                    {fileName[index] &&
                        <NavLink to="" onClick={(e) => onDeleteFile(e, index)}> <img src="/img/admin/ico-x.svg" alt="" /></NavLink>
                    }
                </span>
            </div>
        ))}
        </>
    );
}

const JobVacancyModForm = () => {
    const [boardTitle, setBoardTitle] = useState('');
    const [boardContents, setBoardContents] = useState('');
    const [boardType, setBoardType] = useState('1');
    const [fileName, setFileName] = useState({});
    const [fileCountList, setFileCountList] = useState([0]);
    const [storedFileName, setStoredFileName] = useState({});
    const [storedFileArr, setStoredFileArr] = useState([]);
    const [url, setUrl] = useState('');
    const [boardStartDatetime, setBoardStartDatetime] = useState();
    const [boardEndDatetime, setBoardEndDatetime] = useState();

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const boardInfo = useSelector((state) => state.boardReducer.dataInfo);
    const attachList = useSelector((state) => state.boardReducer.files);
    const filesRef = useRef([]);

    useEffect(() => {
        dispatch(selectBoardInfo(id));
    }, [dispatch, id]);
    
    useEffect(() => {
        setBoardTitle(boardInfo.boardTitle); 
        setBoardContents(boardInfo.boardContents);
        setBoardType(boardInfo.boardType);
        setUrl(boardInfo.url ? boardInfo.url : '');
        if (boardInfo.boardStartDatetime) {
            setBoardStartDatetime(new Date(boardInfo.boardStartDatetime));
          }
          if (boardInfo.boardEndDatetime) {
            setBoardEndDatetime(new Date(boardInfo.boardEndDatetime));
          }
    }, [boardInfo]);

    useEffect(() => {
        const onInitFileBox = (e) => {
            let countArr = [];
            let fileObj = {};
            let storedFiles = {};
            for(let i=0; i<attachList.length; i++){
                countArr.push(i);
                fileObj[i] = attachList[i].fileOriginNm;
                storedFiles[i] = attachList[i].fileNm;
            }
            setFileName(fileObj);
            setFileCountList(countArr);
            setStoredFileName(storedFiles);
        }

        onInitFileBox();
    }, [attachList])
    

    const onEdit = async (e) => {
        e.preventDefault();

        const files = filesRef.current.map((fileRef) => {
            return fileRef.constructor.name === 'File' && fileRef;
        })

        if (boardTitle === '') {
            alert('제목을 입력하세요');
            return;
        }
        if (boardContents === '') {
            alert('내용을 입력하세요');
            return;
        }
        if (!boardStartDatetime) {
            alert('시작 날짜를 입력하세요');
            return;
        }
        if (!boardEndDatetime) {
            alert('종료 날짜를 입력하세요');
            return;
        }

        if (window.confirm('수정 하시겠습니까?')) {
            const newList = { 
                boardId: id, 
                boardTitle: boardTitle, 
                boardContents: boardContents, 
                boardType: boardType, 
                ids: storedFileArr,
                url: url,
                boardStartDatetime: changeFormat(boardStartDatetime, 'yyyy-MM-DD HH:mm:ss') || '',
                boardEndDatetime: changeFormat(boardEndDatetime, 'yyyy-MM-DD HH:mm:ss') || '', 
                files: files 
            };
            await dispatch(updateBoard(newList));
            return navigate('/admin/employmentInfo/jobVacancy');
        }
    };

    const onUploadFile = useCallback((e) => {
        if (!e.target.files) {
            return;
        }
        const index = e.target.dataset.index;
        setFileName({...fileName, [index]: e.target.files[0].name});
        filesRef.current[index] = e.target.files[0];
        if(!storedFileArr.includes(storedFileName[index])){
            setStoredFileArr([...storedFileArr, storedFileName[index]]);
        }
    }, [fileName, storedFileArr, storedFileName]);

    const onDeleteFile = useCallback((e, index) => {
        e.preventDefault();
        setFileName({...fileName, [index]: ''});
        filesRef.current[index] = '';
        if(!storedFileArr.includes(storedFileName[index])){
            setStoredFileArr([...storedFileArr, storedFileName[index]]);
        }
    }, [fileName, storedFileArr, storedFileName]);

    const onAddFileBox = () => {
        let countArr = [...fileCountList]
        let count = countArr.slice(-1)[0];
        count += 1;
        countArr.push(count);
        setFileCountList(countArr);
    }

    const [flag, setFlag] = useState(false);
    const customUploadAdapter = (loader) => {
        return {
        upload() {
            return new Promise((resolve, reject) => {
            const token = getCookieToken();
            const config = {
                headers: {
                Authorization: token,
                },
            };
            const data = new FormData();
            loader.file.then((file) => {
                // data.append('name', file.name);
                data.append('file', file);
                axios
                .post(serverUrl + '/api/file/', data, config)
                .then((res) => {
                    if (!flag) {
                    setFlag(true);
                    }
                    resolve({
                    default: `${serverUrl}/api/file/img/${res.data}`,
                    });
                })
                .catch((err) => reject(err));
          });
        });
      },
    };
  };

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  }

    return(
        <div className="a-content">
            <h2>채용공고 수정</h2>
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
                        <label htmlFor="intern">
                            <input 
                                type="radio" 
                                id="intern" 
                                name="dist"
                                value="3"
                                checked={boardType === '3' ? true : false}
                                onChange={(e) => setBoardType(e.target.value)}
                            />
                            <span className="rdimg"></span>인턴
                        </label>
                    </div>
                    <div className="pop-show" style={{marginBottom: 20}}>
                        <div className="s-tit">접수기간</div>
                        <span style={{width:'40%'}}>
                            <DatePicker locale={ko} dateFormat="yyyy-MM-dd HH:mm:ss" showTimeSelect selected={boardStartDatetime} onChange={(date) => setBoardStartDatetime(date)} />
                        </span>
                        -
                        <span style={{width:'40%'}}>
                            <DatePicker locale={ko} dateFormat="yyyy-MM-dd HH:mm:ss" showTimeSelect selected={boardEndDatetime} onChange={(date) => setBoardEndDatetime(date)} />
                        </span>
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
                        <CKEditor
                            editor={ClassicEditor}
                            config={{
                                extraPlugins: [uploadPlugin],
                            }}
                            data={boardContents ? boardContents : ''}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setBoardContents(data);
                            }}
                        />
                    </div>
                    <div className="ed-file">
                        <div className="s-tit">첨부파일</div>
                        <div className="file-area">
                            <AddFileBox fileName={fileName} filesRef={filesRef} onUploadFile={onUploadFile} onDeleteFile={onDeleteFile} fileCountList={fileCountList}/>
                            <Link to="" className="btn-add" onClick={onAddFileBox}><img src="/img/admin/ico-plus.svg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="ed-youtube">
                        <div className="s-tit">지원서 링크</div>
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

export default JobVacancyModForm;