import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard, deleteBoardIds, selectPinupId, updatePinupId } from 'store/boardEnReducer';
import Pagination from 'react-js-pagination';
import ViewImage from 'components/common/ViewImage';
import classnames from 'classnames';

const YoutubeImage = ({ url, width, height }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (url) {
      const param = url.indexOf('v=') > -1 ? url.substring(url.indexOf('v=') + 2) : '';
      const imgUrl = 'https://img.youtube.com/vi/' + param + '/0.jpg';
      setImageUrl(imgUrl);
    }
  }, [url]);

  return url !== null && <img src={imageUrl} alt="" width={width} height={height} />;
};

const MediaListEnForm = () => {
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardEnReducer.data);
  const totalCount = useSelector((state) => state.boardEnReducer.totalCount);
  const pinupId = useSelector((state) => state.boardEnReducer.pinupData);
  const [checkItems, setCheckItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newList = { boardId: 'MED', pageIndex: page };
    dispatch(selectBoard(newList));
    dispatch(selectPinupId());
  }, [dispatch, page]);

  const pageClick = (page) => {
    setPage(page);
    onSearch(page);
  };

  const onSearch = (page) => {
    const newList = { boardId: 'MED', pageIndex: page };
    dispatch(selectBoard(newList));
    dispatch(selectPinupId());
  };

  const onRemove = (e) => {
    e.preventDefault();

    if (checkItems.length === 0) {
      alert('항목을 선택하세요');
      return;
    }

    if (window.confirm('삭제 하시겠습니까?')) {
      const newList = { ids: checkItems };

      dispatch(deleteBoardIds(newList)).then(() => {
        const newList = { boardId: 'MED', pageIndex: page };
        dispatch(selectBoard(newList));
      });
    }
  };

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

  const onClickStar = (id) => {
    const newList = { boardId: id };

    dispatch(updatePinupId(newList)).then(() => {
      dispatch(selectPinupId());
    });
  };

  return (
    <div className="a-content">
      <ul className="sub-tab">
        <li>
          <Link to="/admin/publicRelations/media">국문</Link>
        </li>
        <li className="active">
          <Link to="/admin/publicRelations/mediaEn">영문</Link>
        </li>
      </ul>
      <h2>
        미디어 관리<span>총 {totalCount}건</span>
      </h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <button className="btn btn-red btn-120" onClick={onRemove}>
            선택삭제
          </button>
          <Link to="/admin/publicRelations/mediaAddEn">
            <button className="btn btn-blue btn-120">글쓰기</button>
          </Link>
        </div>
        <div className="table-wrap">
          <table>
            <colgroup>
              <col width="10%" />
              <col width="5%" />
              <col width="5%" />
              <col width="15%" />
              <col width="40%" />
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
                <th></th>
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
                  <td className={classnames('star-chk', { on: pinupId === list.boardId })} onClick={(e) => onClickStar(`${list.boardId}`)}></td>
                  <td>{totalCount - (list.rnum - 1)}</td>
                  <td className="pl40">
                    <div className="shape-150">
                      {list.thumbNm ? (
                        <ViewImage fileNm={list.thumbNm} basicStyle={false} width={150} height={80} />
                      ) : list.url ? (
                        <YoutubeImage url={list.url} width={150} height={80} />
                      ) : (
                        <img src="/img/logo/non.png" width={150} height={80} alt="" />
                      )}
                    </div>
                  </td>
                  <td className="tal pl40">
                    <Link to={`/admin/publicRelations/mediaInfoEn/${list.boardId}`}>
                      <span className="pop-name">{list.boardTitle}</span>
                    </Link>
                  </td>
                  <td>
                    <span className="pop-date">{list.createdDatetime}</span>
                  </td>
                  <td>
                    <Link to={`/admin/publicRelations/mediaModEn/${list.boardId}`}>
                      <button className="btn">수정</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="paging">
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={totalCount}
            pageRangeDisplayed={10}
            prevPageText={'‹'}
            nextPageText={'›'}
            onChange={pageClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaListEnForm;
