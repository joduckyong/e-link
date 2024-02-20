import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactUsInfo, updateContactUs } from 'store/contactUsReducer';
import { downloadFile } from 'common/download';
import { getCookieToken } from 'storage/Cookie';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ContactUsInfoForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const contactType = useSelector((state) => state.contactUsReducer.dataInfo.contactType);
  const contactNm = useSelector((state) => state.contactUsReducer.dataInfo.contactNm);
  const contactTitle = useSelector((state) => state.contactUsReducer.dataInfo.contactTitle);
  const contactPhone = useSelector((state) => state.contactUsReducer.dataInfo.contactPhone);
  const contactContents = useSelector((state) => state.contactUsReducer.dataInfo.contactContents);
  const contactContents2 = useSelector((state) => state.contactUsReducer.dataInfo.contactRecontents);
  const contactAgree = useSelector((state) => state.contactUsReducer.dataInfo.contactAgree);
  const contactProcess = useSelector((state) => state.contactUsReducer.dataInfo.contactProcess);
  const attachList = useSelector((state) => state.contactUsReducer.files);

  const [contactRecontents, setContactRecontents] = useState('');

  const quillRef = useRef();

  useEffect(() => {
    dispatch(selectContactUsInfo(id));
  }, [dispatch, id]);

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

  const onEdit = async (e) => {
    e.preventDefault();

    if (contactRecontents === '') {
      alert('답변을 입력하세요');
      return;
    }

    if (window.confirm('답변 하시겠습니까?')) {
      const newList = {
        contactId: id,
        contactRecontents: contactRecontents,
      };
      await dispatch(updateContactUs(newList));
      return navigate('/admin/customerService/contactUs');
    }
  };

  return (
    <div className="a-content">
      <ul className="sub-tab">
        <li className="active">
          <Link to="">국문</Link>
        </li>
        <li>
          <Link to="">영문</Link>
        </li>
      </ul>
      <h2>Contact Us</h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <Link to="/admin/customerService/contactUs">
            <button className="btn btn-white btn-120">목록</button>
          </Link>
          {contactType === 'C' && contactProcess === 'N' && (
            <button className="btn btn-blue btn-120" onClick={onEdit}>
              답변
            </button>
          )}
        </div>
        <div className="view-detail bg-white">
          <ul>
            <li>
              <span className="tit">이름</span>
              <div className="text">{contactNm}</div>
            </li>
            <li>
              <span className="tit">연락처</span>
              <div className="text">{contactPhone}</div>
            </li>
            <li>
              <span className="tit">제목</span>
              <div className="text">{contactTitle}</div>
            </li>
            <li>
              <span className="tit">내용</span>
              <div className="text">{contactContents}</div>
            </li>
            <li>
              <span className="tit"></span>
              <div className="text"></div>
            </li>
          </ul>
        </div>
        {attachList.length > 0 && (
          <div className="view-detail bg-white mt10">
            <ul>
              {attachList.map((list, index) => (
                <li>
                  <span className="tit">첨부파일</span>
                  <div className="text">
                    <span>{list.fileOriginNm}</span>
                    <button className="btn-down" onClick={() => downloadFile(list.fileNm, list.fileOriginNm)}>
                      <img src="/img/admin/ico-download.svg" alt="" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="view-detail bg-white mt10">
          <ul>
            <li>
              <span className="tit">약관동의</span>
              <div className="text">
                <label htmlFor="allagree">
                  <input type="checkbox" id="allagree" checked={contactAgree === 'Y' && 'checked'} readOnly />
                  <span className="chkimg"></span>
                </label>
                개인정보 수집 및 이용에 동의합니다.
              </div>
            </li>
          </ul>
        </div>
      </div>
      {contactType === 'C' && contactProcess === 'N' && (
        <div className="ban-list bg-white">
          <div className="ed-tit">
            <div className="s-tit">답변</div>
          </div>
          <div className="edit">
            <div className="ed-area">
              <ReactQuill ref={quillRef} value={contactRecontents} onChange={setContactRecontents} modules={modules} />
            </div>
          </div>
        </div>
      )}
      {contactType === 'C' && contactProcess === 'Y' && (
        <div className="ban-list bg-white">
          <div className="ed-tit">
            <div className="s-tit">답변</div>
          </div>
          <div className="edit">
            <div className="ed-area">
              <div dangerouslySetInnerHTML={{ __html: contactContents2 }}></div>
              {/* <div className="text">{contactContents2}</div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsInfoForm;
