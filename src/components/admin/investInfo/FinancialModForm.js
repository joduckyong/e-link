import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo, updateBoard } from 'store/boardReducer';
import { getCookieToken } from 'storage/Cookie';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddFileBox = ({ fileName, filesRef, onUploadFile, onDeleteFile, fileCountList }) => {
  return (
    <>
      {fileCountList.map((index, idx) => (
        <div className="input-box" key={index}>
          <label htmlFor={'e-choice01_' + index} className="file-choice">
            <input type="file" id={'e-choice01_' + index} className="file" data-index={index} ref={filesRef[index]} onChange={onUploadFile} />+
            파일선택
          </label>
          <span className="upload-name">
            {fileName[index] ? fileName[index] : '선택된 파일 없음'}
            {fileName[index] && (
              <NavLink to="" onClick={(e) => onDeleteFile(e, index)}>
                {' '}
                <img src="/img/admin/ico-x.svg" alt="" />
              </NavLink>
            )}
          </span>
        </div>
      ))}
    </>
  );
};

const FinancialModForm = () => {
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContents, setBoardContents] = useState('');
  const [fileName, setFileName] = useState({});
  const [fileCountList, setFileCountList] = useState([0]);
  const [storedFileName, setStoredFileName] = useState({});
  const [storedFileArr, setStoredFileArr] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boardInfo = useSelector((state) => state.boardReducer.dataInfo);
  const attachList = useSelector((state) => state.boardReducer.files);
  const filesRef = useRef([]);
  const quillRef = useRef();

  useEffect(() => {
    dispatch(selectBoardInfo(id));
  }, [dispatch, id]);

  //값 셋팅
  useEffect(() => {
    setBoardTitle(boardInfo.boardTitle);
    setBoardContents(boardInfo.boardContents);
  }, [boardInfo]);

  useEffect(() => {
    const onInitFileBox = (e) => {
      let countArr = [];
      let fileObj = {};
      let storedFiles = {};
      for (let i = 0; i < attachList.length; i++) {
        countArr.push(i);
        fileObj[i] = attachList[i].fileOriginNm;
        storedFiles[i] = attachList[i].fileNm;
      }
      setFileName(fileObj);
      setFileCountList(countArr.length > 0 ? countArr : [0]);
      setStoredFileName(storedFiles);
    };

    onInitFileBox();
  }, [attachList]);

  //수정
  const onEdit = async (e) => {
    e.preventDefault();

    const files = filesRef.current.map((fileRef) => {
      return fileRef.constructor.name === 'File' && fileRef;
    });

    if (boardTitle === '') {
      alert('제목을 입력하세요');
      return;
    }
    if (boardContents === '') {
      alert('내용을 입력하세요');
      return;
    }
    if (window.confirm('수정 하시겠습니까?')) {
      const newList = {
        boardId: id,
        boardTitle: boardTitle,
        boardContents: boardContents,
        ids: storedFileArr,
        files: files,
      };
      await dispatch(updateBoard(newList));
      return navigate('/admin/investInfo/financial');
    }
  };

  const onUploadFile = useCallback(
    (e) => {
      if (!e.target.files) {
        return;
      }
      const index = e.target.dataset.index;
      setFileName({ ...fileName, [index]: e.target.files[0].name });
      filesRef.current[index] = e.target.files[0];
      if (!storedFileArr.includes(storedFileName[index])) {
        setStoredFileArr([...storedFileArr, storedFileName[index]]);
      }
    },
    [fileName, storedFileArr, storedFileName, fileCountList],
  );

  const onDeleteFile = useCallback(
    (e, index) => {
      e.preventDefault();
      setFileName({ ...fileName, [index]: '' });
      filesRef.current[index] = '';
      if (!storedFileArr.includes(storedFileName[index])) {
        setStoredFileArr([...storedFileArr, storedFileName[index]]);
      }
      let countArr = fileCountList.filter((i) => i !== index);
      setFileCountList(countArr);
    },
    [fileName, storedFileArr, storedFileName, fileCountList],
  );

  const onAddFileBox = () => {
    let countArr = [...fileCountList];
    let count = countArr.slice(-1)[0] ? countArr.slice(-1)[0] : 0;
    count += 1;
    countArr.push(count);
    setFileCountList(countArr);
  };

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
        const result = await axios.post(process.env.REACT_APP_API_URL + '/api/file/', formData, config);
        console.log('성공 시, 백엔드가 보내주는 데이터', result.data);
        const IMG_URL = `${process.env.REACT_APP_API_URL}/api/file/img/${result.data}`;
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
          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6] }],
          [{ font: [] }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ direction: 'rtl' }], // text direction
          [{ align: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote', 'link', 'code-block', 'formula'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
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

  return (
    <div className="a-content">
      <h2>재무수정</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <NavLink to="/admin/investInfo/financial">
            <button className="btn btn-white btn-120">취소</button>
          </NavLink>
          <button className="btn btn-blue btn-120" onClick={onEdit}>
            수정
          </button>
        </div>
        <div className="edit">
          <div className="ed-tit">
            <div className="s-tit">제목</div>
            <input type="text" placeholder="제목을 입력해주세요." onChange={(e) => setBoardTitle(e.target.value)} value={boardTitle} />
          </div>
          <div className="ed-area">
            <ReactQuill ref={quillRef} value={boardContents} onChange={setBoardContents} modules={modules} />
          </div>
          <div className="ed-file">
            <div className="s-tit">첨부파일</div>
            <div className="file-area">
              <AddFileBox
                fileName={fileName}
                filesRef={filesRef}
                onUploadFile={onUploadFile}
                onDeleteFile={onDeleteFile}
                fileCountList={fileCountList}
              />
              <NavLink to="" className="btn-add" onClick={onAddFileBox}>
                <img src="/img/admin/ico-plus.svg" alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialModForm;
