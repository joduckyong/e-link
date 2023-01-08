import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientBoard } from 'store/boardReducer';
import Pagination from 'react-js-pagination';
import AOS from 'aos';
import classnames from 'classnames';
import moment from 'moment';

export function changeFormat(date, format) {
    //moment 변환을 함수로 미리 빼 두어서 사용.
    if (moment(date).isValid()) {
      return moment(date).format(format);
    } else {
      return null;
    }
  }

const PostingForm = () => {

    const dispatch = useDispatch();
    const boardList = useSelector((state) => state.boardReducer.data);
    const totalCount = useSelector((state) => state.boardReducer.totalCount);
    const [jobType, setJobType] = useState('');
    const [page, setPage] = useState(1);
    const [activeMenu1, setActiveMenu1] = useState(false);
    const [activeMenu2, setActiveMenu2] = useState(false);

    useEffect(() => {
        AOS.init();
    });

    const onClickMenuLink = (menu) => {
        if(menu === '1'){
            setActiveMenu1(!activeMenu1);
            setActiveMenu2(false);
        }else if(menu === '2'){
            setActiveMenu1(false);
            setActiveMenu2(!activeMenu2);
        }
    }

    useEffect(() => {
        const newList = { boardId: 'JOB', pageIndex: page, boardType: jobType};
        dispatch(selectClientBoard(newList));
    }, [dispatch, page, jobType]);

    const pageClick = (page) => {
        setPage(page);
        onSearch(page);
      };
    
    const onSearch = (page) => {
        const newList = { boardId: 'JOB', pageIndex: page};
        dispatch(selectClientBoard(newList));
    };

    const getboardType = (type) => {
        let boardTypeName = '';
        if(type === '1'){
            boardTypeName = '신입';
        }else if(type === '2'){
            boardTypeName = '경력';
        }else if(type === '3'){
            boardTypeName = '인턴';
        }

        return boardTypeName;
    }

  return (
    <div className="sub sub05">
        <div className="sub-top">
            <div className="bg big-frame"></div>
            <div className="txt-wrap wrap">
                <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">채용공고</h2>
                <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
                    <li><NavLink to="/"><img src="./../../img/sub/ico-home.svg" alt="" /></NavLink></li>
                    <li className={classnames('link', {show: activeMenu1})}>
                        <NavLink to="" onClick={(e) => onClickMenuLink('1')}>채용정보</NavLink>
                        <ul className={classnames('links', {active: activeMenu1})}>
                            <li><NavLink to="/company/lselink">회사소개</NavLink></li>
                            <li><NavLink to="/business/e-link/evcharge">사업영역</NavLink></li>
                            <li><NavLink to="/investment/management">투자정보</NavLink></li>
                            <li><NavLink to="/pr/press-list">홍보센터</NavLink></li>
                            <li><NavLink to="/recruit/people" className="on">채용정보</NavLink></li>
                            <li><NavLink to="/contactus">Contact Us</NavLink></li>
                            <li><NavLink to="">EV 충전소</NavLink></li>
                        </ul>
                    </li>
                    <li className={classnames('on link', {show: activeMenu2})}>
                        <NavLink to="" onClick={(e) => onClickMenuLink('2')}>채용공고</NavLink>
                        <ul className={classnames('links', {active: activeMenu2})}>
                            <li><NavLink to="/recruit/people">인재상</NavLink></li>
                            <li><NavLink to="/recruit/benefits">복리후생</NavLink></li>
                            <li><NavLink to="/recruit/posting" className="on">채용공고</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div className="content">
            <div className="wrap">
                <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">LS E-Link는 도전적이고,<br />창의적인 인재를 기다리고 있습니다.</h3>
                <ul className="hire-tab">
                    <li className={jobType === '' && 'on'}><NavLink to="" onClick={e => setJobType('')}>전체</NavLink></li>
                    <li className={jobType === '1' && 'on'}><NavLink to="" onClick={e => setJobType('1')}>신입</NavLink></li>
                    <li className={jobType === '2' && 'on'}><NavLink to="" onClick={e => setJobType('2')}>경력</NavLink></li>
                    <li className={jobType === '3' && 'on'}><NavLink to="" onClick={e => setJobType('3')}>인턴</NavLink></li>
                </ul>   
                <ul className="hire-list">
                    {boardList.map((list, index) => (
                        <li key={index}>
                            <NavLink to={`/recruit/posting-view/${list.boardId}`}>
                                <div className="division">
                                    <span>{getboardType(list.boardType)}</span>
                                    <p>{changeFormat(list.boardStartDatetime, 'yyyy-MM-DD HH:mm') || ''} - {changeFormat(list.boardEndDatetime, 'yyyy-MM-DD HH:mm') || ''}</p>
                                </div>
                                <div className="tit">{list.boardTitle}</div>
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

export default PostingForm;
