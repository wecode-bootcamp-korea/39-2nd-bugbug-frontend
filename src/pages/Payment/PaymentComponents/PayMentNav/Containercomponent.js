import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Containercomponent = () => {
  return (
    <Header>
      <Container>
        <HomeLink to="/">
          <img alt="로고" src="/images/Payment/myproject.png" />
        </HomeLink>
        <LogoHeader>프로젝트 후원하기</LogoHeader>
      </Container>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  position: relative;
  z-index: 999;
  align-items: center;
  width: 100%;
  height: 65px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(10 10 10 / 10%) 0px 1px 2px 0px;
  -webkit-box-align: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1160px;
  min-height: 58px;
  margin: 0px auto;
  padding: 0px;
  text-align: left;
  -webkit-box-align: center;
  img {
    width: 115px;
  }
`;
const HomeLink = styled(Link)`
  display: flex;
  background: transparent;
`;
const LogoHeader = styled.span`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 12px;
  color: rgb(61, 61, 61);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.02em;
  line-height: 27px;
  -webkit-box-align: center;
  &:before {
    content: '·';
    box-sizing: inherit;
    margin: 0px 12px 0px 0px;
  }
`;

export default Containercomponent;
