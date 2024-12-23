import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientBoard } from 'store/boardReducer';
import Pagination from 'react-js-pagination';
import ViewImage from 'components/common/ViewImage';
import AOS from 'aos';
import classnames from 'classnames';

const OtherViewImage = ({ text }) => {
  const [objectUrl, setObjectUrl] = useState('');
  const regex = /<img[^>]+src=[\\"']?([^>\\"']+)[\\"']?[^>]*>/g;
  const extractUrl = regex.exec(text);
  const style = {
    maxWidth: '100%',
    height: 'auto',
  };
  const width = 320;
  const height = 220;

  useEffect(() => {
    if (extractUrl) {
      const showImage = async () => {
        const response = await fetch(extractUrl[1], {
          method: 'GET',
        });

        const blob = await response.blob();

        let dataURI = '';
        const reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onload = function () {
          const tempImage = new Image();
          tempImage.src = reader.result;
          tempImage.onload = function () {
            const canvas = document.createElement('canvas');
            const canvasContext = canvas.getContext('2d');

            canvas.width = width;
            canvas.height = height;

            canvasContext.drawImage(this, 0, 0, width, height);

            dataURI = canvas.toDataURL(blob.type);
            setObjectUrl(dataURI);
          };
        };
      };

      showImage();
    }
  }, []);
  return extractUrl !== null && <img src={objectUrl} style={style} alt="" />;
};

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
    const newList = {
      boardId: 'PRE',
      pageIndex: page,
      searchKeyword: searchKeyword,
    };
    dispatch(selectClientBoard(newList));
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(0);
    }
  };

  const onClickMenuLink = (menu) => {
    if (menu === '1') {
      setActiveMenu1(!activeMenu1);
      setActiveMenu2(false);
    } else if (menu === '2') {
      setActiveMenu1(false);
      setActiveMenu2(!activeMenu2);
    }
  };

  const removeImgTag = (text) => {
    const regex = /<IMG(.*?)>/gi;
    return text.replace(regex, '');
  };

  return (
    <div className="sub sub04">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-delay="200"
          >
            뉴스
          </h2>
          <ul
            className="path"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <li>
              <NavLink to="/">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                투자정보 & 홍보센터
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/company/lselink">회사소개</NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/evcharge">사업영역</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/management" className="on">
                    투자정보 & 홍보센터
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/pr/press-list">홍보센터</NavLink>
                </li> */}
                <li>
                  <NavLink to="/recruit/people">채용정보</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/consult">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/ev/login">EV 충전소</NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                뉴스
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/investment/financial">재무정보</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/credit">공시정보</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/announce">공고</NavLink>
                </li>
                <li>
                  <NavLink to="/pr/press-list" className="on">
                    뉴스
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <div className="list-top">
            <p className="t-ver">
              Total <strong>{totalCount}</strong> / {Math.ceil(totalCount / 10)}{' '}
              Page
            </p>
            <div className="sh-box">
              <input
                type="text"
                onChange={(e) => setSearchKeyword(e.target.value)}
                value={searchKeyword || ''}
                onKeyPress={onKeyPress}
              />
              <button onClick={() => onSearch(0)}>
                <img src="/img/common/ico-search.svg" alt="" />
              </button>
            </div>
          </div>
          <ul className="con4-list-box">
            {boardList.map((list, index) => (
              <li>
                <NavLink to={`/pr/press-view/${list.boardId}`}>
                  <div className="img">
                    {list.thumbNm ? (
                      <ViewImage fileNm={list.thumbNm} basicStyle={true} />
                    ) : (
                      <OtherViewImage text={list.boardContents} />
                    )}
                  </div>
                  <div className="text">
                    <div className="list-num">
                      <span>No.{totalCount + 1 - list.rnum}</span>
                      {list.createdDatetime}
                    </div>
                    <div className="tit-wrap">{list.boardTitle}</div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          removeImgTag(list.boardContents).length > 200
                            ? removeImgTag(list.boardContents).substring(
                                0,
                                200,
                              ) + '...'
                            : removeImgTag(list.boardContents),
                      }}
                    ></p>
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
