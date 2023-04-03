import React, { useState } from 'react';
import Pagination from 'react-js-pagination';

const OutlineForm = () => {
  const totalCount = 0;
  const [page, setPage] = useState(1);

  const pageClick = (page) => {
    setPage(page);
  };
  return (
    <div class="a-content">
      <h2>
        연혁<span>총 6건</span>
      </h2>
      <div class="ban-list p0">
        <div class="btn-area position">
          <button class="btn btn-blue btn-120">연도생성</button>
        </div>
        <div class="table-wrap">
          <ul class="year-wp">
            {/* <!-- [s] 수정 눌렀을 때 --> */}
            <li>
              <div class="year-hd">
                <button class="delete">
                  <img src="/img/admin/year-close.png" alt="삭제" />
                </button>
                <input type="text" placeholder="yyyy" maxlength="4" />
              </div>
              <ul class="year-bd">
                <li class="active">
                  {/*  <div class="arrow-wp">
          <button class="arrow-btn"><img src="/img/admin/year-arrow.png" alt="위로"/></button>
          <button class="arrow-btn"><img src="/img/admin/year-arrow.png" alt="아래로"/></button>
        </div>  */}
                  <div class="input-wp">
                    <input type="text" placeholder="mm" maxlength="2" />
                    <input type="text" placeholder="dd" maxlength="2" />
                    <input type="text" placeholder="내용을 입력해주세요." />
                  </div>
                  <div class="btn-wp">
                    <button class="gray-btn">등록</button>
                    <button class="red-btn">삭제</button>
                  </div>
                </li>
              </ul>
              <button class="add-btn">+ 내용추가</button>
            </li>
            {/* <!-- [e] 수정 눌렀을 때 --> */}

            <li>
              <div class="year-hd">
                <button class="delete">
                  <img src="/img/admin/year-close.png" alt="삭제" />
                </button>
                <input type="text" value="2023" disabled />
              </div>
              <ul class="year-bd">
                <li>
                  {/*  <div class="arrow-wp">
          <button class="arrow-btn"><img src="/img/admin/year-arrow.png" alt="위로"/></button>
          <button class="arrow-btn"><img src="/img/admin/year-arrow.png" alt="아래로"/></button>
        </div>  */}
                  <div class="input-wp">
                    <input type="text" value="07" disabled />
                    <input type="text" value="08" disabled />
                    <input type="text" value="전기공사업 등록" disabled />
                  </div>
                  <div class="btn-wp">
                    <button class="white-btn">수정</button>
                    <button class="red-btn">삭제</button>
                  </div>
                </li>
                <li>
                  {/*  <div class="arrow-wp">
          <button class="arrow-btn"><img src="/img/admin/year-arrow.png" alt="위로"/></button>
          <button class="arrow-btn"><img src="/img/admin/year-arrow.png" alt="아래로"/></button>
        </div>  */}
                  <div class="input-wp">
                    <input type="text" placeholder="mm" maxlength="2" />
                    <input type="text" placeholder="dd" maxlength="2" />
                    <input type="text" placeholder="내용을 입력해주세요." />
                  </div>
                  <div class="btn-wp">
                    <button class="gray-btn">등록</button>
                    <button class="red-btn">삭제</button>
                  </div>
                </li>
              </ul>
              <button class="add-btn">+ 내용추가</button>
            </li>
          </ul>
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

export default OutlineForm;
