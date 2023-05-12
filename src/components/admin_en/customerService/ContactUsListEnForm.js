import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactUs, deleteContactUsIds } from 'store/contactUsEnReducer';
import Pagination from 'react-js-pagination';

const ContactUsListEnForm = () => {
  const dispatch = useDispatch();
  const contactUsList = useSelector((state) => state.contactUsEnReducer.data);
  const totalCount = useSelector((state) => state.contactUsEnReducer.totalCount);
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [checkItems, setCheckItems] = useState([]);
  const [selectItem, setSelectItem] = useState('');
  const [page, setPage] = useState(1);
  const [contactType, setContactType] = useState('A'); // A: 상담신청, B: 불편신고, C: 문의하기

  useEffect(() => {
    const newList = { contactId: 'EN_CON', contactType: contactType, pageIndex: page };
    dispatch(selectContactUs(newList));
  }, [dispatch, page, contactType]);

  const pageClick = (page) => {
    setPage(page);
    onSearch(page);
  };

  const onSearch = (page) => {
    const newList = { contactId: 'EN_CON', contactType: contactType, pageIndex: page, searchKeyword: searchKeyword, searchCondition: selectItem };
    dispatch(selectContactUs(newList));
  };

  const onRemove = (e) => {
    e.preventDefault();

    if (checkItems.length === 0) {
      alert('항목을 선택하세요');
      return;
    }

    if (window.confirm('삭제 하시겠습니까?')) {
      const newList = { ids: checkItems };

      dispatch(deleteContactUsIds(newList)).then(() => {
        const newList = { contactId: 'EN_CON', pageIndex: page };
        dispatch(selectContactUs(newList));
      });
    }
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(0);
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
      contactUsList.forEach((el) => idArray.push(el.contactId));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const onContactType = (type) => {
    setContactType(type);
    setSearchKeyword('');
    setCheckItems([]);
    setSelectItem('');
    setPage(1);
  };

  return (
    <div className="a-content">
      <ul className="sub-tab">
        <li>
          <Link to="/admin/customerService/contactUs">국문</Link>
        </li>
        <li className="active">
          <Link to="/admin/customerService/contactUsEn">영문</Link>
        </li>
      </ul>
      <h2>
        Contact Us<span>총 {totalCount}건</span>
      </h2>
      <ul className="sub-tab">
        <li className={contactType === 'A' && 'active'}>
          <Link to="" onClick={() => onContactType('A')}>
            상담신청
          </Link>
        </li>
        <li className={contactType === 'B' && 'active'}>
          <Link to="" onClick={() => onContactType('B')}>
            불편신고
          </Link>
        </li>
        <li className={contactType === 'C' && 'active'}>
          <Link to="" onClick={() => onContactType('C')}>
            문의하기
          </Link>
        </li>
      </ul>
      <div className="ban-list p0">
        <div className="search-box">
          <select name="searchCondition" onChange={(e) => setSelectItem(e.target.value)}>
            <option value="" selected={selectItem === '' && true}>
              전체
            </option>
            <option value="name" selected={selectItem === 'name' && true}>
              이름
            </option>
            <option value="title" selected={selectItem === 'title' && true}>
              제목
            </option>
            <option value="content" selected={selectItem === 'content' && true}>
              내용
            </option>
          </select>
          <div className="search-input">
            <input
              type="text"
              placeholder="검색어를 입력해주세요."
              name="contactTitle"
              onChange={(e) => setSearchKeyword(e.target.value)}
              value={searchKeyword || ''}
              onKeyPress={onKeyPress}
            />
            <button className="btn-primary" onClick={() => onSearch(0)}></button>
          </div>
        </div>
        <div className="btn-area position contact-btn">
          <button className="btn btn-red btn-120" onClick={onRemove}>
            선택삭제
          </button>
        </div>
        <div className="table-wrap">
          <table>
            <colgroup>
              <col width="7%" />
              <col width="7%" />
              <col width="7%" />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <label htmlFor="allchk">
                    <input
                      type="checkbox"
                      id="allchk"
                      onChange={(e) => handleAllCheck(e.target.checked)}
                      checked={checkItems.length === contactUsList.length ? true : false}
                    />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <th>번호</th>
                <th>이름</th>
                <th>연락처</th>
                <th>메일</th>
                <th>문의제목</th>
                <th>작성일</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {contactUsList.map((list, index) => (
                <tr key={index}>
                  <th>
                    <label htmlFor={`p01-${index}`}>
                      <input
                        type="checkbox"
                        id={`p01-${index}`}
                        onChange={(e) => handleSingleCheck(e.target.checked, list.contactId)}
                        checked={checkItems.includes(list.contactId) ? true : false}
                      />
                      <span className="chkimg"></span>
                    </label>
                  </th>
                  <td>{totalCount - (list.rnum - 1)}</td>
                  <td>{list.contactNm}</td>
                  <td>{list.contactPhone}</td>
                  <td>{list.contactMail}</td>
                  <td className="fb">{list.contactTitle}</td>
                  <td>{list.createdDatetime}</td>
                  <td>
                    <Link to={`/admin/customerService/contactUsInfoEn/${list.contactId}`}>
                      <button className="btn">보기</button>
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

export default ContactUsListEnForm;
