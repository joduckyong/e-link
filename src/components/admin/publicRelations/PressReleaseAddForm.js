import React from 'react';

const PressReleaseAddForm = () => {
    return (
        <div className="a-content">
            <h2>보도자료 등록</h2>
            <div className="ban-list bg-white"> 
                <div className="btn-area position">
                    <button className="btn btn-white btn-120">취소</button>
                    <button className="btn btn-blue btn-120">등록</button>
                </div>
                <div className="edit">
                    <div className="ed-tit">
                        <div className="s-tit">제목</div>
                        <input type="text" placeholder="제목을 입력해주세요." />
                    </div>
                    <div className="ed-area">
                        <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력해주세요."></textarea>
                    </div>
                    <div className="ed-file">
                        <div className="s-tit">썸네일</div>
                        <div className="file-area">
                            <div className="input-box">
                                <label htmlFor="e-choice01" className="file-choice">
                                    <input type="file" id="e-choice01" className="file" />+ 파일선택
                                </label>
                                <span className="upload-name">선택된 파일 없음</span>
                            </div>
                        </div>
                    </div>
                    <div className="ed-file">
                        <div className="s-tit">첨부파일</div>
                        <div className="file-area">
                            <div className="input-box">
                                <label htmlFor="e-choice02" className="file-choice">
                                    <input type="file" id="e-choice02" className="file" />+ 파일선택
                                </label>
                                <span className="upload-name">선택된 파일 없음</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PressReleaseAddForm;