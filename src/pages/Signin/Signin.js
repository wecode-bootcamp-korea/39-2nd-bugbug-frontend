import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Signin() {
  return (
    <div>
      <Container>
        <JoinWrap>
          <JoinBox>
            <Title>로그인</Title>
            <KakaoBtnImg src="images/Signin/kakao_login_medium_wide.png"></KakaoBtnImg>
            <IsSigninOrSignup>
              아직 벅벅 계정이 없으신가요?
              <Link to="/Signup">
                <LoginSpan>회원가입</LoginSpan>
              </Link>
            </IsSigninOrSignup>
          </JoinBox>
        </JoinWrap>
      </Container>
    </div>
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
  height: 500px;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JoinBox = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: rgb(13, 13, 13);
`;

const KakaoBtnImg = styled.img`
  width: 300px;
  cursor: pointer;
`;

const LoginSpan = styled.span`
  margin: 5px;
  cursor: pointer;
  color: rgb(39, 163, 255);
  text-decoration: underline;
`;

const IsSigninOrSignup = styled.p`
  font-size: 12px;
  color: rgb(158, 158, 158);
`;
