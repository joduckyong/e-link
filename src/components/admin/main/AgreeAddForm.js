import React, { useState, useRef, useCallback, useMemo } from 'react';
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertBoard } from 'store/boardReducer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getCookieToken } from 'storage/Cookie';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AgreeAddForm = () => {
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContents, setBoardContents] = useState('');
  const [boardType, setBoardType] = useState('1');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quillRef = useRef();

  const onCreate = async (e) => {
    e.preventDefault();

    if (boardTitle === '') {
      alert('제목을 입력하세요');
      return;
    }
    if (boardContents === '') {
      alert('내용을 입력하세요');
      return;
    }

    if (window.confirm('등록 하시겠습니까?')) {
      const newList = {
        boardId: 'AGR',
        boardTitle: boardTitle,
        boardContents: boardContents,
        boardType: boardType,
      };
      await dispatch(insertBoard(newList));
      return navigate('/admin/main/agree');
    }
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
    <div class="a-content a01 a01-2">
      <h2>약관동의</h2>
      <div class="ban-list p0">
        <div class="btn-area position">
          <Link to="/admin/main/agree">
            <button className="btn btn-white btn-120">취소</button>
          </Link>
          <button className="btn btn-blue btn-120" onClick={onCreate}>
            등록
          </button>
        </div>
        <div class="regi_wp">
          <div class="regi_cont">
            <label for="regiTitle">제목</label>
            <input type="text" name="regiTitle" id="regiTitle" onChange={(e) => setBoardTitle(e.target.value)} placeholder="제목을 입력해주세요." />
            <div className="ed-area">
              <ReactQuill ref={quillRef} value={boardContents} onChange={setBoardContents} modules={modules} />
            </div>
          </div>

          <div class="sel_wp">
            <span>필수 / 선택</span>
            <div class="sel_box">
              <div class="sel_form">
                <input
                  type="radio"
                  id="selEssen"
                  name="dist"
                  value="1"
                  checked={boardType === '1' ? true : false}
                  onChange={(e) => setBoardType(e.target.value)}
                />
                <label for="selEssen">필수</label>
              </div>
              <div class="sel_form">
                <input
                  type="radio"
                  id="selChoice"
                  name="dist"
                  value="2"
                  checked={boardType === '2' ? true : false}
                  onChange={(e) => setBoardType(e.target.value)}
                />
                <label for="selChoice">선택</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreeAddForm;
