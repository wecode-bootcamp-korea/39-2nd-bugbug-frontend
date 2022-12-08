import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../../config';

export default function ProjectSummary() {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/projects/1`)
      .then(response => response.json())
      .then(result => setProductInfo(result));
  }, []);

  const {
    id,
    type,
    name,
    img_url,
    gathered_amount,
    gathered_People,
    target_amount,
    opening,
    deadline,
    amountPercent,
  } = productInfo;

  if (productInfo.length === 0) return null;
  const today = new Date();

  let todayYear = today.getFullYear();
  let todayMonth = today.getMonth() + 1;
  let todayDate = today.getDate();
  let todayString = todayYear + '-' + todayMonth + '-' + todayDate;

  const getDateDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    const diffDate = date1.getTime() - date2.getTime();

    return Math.abs(diffDate / (1000 * 60 * 60 * 24));
  };

  const scrollBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <ProjectInfo key={id}>
      <ProjectInfoTop>
        <TopSection>
          <TopSectionWrap>
            <TypeBox>
              <span>
                <Link to="/">{type}</Link>
              </span>
            </TypeBox>
            <ProjectTitle>{name}</ProjectTitle>
          </TopSectionWrap>
        </TopSection>
        <LeftSection>
          <img src={img_url} />
        </LeftSection>
        <RightSection>
          <FundingStatus>
            <FundingStatusWrap>
              <StatusTitle>모인금액</StatusTitle>
              <StatusValue>
                <FundingAllPrice>
                  {gathered_amount.toLocaleString()}
                  <span>원</span>
                </FundingAllPrice>
                <FundingRate>{amountPercent}%</FundingRate>
              </StatusValue>
            </FundingStatusWrap>
            <FundingStatusWrap>
              <StatusTitle>남은시간</StatusTitle>
              <StatusValue>
                <FundingAllPrice>
                  {getDateDiff(todayString, deadline)}
                  <span>일</span>
                </FundingAllPrice>
              </StatusValue>
            </FundingStatusWrap>
            <FundingStatusWrap>
              <StatusTitle>후원자</StatusTitle>
              <StatusValue>
                <FundingAllPrice>
                  {gathered_People.toLocaleString()}
                  <span>명</span>
                </FundingAllPrice>
              </StatusValue>
            </FundingStatusWrap>
          </FundingStatus>
          <FundingInfo>
            <FundingInfoWrap>
              <FundingInfoItem>
                <FundingInfoTitle>목표금액</FundingInfoTitle>
                <FundingInfoDesc>
                  {Math.floor(target_amount).toLocaleString()}원
                </FundingInfoDesc>
              </FundingInfoItem>
              <FundingInfoItem>
                <FundingInfoTitle>펀딩 기간</FundingInfoTitle>
                <FundingInfoDesc>
                  {opening.substring(0, 10)} ~ {deadline.substring(0, 10)}
                  <Dday>
                    <span>{getDateDiff(todayString, deadline)}일</span>
                  </Dday>
                </FundingInfoDesc>
              </FundingInfoItem>
              <FundingInfoItem>
                <FundingInfoTitle>결제</FundingInfoTitle>
                <FundingInfoDesc>
                  목표금액 달성시 {deadline.substring(0, 10)}에 결제 진행
                </FundingInfoDesc>
              </FundingInfoItem>
            </FundingInfoWrap>
          </FundingInfo>
          <FundingBtns>
            <FundingBtnWrap>
              <PrimaryBtn onClick={scrollBottom}>
                이 프로젝트 후원하기{' '}
              </PrimaryBtn>
            </FundingBtnWrap>
          </FundingBtns>
        </RightSection>
      </ProjectInfoTop>
    </ProjectInfo>
  );
}

const ProjectInfo = styled.div`
  width: 1160px;
  margin: 0px auto;
`;

const ProjectInfoTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1032px;
  padding-bottom: 3rem;
  margin: 0px auto;
  border-bottom: 1px solid #e4e4e4;
`;

const TopSection = styled.div`
  display: flex;
  width: 100%;
  height: 214px;
  align-items: center;
`;

const TopSectionWrap = styled.div`
  display: block;
  margin: 0px auto;
  padding: 14px;
  text-align: center;
`;

const TypeBox = styled.div`
  a {
    text-decoration: none;
  }

  span {
    padding: 8px;
    background-color: #fafafa;
    border: 1px solid #efefef;
    border-radius: 2px;
    color: #757575;
    font-size: 12px;
    font-weight: 600;
  }
`;

const ProjectTitle = styled.h1`
  margin-top: 28px;
  font-size: 38px;
  font-weight: 700;
`;

const LeftSection = styled.div`
  width: 594px;
  height: auto;

  img {
    width: 594px;
  }
`;

const RightSection = styled.div`
  flex: 1 1 0px;
  margin: 0px 0px 0px 86px;
  width: 100%;
`;

const FundingStatus = styled.div`
  display: block;
  justify-content: space-between;
  margin: 0px 0px 8px;
  width: 100%;
`;

const FundingStatusWrap = styled.div`
  margin-bottom: 24px;
`;

const StatusTitle = styled.div`
  margin-bottom: 14px;
  font-size: 14px;
`;

const StatusValue = styled.div``;

const FundingAllPrice = styled.span`
  margin-right: 10px;
  font-size: 38px;
  font-weight: 500;

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

const FundingRate = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const FundingInfo = styled.div`
  margin-bottom: 14px;
`;

const FundingInfoWrap = styled.div`
  padding: 20px 0px 10px;
  border-top: 1px solid #f4f4f4;
`;

const FundingInfoItem = styled.dl`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const FundingInfoTitle = styled.dt`
  margin-right: 20px;
  width: 56px;
  color: #3d3d3d;
  font-size: 12px;
  font-weight: 700;
`;

const FundingInfoDesc = styled.dd`
  display: flex;
  align-items: center;
  color: #3d3d3d;
  font-size: 13px;
  font-weight: 400;
`;

const Dday = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  margin-left: 6px;
  padding: 2px 6px;
  color: #ff5757;
  background-color: #fdf4f3;
  border-radius: 2px;
  font-weight: 700;
  font-size: 10px;
`;

const FundingBtns = styled.div`
  display: block;
  width: 100%;
`;

const FundingBtnWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const PrimaryBtn = styled.button`
  width: 100%;
  height: 52px;
  padding: 0px 10px;
  color: #fff;
  background-color: #ff5757;
  border: 0px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;
`;
