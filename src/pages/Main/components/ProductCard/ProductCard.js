import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export default function ProductCard({
  id,
  type,
  img_url,
  creator_nickname,
  name,
  summary,
  gathered_amount,
  deadline,
  target_amount,
}) {
  if (!id) return null;

  const percent = Math.floor(
    (Math.floor(gathered_amount) / Math.floor(target_amount)) * 100
  );

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
  return (
    <CardBox key={id}>
      <CardWrap>
        <ImgBox>
          <Like>
            <LikeBtn />
          </Like>
          <Link key={id} to={`/productdetail/${id}`}>
            <ImgWrap>
              <img src={img_url} />
            </ImgWrap>
          </Link>
          <PickSticker>PICK</PickSticker>
        </ImgBox>
        <CardText>
          <TextBox>
            <Type>
              <span>{type}</span>
              <span>{creator_nickname}</span>
            </Type>
            <CardLink key={id} to={`/productdetail/${id}`}>
              <Title>{name}</Title>
            </CardLink>
            <Description>{summary}</Description>
          </TextBox>
          <StatusBox>
            <div>
              <Percent>{percent}%</Percent>
              <AllPrice>
                {Math.floor(gathered_amount).toLocaleString()}원
              </AllPrice>
            </div>
            <Dday>{getDateDiff(todayString, deadline)}일 남음</Dday>
          </StatusBox>
          <StatusBar>
            <StatusBarTrack percent={percent} />
          </StatusBar>
        </CardText>
      </CardWrap>
    </CardBox>
  );
}

const align = css`
  align-items: center;
  justify-content: center;
`;

const CardBox = styled.div`
  width: 25%;
  margin: 0px;
  padding: 0px 10px;
`;

const CardWrap = styled.div`
  display: block;
  margin: 0px 0px 56px;
`;

const ImgBox = styled.div`
  position: relative;
  flex-basis: 132px;
`;

const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 236.5px;
    object-fit: cover;
  }
`;

const Like = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 20px;
  height: 20px;
`;

const LikeBtn = styled.button`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  border: 0px;
  background: transparent;
  z-index: 2;
  ${align}

  ::before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    filter: invert(100%);
    background: url(./images/main/icon-heart.png) 0px 0px / cover no-repeat;
  }
`;

const PickSticker = styled.span`
  display: flex;
  position: absolute;
  bottom: 8px;
  left: 8px;
  width: 36px;
  height: 20px;
  color: #fff;
  background: #fe5f4c;
  font-size: 10px;
  font-weight: 700;
  ${align}
`;

const CardText = styled.div`
  padding: 0px;
`;

const TextBox = styled.div`
  min-height: 138px;
  margin-bottom: 24px;
  padding: 16px 0px 0px;
  text-decoration: none;
`;

const Type = styled.dd`
  padding: 0px 0px 6px;

  span {
    color: #3d3d3d;
    font-size: 12px;
    line-height: 20px;

    & + span::before {
      content: '|';
      display: inline-block;
      position: relative;
      margin: 0px 6px;
      color: #d0d0d0;
      font-size: 9px;
      z-index: 1;
    }
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.dt`
  margin: 0px 0px 8px;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  color: #3d3d3d;
  max-width: 266px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Description = styled.dd`
  color: #9e9e9e;
  font-size: 13px;
  line-height: 20px;
  max-width: 266px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StatusBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Percent = styled.span`
  color: #fe5f4c;
  font-size: 15px;
  font-weight: 700;
`;

const AllPrice = styled.span`
  margin-left: 4px;
  font-size: 12px;
`;

const Dday = styled.span`
  margin-left: auto;
  color: #6d6d6d;
  font-size: 12px;
  font-weight: 700;
`;

const StatusBar = styled.div`
  width: 100%;
  height: 3px;
  margin: 6px 0px 0px;
  background-color: #d0d0d0;
  overflow: hidden;
`;

const StatusBarTrack = styled.div`
  background-color: #fe5f4c;
  width: ${props => props.percent + '%'};
  height: 100%;
`;
