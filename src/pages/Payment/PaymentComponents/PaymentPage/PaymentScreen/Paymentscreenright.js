import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { useSearchParams } from 'react-router-dom';
const Paymentscreenright = ({ payCheckValue }) => {
  const [productList, setProductList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    fetch(`http://10.58.52.97:3000/projects/4`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, [searchParams.toString()]);
  const REACT_APP_TOSS = `${process.env.REACT_APP_TOSS}`;
  const onclickHandler = paymentType =>
    loadTossPayments(REACT_APP_TOSS).then(tossPayments => {
      tossPayments.requestPayment('카드', {
        // 결제 수단
        // 결제 정보
        amount: `${productList.gift}`,
        orderId: 'oQxyUd0g-uvLwuS6lalcq',
        orderName: `${productList.name}`,
        customerName: `${productList.creator_nickname}`,
        successUrl: 'http://localhost:3000/paymentsuccess',
        failUrl: 'http://localhost:3000/payment',
        flowMode: 'DIRECT',
        easyPay: paymentType,
      });
    });
  return (
    <Rightsidecontainer>
      <Pledgewrapper>
        <Pledgeamountarea>
          <Pledgetotalwrap>
            <Pledgeamounttitle>최종 후원 금액</Pledgeamounttitle>
            <Pledgeamountdesc>
              <span>
                {Math.floor(productList.gift).toLocaleString('ko-Kr')}
              </span>
              원
            </Pledgeamountdesc>
          </Pledgetotalwrap>
        </Pledgeamountarea>
      </Pledgewrapper>
      <Paybuttons>
        {payCheckValue && (
          <Solidbutton
            onClick={() => {
              onclickHandler(payCheckValue);
            }}
          >
            <span>{payCheckValue}로 후원하기</span>
          </Solidbutton>
        )}
      </Paybuttons>
    </Rightsidecontainer>
  );
};

const Rightsidecontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Pledgewrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
`;
const Pledgeamountarea = styled.div`
  border: 1px solid rgb(230, 230, 230);
  border-radius: 4px;
`;
const Pledgetotalwrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
`;
const Pledgeamounttitle = styled.div`
  color: rgb(255, 87, 87);
  font-size: 16px;
  font-weight: bold;
  line-height: 27px;
`;
const Pledgeamountdesc = styled.div`
  color: rgb(61, 61, 61);
  font-size: 16px;
  font-weight: bold;
  line-height: 27px;
`;
const Paybuttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
`;
const Solidbutton = styled.button`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 0px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 1px;
  background-color: transparent;
  color: rgb(109, 109, 109);
  font-size: 16px;
  letter-spacing: -0.02em;
  line-height: 27px;
  white-space: nowrap;
  cursor: pointer;
  -webkit-box-align: center;
  -webkit-box-pack: center;
`;

export default Paymentscreenright;
