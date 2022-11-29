import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Signup() {
  return (
    <Container>
      <JoinWrap>
        <JoinBox>
          <Title>회원가입</Title>

          <KakaoBtnImg src="images/Signup/kakao_login_medium_wide.png" />

          <AnotherSigninBox>
            <AnotherSigninGuide>다른 방법으로 로그인</AnotherSigninGuide>
            <NavBtnImg src="images/Signup/btnG_아이콘원형.png" />
            <FbBtnImg src="images/Signup/f_logo_RGB-Blue_58.png" />
            <AppBtnImg src="images/Signup/appleid_button@2x (1).png" />
          </AnotherSigninBox>

          <IsSigninOrSignup>
            아직 벅벅 계정이 없으신가요?
            <Link to="/Signin">
              <LoginSpan>회원가입</LoginSpan>
            </Link>
          </IsSigninOrSignup>
        </JoinBox>
      </JoinWrap>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinWrap = styled.div`
  width: 400px;
  height: 450px;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 25px;
  font-weight: bold;
  color: rgb(13, 13, 13);
`;

const KakaoBtnImg = styled.img`
  margin-bottom: 50px;
  width: 300px;
  height: 45px;
  cursor: pointer;
`;

const AnotherSigninBox = styled.div``;

const AnotherSigninGuide = styled.p`
  font-size: 12px;
  color: rgb(158, 158, 158);
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const NavBtnImg = styled.img`
  width: 36.5px;
  height: 36.5px;
  cursor: pointer;
`;

const FbBtnImg = styled.img`
  width: 36.5px;
  height: 36.5px;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
`;

const AppBtnImg = styled.img`
  width: 36.5px;
  height: 36.5px;
  cursor: pointer;
`;

const LoginSpan = styled.span`
  cursor: pointer;
  margin: 5px;
  color: rgb(39, 163, 255);
  text-decoration: underline;
`;

const IsSigninOrSignup = styled.p`
  font-size: 12px;
  color: rgb(158, 158, 158);
`;
//
