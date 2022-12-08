import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from './components/ProductCard/ProductCard';
import { BASE_URL } from '../../config';

export default function Main() {
  const [productInfo, setProductInfo] = useState([]);

  function filterHandle(category) {
    fetch(`${BASE_URL}/projects?type=${category}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setProductInfo(result));
  }

  return (
    <MainContainer>
      <NavWrap>
        <NavItemWrap>
          <Link to="/">
            <NavItem>
              <img src="./images/main/icon-all.png" />
              전체
            </NavItem>
          </Link>
          <Link
            to="/"
            onClick={() => {
              filterHandle(1);
            }}
          >
            <NavItem>
              <img src="./images/main/icon-tech.png" />
              테크 · 가전
            </NavItem>
          </Link>
          <Link
            to="/"
            onClick={() => {
              filterHandle(2);
            }}
          >
            <NavItem>
              <img src="./images/main/icon-other.png" />
              잡화
            </NavItem>
          </Link>
        </NavItemWrap>
      </NavWrap>
      <MainWrap>
        <ListContainer>
          <ProductConter>
            <span>{productInfo.length}</span>개의 프로젝트가 있습니다.
          </ProductConter>
          <ProductList>
            {productInfo.map(info => {
              return <ProductCard key={info.id} {...info} />;
            })}
          </ProductList>
        </ListContainer>
      </MainWrap>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
`;

const MainWrap = styled.div`
  padding: 0px 0px 64px;
`;

const NavWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1160px;
  margin: 0px auto;
  user-select: none;
`;

const NavItemWrap = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px 12px;

  a {
    color: #3d3d3d;
    text-decoration: none;

    &:hover,
    :active {
      transition: 0.5s;
      background-color: #f0f0f080;
      font-weight: 600;
    }
  }
`;

const NavItem = styled.li`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  padding: 10px 10px 10px 0px;
  cursor: pointer;

  img {
    width: 24px;
    margin: 10px;
  }
`;

const ListContainer = styled.div`
  position: relative;
  width: 1160px;
  height: auto;
  min-height: 150px;
  margin: 0px auto;
  margin-bottom: -44px;
  padding: 0px;
`;

const ProductConter = styled.div`
  padding: 6px 16px 26px;
  color: #3d3d3d;
  font-size: 16px;

  span {
    color: #fe5f4c;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0px 8px;
`;
