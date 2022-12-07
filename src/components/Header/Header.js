import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  // 로그인 상태
  const isLogin = JSON.parse(localStorage.getItem('token'));
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState('');

  function logout() {
    localStorage.removeItem('token');
    navigate('/');
  }

  useEffect(() => {
    if (isLogin) {
      fetch(`http://10.58.52.97:3000/user/info`, {
        headers: {
          authorization: isLogin,
        },
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setLoginId(result);
        });
    }
  }, []);

  return (
    <HeaderWrap>
      <Inner>
        <LogoLink to="/">
          <img src="/images/header/logo.png" alt="BugBug" />
        </LogoLink>

        <div>
          {isLogin && (
            <>
              <BtnUpload
                onClick={() => {
                  navigate('/Projectupload');
                }}
              >
                <span>프로젝트 올리기 시작하기</span>
              </BtnUpload>
              <BtnLoginStatus>
                <span>{loginId.nickname}</span>
              </BtnLoginStatus>
              <BtnLoginStatus onClick={logout}>
                <span>로그아웃</span>
              </BtnLoginStatus>
            </>
          )}
          {!isLogin && (
            <BtnLoginStatus
              onClick={() => {
                navigate('/signin');
              }}
            >
              <span>회원가입/로그인</span>
            </BtnLoginStatus>
          )}
        </div>
      </Inner>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 6px;
  button {
    cursor: pointer;
  }
  .logo-box {
    font-size: 0;
  }
`;
const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1160px;
  height: 56px;
`;
const LogoLink = styled(Link)`
  display: inline-block;
  height: 36px;
  img {
    height: 100%;
  }
`;

const BtnUpload = styled.button`
  display: inline-block;
  padding: 0 10px;
  height: 44px;
  border: 1px solid rgb(255, 87, 87);
  border-radius: 4px;
  text-align: center;
  background: rgb(255, 87, 87);
  span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
`;
const BtnLoginStatus = styled.button`
  margin-left: 10px;
  display: inline-block;
  padding: 0 10px;
  height: 44px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  text-align: center;
  background: transparent;
  span {
    font-size: 14px;
    font-weight: bold;
  }
`;
