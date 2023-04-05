import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectManagerInfo, updateManager } from 'store/managerReducer';

const MgmtModForm = () => {
  const [useYn, setUseYn] = useState('Y');
  const [adminNo, setAdminNo] = useState('');
  const [adminId, setAdminId] = useState('');
  const [adminNm, setAdminNm] = useState('');
  const [adminPw, setAdminPw] = useState('');
  const [adminPwC, setAdminPwC] = useState('');
  const [roleMain, setRoleMain] = useState('');
  const [roleProm, setRoleProm] = useState('');
  const [roleCont, setRoleCont] = useState('');
  const [roleMgm, setRoleMgm] = useState('');
  const [roleInve, setRoleInve] = useState('');
  const [roleJobs, setRoleJobs] = useState('');
  const [roleEvst, setRoleEvst] = useState('');

  const adminNmRef = useRef();
  const adminPwRef = useRef();

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const managerInfo = useSelector((state) => state.managerReducer.dataInfo);

  useEffect(() => {
    dispatch(selectManagerInfo(id));
  }, [dispatch, id]);

  useEffect(() => {
    setUseYn(managerInfo.useYn);
    setAdminNo(managerInfo.adminNo);
    setAdminId(managerInfo.adminId);
    setAdminNm(managerInfo.adminNm);
    setRoleMain(managerInfo.roleMain);
    setRoleProm(managerInfo.roleProm);
    setRoleCont(managerInfo.roleCont);
    setRoleMgm(managerInfo.roleMgm);
    setRoleInve(managerInfo.roleInve);
    setRoleJobs(managerInfo.roleJobs);
    setRoleEvst(managerInfo.roleEvst);
  }, [managerInfo]);

  const onEdit = async (e) => {
    e.preventDefault();

    if (adminNm === '') {
      alert('이름을 입력하세요');
      adminNmRef.current.focus();
      return;
    }

    if (adminPw === '') {
      alert('비밀번호를 입력하세요');
      adminPwRef.current.focus();
      return;
    }

    if(adminPw !== adminPwC){
      alert('비밀번호를 확인하세요');
      adminPwRef.current.focus();
      return;
    }

    if (window.confirm('수정 하시겠습니까?')) {
      const newList = {
        useYn: useYn
        , adminId: adminId
        , adminNm: adminNm
        , adminPw: adminPw
        , roleMain: roleMain
        , roleProm: roleProm 
        , roleCont: roleCont 
        , roleMgm: roleMgm 
        , roleInve: roleInve 
        , roleJobs: roleJobs 
        , roleEvst: roleEvst 
      };
      await dispatch(updateManager(newList));
      return navigate('/admin/role/mgmt');
    }
  };

  return (
    <div className="a-content a01">
      <h2>상세 관리자 정보</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <Link to="/admin/role/mgmt">
            <button className="btn btn-white btn-120">취소</button>
          </Link>
          <button className="btn btn-blue btn-120" onClick={onEdit}>수정</button>
        </div>
        <div className="ad-in">
          <div className="adinfor-area">
            <div className="ad-tit">
              <div className="s-tit mt0">상태</div>
              <div className="radio">
                <label htmlFor="active">
                  <input type="radio" id="active" name="dist" onChange={(e) => setUseYn(e.target.value)} value="Y" checked={useYn === 'Y' ? true : false} />
                  <span className="rdimg"></span>활성화
                </label>
                <label htmlFor="inactive">
                  <input type="radio" id="inactive" name="dist" onChange={(e) => setUseYn(e.target.value)} value="N" checked={useYn === 'N' ? true : false} />
                  <span className="rdimg"></span>비활성화
                </label>
              </div>
              <div className="s-tit">아이디</div>
              <input 
                type="text" 
                className="write-input"
                onChange={(e) => setAdminId(e.target.value)} 
                value={adminId}
                disabled={true} 
              />
              <div className="s-tit">이름</div>
              <input 
                type="text" 
                className="write-input" 
                ref={adminNmRef}
                onChange={(e) => setAdminNm(e.target.value)} 
                value={adminNm} 
              />
              <div className="s-tit">비밀번호</div>
              <input 
                type="password" 
                className="write-input" 
                ref={adminPwRef}
                onChange={(e) => setAdminPw(e.target.value)} 
                value={adminPw} 
              />
              <div className="s-tit">비밀번호 확인</div>
              <input 
                type="password" 
                className="write-input" 
                onChange={(e) => setAdminPwC(e.target.value)} 
                value={adminPwC} 
              />
            </div>
          </div>
          <div className="adinfor-area">
            <div className="ad-tit">
              <div className="s-tit mt0">권한</div>
              <div className="radio-wp">
                <p>메인페이지 관리</p>
                <div className="radio">
                  <label htmlFor="permit1">
                    <input type="radio" id="permit1" name="dist1" onChange={(e) => setRoleMain(e.target.value)} value="Y" checked={roleMain === 'Y' ? true : false} />
                    <span className="rdimg"></span>허용
                  </label>
                  <label htmlFor="nopermit1">
                    <input type="radio" id="nopermit1" name="dist1" onChange={(e) => setRoleMain(e.target.value)} value="N" checked={roleMain === 'N' ? true : false} />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
              <div className="radio-wp">
                <p>홍보센터 관리</p>
                <div className="radio">
                  <label htmlFor="permit2">
                    <input type="radio" id="permit2" name="dist2" onChange={(e) => setRoleProm(e.target.value)} value="Y" checked={roleProm === 'Y' ? true : false} />
                    <span className="rdimg"></span>허용
                  </label>
                  <label htmlFor="nopermit2">
                    <input type="radio" id="nopermit2" name="dist2" onChange={(e) => setRoleProm(e.target.value)} value="N" checked={roleProm === 'N' ? true : false} />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
              <div className="radio-wp">
                <p>Contact Us 관리</p>
                <div className="radio">
                  <label htmlFor="permit3">
                    <input type="radio" id="permit3" name="dist3" onChange={(e) => setRoleCont(e.target.value)} value="Y" checked={roleCont === 'Y' ? true : false} />
                    <span className="rdimg"></span>허용
                  </label>
                  <label htmlFor="nopermit3">
                    <input type="radio" id="nopermit3" name="dist3" onChange={(e) => setRoleCont(e.target.value)} value="N" checked={roleCont === 'N' ? true : false} />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
              <div className="radio-wp">
                <p>관리자권한 관리</p>
                <div className="radio">
                  <label htmlFor="permit4">
                    <input type="radio" id="permit4" name="dist4" onChange={(e) => setRoleMgm(e.target.value)} value="Y" checked={roleMgm === 'Y' ? true : false} />
                    <span className="rdimg"></span>허용
                  </label>
                  <label htmlFor="nopermit4">
                    <input type="radio" id="nopermit4" name="dist4" onChange={(e) => setRoleMgm(e.target.value)} value="N" checked={roleMgm === 'N' ? true : false} />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
              <div className="radio-wp">
                <p>투자정보 관리</p>
                <div className="radio">
                  <label htmlFor="permit5">
                    <input type="radio" id="permit5" name="dist5" onChange={(e) => setRoleInve(e.target.value)} value="Y" checked={roleInve === 'Y' ? true : false} />
                    <span className="rdimg"></span>허용
                  </label>
                  <label htmlFor="nopermit5">
                    <input type="radio" id="nopermit5" name="dist5" onChange={(e) => setRoleInve(e.target.value)} value="N" checked={roleInve === 'N' ? true : false} />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
              <div className="radio-wp">
                <p>채용정보 관리</p>
                <div className="radio">
                  <label htmlFor="permit6">
                    <input type="radio" id="permit6" name="dist6" onChange={(e) => setRoleJobs(e.target.value)} value="Y" checked={roleJobs === 'Y' ? true : false} />
                    <span className="rdimg"></span>허용
                  </label>
                  <label htmlFor="nopermit6">
                    <input type="radio" id="nopermit6" name="dist6" onChange={(e) => setRoleJobs(e.target.value)} value="N" checked={roleJobs === 'N' ? true : false} />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
              <div className="radio-wp">
                <p>EV충전소 관리</p>
                <div className="radio">
                  <label htmlFor="permit7">
                    <input type="radio" id="permit7" name="dist7" onChange={(e) => setRoleEvst(e.target.value)} value="Y" checked={roleEvst === 'Y' ? true : false} />
                    <span className="rdimg"></span>허용
                  </label>
                  <label htmlFor="nopermit7">
                    <input type="radio" id="nopermit7" name="dist7" onChange={(e) => setRoleEvst(e.target.value)} value="N" checked={roleEvst === 'N' ? true : false} />
                    <span className="rdimg"></span>허용안함
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MgmtModForm;
