import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientBoard } from 'store/boardReducer';
import Pagination from 'react-js-pagination';
import ViewImage from 'components/common/ViewImage';
import AOS from 'aos';
import classnames from 'classnames';

const PresslistForm = () => {

    const dispatch = useDispatch();
    const boardList = useSelector((state) => state.boardReducer.data);
    const [searchKeyword, setSearchKeyword] = useState(null);
    const totalCount = useSelector((state) => state.boardReducer.totalCount);
    const [page, setPage] = useState(1);

    const [activeMenu1, setActiveMenu1] = useState(false);
    const [activeMenu2, setActiveMenu2] = useState(false);

    useEffect(() => {
        AOS.init();
    });

    useEffect(() => {
        const newList = { boardId: 'PRE', pageIndex: page };
            dispatch(selectClientBoard(newList));
        }, [dispatch, page]);
        
    const pageClick = (page) => {
        setPage(page);
        onSearch(page);
    };
    
    const onSearch = (page) => {
        const newList = { boardId: 'PRE', pageIndex: page, searchKeyword: searchKeyword };
        dispatch(selectClientBoard(newList));
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
          onSearch(0);
        }
    };

    const onClickMenuLink = (menu) => {
        if(menu === '1'){
            setActiveMenu1(!activeMenu1);
            setActiveMenu2(false);
        }else if(menu === '2'){
            setActiveMenu1(false);
            setActiveMenu2(!activeMenu2);
        }
    }

  return (
    <div className="sub sub04">
        <div className="sub-top">
            <div className="bg big-frame"></div>
            <div className="txt-wrap wrap">
                <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">보도자료</h2>
                <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
                    <li><NavLink to="/"><img src="./../../img/sub/ico-home.svg" alt="" /></NavLink></li>
                    <li className={classnames('link', {show: activeMenu1})}>
                        <NavLink to="" onClick={(e) => onClickMenuLink('1')}>홍보센터</NavLink>
                        <ul className={classnames('links', {active: activeMenu1})}>
                            <li><NavLink to="/company/lselink">회사소개</NavLink></li>
                            <li><NavLink to="/business/e-link/evcharge">사업영역</NavLink></li>
                            <li><NavLink to="/investment/management">투자정보</NavLink></li>
                            <li><NavLink to="/pr/press-list" className="on">홍보센터</NavLink></li>
                            <li><NavLink to="/recruit/people">채용정보</NavLink></li>
                            <li><NavLink to="/contactus">Contact Us</NavLink></li>
                            <li><NavLink to="">EV 충전소</NavLink></li>
                        </ul>
                    </li>
                    <li className={classnames('on link', {show: activeMenu2})}>
                        <NavLink to="" onClick={(e) => onClickMenuLink('2')}>보도자료</NavLink>
                        <ul className={classnames('links', {active: activeMenu2})}>
                            <li><NavLink to="/pr/press-list" className="on">보도자료</NavLink></li>
                            <li><NavLink to="/pr/media-list">미디어</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div className="content">
            <div className="wrap">
                <div className="list-top">
                    <p className="t-ver">
                        Total <strong>{totalCount}</strong> / {Math.ceil(totalCount/10)} Page
                    </p>
                    <div className="sh-box">
                        <input
                            type="text"
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            value={searchKeyword || ''}
                            onKeyPress={onKeyPress}
                        />
                        <button onClick={() => onSearch(0)}><img src="../../img/common/ico-search.svg" alt="" /></button>
                    </div>
                </div>
                <ul className="con4-list-box">
                    {boardList.map((list, index) => (
                        <li>
                            <NavLink to={`/pr/press-view/${list.boardId}`}>
                                <div className="img">
                                    <ViewImage fileNm={list.thumbNm} basicStyle={true}/>
                                </div>
                                <div className="text">
                                    <div className="list-num"><span>No.{(totalCount+1)-list.rnum}</span>{list.createdDatetime}</div>
                                    <div className="tit-wrap">{list.boardTitle}</div>
                                    <p>
                                        {list.boardContents.length > 150 ? list.boardContents.substring(0,150) + '...' : list.boardContents}
                                    </p>
                                </div>
                            </NavLink>
                        </li>
                    ))}
                    </ul>
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
        </div>
  );
};

export default PresslistForm;
