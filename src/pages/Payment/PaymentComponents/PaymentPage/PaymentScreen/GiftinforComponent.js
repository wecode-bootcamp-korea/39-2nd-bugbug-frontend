import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../../../../../config';

const GiftinforComponent = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/projects/4`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);
  return (
    <Giftinformation>
      <Gifttitle>
        <p>선물 정보</p>
      </Gifttitle>
      <Giftcontent>
        <Gifttable>
          <TableHead>
            <tr>
              <Giftcompositiontext>선물 구성</Giftcompositiontext>
              <Gifttd>{productList.gift_information}</Gifttd>
            </tr>
            <tr>
              <Giftcompositiontext>선물 금액</Giftcompositiontext>
              <Gifttd>
                {Math.floor(productList.gift).toLocaleString('ko-Kr')}원
              </Gifttd>
            </tr>
          </TableHead>
        </Gifttable>
      </Giftcontent>
    </Giftinformation>
  );
};

const Giftinformation = styled.div`
  position: relative;
  width: 100%;
  margin: 0px 0px 16px;
  margin-bottom: 14px !important;
  padding: 0px 0px 20px;
  border-bottom: none !important;
`;
const Gifttitle = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
  margin: 0px 0px 12px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.02em;
  line-height: 27px;
  -webkit-box-align: center;
  -webkit-box-flex: 1;
`;
const Giftcontent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  border: 1px solid rgb(230, 230, 230);
  -webkit-box-align: center;
`;
const Gifttable = styled.table`
  width: 100%;
  margin: 16px 0px;
  border-spacing: 0;
  border-collapse: collapse;
  text-align: left;
`;

const TableHead = styled.tbody``;

const Giftcompositiontext = styled.th`
  display: table-cell;
  width: 98px;
  padding: 4px 0px 4px 16px;
  font-weight: bold;
  text-align: left;
  vertical-align: top;
`;
const Gifttd = styled.td`
  width: auto;
  padding: 4px 65px 4px 0px !important;
`;

export default GiftinforComponent;
