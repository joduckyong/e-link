import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
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
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
    const quillRef = useRef();

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

    const imageHandler = () => {
        console.log('에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!');
      
        // 1. 이미지를 저장할 input type=file DOM을 만든다.
        const input = document.createElement('input');
        // 속성 써주기
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        document.body.appendChild(input);
        input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
        // input이 클릭되면 파일 선택창이 나타난다.
      
        // input에 변화가 생긴다면 = 이미지를 선택
        input.addEventListener('change', async () => {
          console.log('온체인지');
          const file = input.files[0];
          // multer에 맞는 형식으로 데이터 만들어준다.
          const formData = new FormData();
          formData.append('file', file); // formData는 키-밸류 구조
          // 백엔드 multer라우터에 이미지를 보낸다.
          try {
            const token = getCookieToken();
            const config = {
              headers: {
                Authorization: token,
              },
            };
            const result = await axios.post(serverUrl + '/api/file/', formData, config);
            console.log('성공 시, 백엔드가 보내주는 데이터', result.data);
            const IMG_URL = `${serverUrl}/api/file/img/${result.data}`;
            console.log('IMG_URL : ' + IMG_URL);
            // 이 URL을 img 태그의 src에 넣은 요소를 현재 에디터의 커서에 넣어주면 에디터 내에서 이미지가 나타난다
            // src가 base64가 아닌 짧은 URL이기 때문에 데이터베이스에 에디터의 전체 글 내용을 저장할 수있게된다
            // 이미지는 꼭 로컬 백엔드 uploads 폴더가 아닌 다른 곳에 저장해 URL로 사용하면된다.
      
            // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.
            const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
            // 1. 에디터 root의 innerHTML을 수정해주기
            // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
            // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
            // editor.root.innerHTML =
            //   editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.
      
            // 2. 현재 에디터 커서 위치값을 가져온다
            const range = editor.getSelection();
            // 가져온 위치에 이미지를 삽입한다
            editor.insertEmbed(range.index, 'image', IMG_URL);
          } catch (error) {
            console.log('실패했어요ㅠ');
          }
        });
      };
      
      const modules = useMemo(() => {
        return {
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ font: [] }],
              [{ align: [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
              [
                {
                  color: [
                    '#000000',
                    '#e60000',
                    '#ff9900',
                    '#ffff00',
                    '#008a00',
                    '#0066cc',
                    '#9933ff',
                    '#ffffff',
                    '#facccc',
                    '#ffebcc',
                    '#ffffcc',
                    '#cce8cc',
                    '#cce0f5',
                    '#ebd6ff',
                    '#bbbbbb',
                    '#f06666',
                    '#ffc266',
                    '#ffff66',
                    '#66b966',
                    '#66a3e0',
                    '#c285ff',
                    '#888888',
                    '#a10000',
                    '#b26b00',
                    '#b2b200',
                    '#006100',
                    '#0047b2',
                    '#6b24b2',
                    '#444444',
                    '#5c0000',
                    '#663d00',
                    '#666600',
                    '#003700',
                    '#002966',
                    '#3d1466',
                    'custom-color',
                  ],
                },
                { background: [] },
              ],
              ['image'],
              ['clean'],
            ],
            handlers: {
              image: imageHandler,
            },
          },
        };
      }, []);

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
                        <ReactQuill ref={quillRef} value={boardContents} onChange={setBoardContents} modules={modules} />
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