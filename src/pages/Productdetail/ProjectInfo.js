import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ProductInfo() {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetch('/data/productInfo.json')
      .then(response => response.json())
      .then(result => setProductInfo(result[0]));
  }, []);

  const { productId, fundingPrice, gift } = productInfo;

  if (productInfo.length === 0) return null;

  return (
    <ProjectContents key={productId}>
      <ProjectContentsWrap>
        <MainColumn>
          <p>| 프로젝트 소개</p>
          <ProjectDesc>
            <span>내용샬라샬라라라라</span>
          </ProjectDesc>
        </MainColumn>
        <SubColumn>
          <CreatorCard>
            <p>창작자 소개</p>
            <CreatorName>취향더쿠</CreatorName>
            <CreatorDesc>세상의 모든 창작자를 위한 브랜드</CreatorDesc>
          </CreatorCard>
          <p>선물 선택</p>
          <GiftCard>
            <GiftPrice>{fundingPrice.toLocaleString()}원 +</GiftPrice>
            <GiftDesc>{gift}</GiftDesc>
            {/* <Link key={id} to={`/detail/${id}`}> */}
            <PrimaryBtn>{fundingPrice.toLocaleString()}원 후원하기</PrimaryBtn>
          </GiftCard>
        </SubColumn>
      </ProjectContentsWrap>
    </ProjectContents>
  );
}

const PrimaryBtn = styled.button`
  width: 100%;
  height: 52px;
  padding: 0px 10px;
  color: #fff;
  background-color: #ff5757;
  border: 0px;
  font-size: 15px;
  font-weight: 700;
`;

const ProjectContents = styled.div`
  padding-top: 56px;
  width: 1040px;
  margin: 0px auto;
`;

const ProjectContentsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 38px;
  margin: 0px auto;
  padding-bottom: 25px;
`;

const MainColumn = styled.div`
  width: 650px;

  p {
    padding-bottom: 24px;
    font-size: 18px;
    font-weight: bolder;
  }
`;

const ProjectDesc = styled.div`
  span {
    font-size: 14px;
  }
`;

const SubColumn = styled.div`
  display: block;
  width: 352px;

  p {
    padding: 5px 0px 20px;
    font-size: 14px;
    font-weight: bolder;
  }
`;

const CreatorCard = styled.div`
  padding: 20px 16px;
  margin-bottom: 24px;
  border: 1px solid #efefef;
  border-radius: 4px;
`;

const CreatorName = styled.span`
  color: #3d3d3d;
  font-size: 14px;
  font-weight: 600;
`;

const CreatorDesc = styled.div`
  display: block;
  padding-top: 18px;
  color: #6d6d6d;
  font-size: 13px;
  font-weight: 400;
`;

const GiftCard = styled.div`
  padding: 20px;
  border: 1px solid #efefef;
  border-radius: 4px;
`;

const GiftPrice = styled.div`
  margin: 0 0 18px;
  color: #3d3d3d;
  font-size: 24px;
  font-weight: 700;
`;

const GiftDesc = styled.li`
  position: relative;
  margin: 0 0 4px;
  padding: 0 0 20px 10px;
  color: #6d6d6d;
  font-size: 12px;
  font-weight: 400;
  list-style: none;

  ::before {
    content: '·';
    position: absolute;
    left: 1px;
    font-weight: bolder;
  }
`;
