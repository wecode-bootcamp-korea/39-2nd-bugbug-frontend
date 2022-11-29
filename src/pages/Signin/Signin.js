import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from './OAuth';
import img1 from '../../images/Signin/img1.jpg';
import img2 from '../../images/Signin/img2.jpg';
import img3 from '../../images/Signin/img3.jpg';
import img4 from '../../images/Signin/img4.jpg';
import img5 from '../../images/Signin/img5.jpg';

export default function Signin() {
  //img 랜덤으로 띄어주는 변수
  const backgroundArr = [img1, img2, img3, img4, img5];
  const randomIndex = Math.floor(Math.random() * backgroundArr.length);
  const backgroundImg = backgroundArr[randomIndex];

  return (
    <Container backgroundImg={backgroundImg}>
      <JoinBox>
        <div>
          <Title>로그인</Title>
        </div>
        <div>
          <KakaoLink href={KAKAO_AUTH_URL}>
            <KakaoBtnImg
              src="images/Signin/kakao_login_medium_wide.png"
              alt="Kakaotalk Logo Img"
            />
          </KakaoLink>
        </div>

        <div>
          <AnotherSigninGuide>다른 방법으로 로그인</AnotherSigninGuide>
          <NavBtnImg
            src="images/Signin/btnG_아이콘원형.png"
            alt="Naver Logo Img "
          />
          <FbBtnImg
            src="images/Signin/f_logo_RGB-Blue_72.png"
            alt="Meta Logo Img"
          />
          <AppBtnImg
            src="images/Signin/appleid_button@2x (1).png"
            alt="Apple Logo Img"
          />
        </div>
        <div>
          <IsSigninOrSignup>
            아직 벅벅 계정이 없으신가요?
            <SigninBox to="/Signup">회원가입</SigninBox>
          </IsSigninOrSignup>
        </div>
      </JoinBox>
    </Container>
  );
}

const Container = styled.div`
  background-image: ${props => `url(${props.backgroundImg})`};
  margin: 0px;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

const JoinBox = styled.div`
  //로그인 박스
  width: 380px;
  padding: 65px;
  background-color: white;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  //구도
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 25px;
  font-weight: bold;
  color: rgb(13, 13, 13);
`;

const KakaoLink = styled.a`
  width: 300px;
  height: 45px;
`;

const KakaoBtnImg = styled.img`
  margin-bottom: 50px;
  width: 300px;
  height: 45px;
  cursor: pointer;
`;

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

const SigninBox = styled(Link)`
  cursor: pointer;
  margin: 5px;
  color: rgb(39, 163, 255);
  text-decoration: underline;
`;

const IsSigninOrSignup = styled.p`
  font-size: 12px;
  color: rgb(158, 158, 158);
`;
