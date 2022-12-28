import React, { useEffect, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard, deleteBoardIds } from 'store/boardReducer';

const PressReleaseListForm = () => {
    const dispatch = useDispatch();
    const boardList = useSelector((state) => state.boardReducer.data);
    const totalCount = useSelector((state) => state.boardReducer.totalCount);
    const [checkItems, setCheckItems] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const newList = { boardId: 'PRE', pageIndex: 1, searchKeyword: null };
        dispatch(selectBoard(newList));
    }, [dispatch]);

const onRemove = (e) => {
    e.preventDefault();

    if(checkItems.length === 0){
        alert('항목을 선택하세요');
        return;
    }

    if(window.confirm('삭제 하시겠습니까?')){
        const newList = { ids: checkItems };

        dispatch(deleteBoardIds(newList)).then(() => {
            const newList = { boardId: 'PRE', pageIndex: page, searchKeyword: null };
            dispatch(selectBoard(newList));
          });
    }
}

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
      const idArray = [];
      boardList.forEach((el) => idArray.push(el.boardId));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
};
    
    return(
        <div className="a-content">
            <h2>보도자료 관리<span>총 {totalCount}건</span></h2>
            <div className="ban-list p0">
                <div className="btn-area position">
                    <button className="btn btn-red btn-120" onClick={onRemove}>선택삭제</button>
                    <Link to="/admin/publicRelations/pressReleaseAdd">
                        <button className="btn btn-blue btn-120">글쓰기</button>
                    </Link>
                </div>
                <div className="table-wrap">
                    <table>
                        <colgroup>
                            <col width="10%" />
                            <col width="5%" />
                            <col width="15%" />
                            <col width="45%" />
                            <col width="10%" />
                            <col width="15%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>
                                    <label htmlFor="allchk">
                                        <input 
                                            type="checkbox" 
                                            id="allchk" 
                                            onChange={(e) => handleAllCheck(e.target.checked)}
                                            checked={checkItems.length === boardList.length ? true : false}
                                        />
                                        <span className="chkimg"></span>
                                    </label>
                                </th>
                                <th>번호</th>
                                <th className="pl40">미리보기</th>
                                <th>제목</th>
                                <th>작성일</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boardList.map((list, index) => (
                                <tr key={index}>
                                    <th>
                                        <label htmlFor={`p01-${index}`}>
                                            <input 
                                                type="checkbox" 
                                                id={`p01-${index}`} 
                                                onChange={(e) => handleSingleCheck(e.target.checked, list.boardId)}
                                                checked={checkItems.includes(list.boardId) ? true : false}
                                            />
                                            <span className="chkimg"></span>
                                        </label>
                                    </th>
                                    <td>{list.rnum}</td>
                                    <td className="pl40">
                                        <div className="shape-150"></div>
                                    </td>
                                    <td className="tal pl40">
                                        <Link to={`/admin/publicRelations/pressReleaseInfo/${list.boardId}`}>
                                            <span className="pop-name">{list.boardTitle}</span>
                                        </Link>
                                    </td>
                                    <td>
                                        <span className="pop-date">{list.createdDatetime}</span>
                                    </td>
                                    <td>
                                        <Link to={`/admin/publicRelations/pressReleaseMod/${list.boardId}`}>
                                            <button className="btn">수정</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="paging">
                    <NavLink to="" className="prev-btn">
                        <i></i>
                        <span className="text_blind">이전</span>
                    </NavLink>
                    <ul>
                        <li className="current">
                            <NavLink to="">1</NavLink>
                        </li>
                        <li>
                            <NavLink to="">2</NavLink>
                        </li>
                        <li>
                            <NavLink to="">3</NavLink>
                        </li>
                        <li>
                            <NavLink to="">4</NavLink>
                        </li>
                        <li>
                            <NavLink to="">5</NavLink>
                        </li>
                    </ul>
                    <NavLink to="" className="next-btn">
                        <i></i>
                        <span className="text_blind">다음</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default PressReleaseListForm;