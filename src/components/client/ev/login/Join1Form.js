import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientBoard } from 'store/boardReducer';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';

const Join1Form = () => {
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardReducer);

  // 링크 연결
  const navigate = useNavigate();

  // 체크박스 선택값
  const [checkItems, setCheckItems] = useState([]);

  // 선택값
  const [activeStates, setActiveStates] = useState({});

  const [page, setPage] = useState(1);
  const [checkLength, setCheckLength] = useState(0);

  useEffect(() => {
    const newList = { boardId: 'AGR', pageIndex: page };
    dispatch(selectClientBoard(newList));
  }, [dispatch, page]);

  useEffect(() => {
    setCheckLength(boardList.data.length);
  }, [boardList.data.length]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = boardList.data?.map((list) => list.boardId) || [];
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  // console.log('checkItems : ' + checkItems);

  const getboardType = (type) => {
    let boardTypeName = '';
    if (type === '1') {
      boardTypeName = '필수';
    } else if (type === '2') {
      boardTypeName = '선택';
    }

    return boardTypeName;
  };

  const aggreBtn = (e) => {
    e.preventDefault();

    let alertShown = false;
    boardList.data?.forEach((list) => {
      if (!checkItems.includes(list.boardId) && list.boardType === '1') {
        if (!alertShown) {
          alert('[' + getboardType(list.boardType) + ']' + list.boardTitle + '을 선택 하세요');
          alertShown = true;
        }
      }
    });

    if (!alertShown) {
      navigate('/ev/join2');
    }
  };

  return (
    <>
      <section className="ev-sub-sect">
        <form className="join-wp">
          <h1>ELVIS 회원가입</h1>
          <ol className="order-wp">
            <li className="active">약관동의</li>
            <li>정보입력</li>
            <li>가입완료</li>
          </ol>
          <div className="gray-mini-box">ELVIS 서비스는 만 14세 이상 이용가능합니다.</div>
          <div className="agree-wp">
            <div className="agree all-agree">
              <label htmlFor="allagree">
                <input
                  type="checkbox"
                  id="allagree"
                  onChange={(e) => handleAllCheck(e.target.checked)}
                  checked={checkItems.length === checkLength ? true : false}
                />
                <span className="chkimg"></span>전체 약관동의 (선택 포함)
              </label>
            </div>
            <ul className="agree-list">
              {boardList.data?.map((list, index) => (
                <li className={classnames('agree', { active: activeStates[list.boardId] })}>
                  <div className="ttl">
                    <label htmlFor={list.boardId}>
                      <input
                        type="checkbox"
                        id={list.boardId}
                        onChange={(e) => handleSingleCheck(e.target.checked, list.boardId)}
                        checked={checkItems.includes(list.boardId) ? true : false}
                      />
                      <span className="chkimg"></span>
                      <b>[{getboardType(list.boardType)}]</b> {list.boardTitle}
                    </label>
                    <div className="arrow" onClick={() => setActiveStates((prev) => ({ ...prev, [list.boardId]: !prev[list.boardId] }))}></div>
                  </div>
                  <div className="cont" style={{ display: activeStates[list.boardId] ? 'block' : 'none' }}>
                    <div dangerouslySetInnerHTML={{ __html: list.boardContents }}></div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="orange-btn" onClick={aggreBtn}>
              약관동의
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Join1Form;
