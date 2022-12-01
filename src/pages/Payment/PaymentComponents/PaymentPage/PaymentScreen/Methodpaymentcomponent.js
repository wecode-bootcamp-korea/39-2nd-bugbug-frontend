import React from 'react';
import styled from 'styled-components';

const Methodpaymentcomponent = props => {
  return (
    <Methodpayment>
      <Methodpaymentform>
        <Paysetting>
          <Methodpaymenttext>결제수단</Methodpaymenttext>
        </Paysetting>
        <Paymentmethod>
          <Radioboxs>
            {PAYMENT_LISTS.map(({ id, title, img, width }) => {
              return (
                <Radiobox key={id}>
                  <Radioinput
                    type="radio"
                    name="pay"
                    data-text={title}
                    onClick={e => {
                      props.checkProps(e.target.dataset.text);
                    }}
                  />
                  <Radiolabel>
                    <img
                      alt="title"
                      src={`/images/Payment/${img}.png`}
                      width={width}
                    />
                    &nbsp;&nbsp; {title}
                  </Radiolabel>
                </Radiobox>
              );
            })}
          </Radioboxs>
        </Paymentmethod>
      </Methodpaymentform>
    </Methodpayment>
  );
};

const Methodpayment = styled.div`
  position: relative;
  width: 100%;
  margin: 0px 0px 16px;
  margin-bottom: 14px !important;
  padding: 0px 0px 20px;
  border-bottom: none !important;
`;
const Methodpaymentform = styled.div`
  padding: 0px 0px 20px;
`;
const Paysetting = styled.div`
  display: flex;
  margin: 0px 0px 12px;
  font-size: 16px;
  letter-spacing: -0.02em;
  line-height: 27px;
`;
const Methodpaymenttext = styled.p`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  margin-bottom: 0em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding: 0;
  font-weight: bold;
  line-height: 1.7em;
  word-break: break-all;
  -webkit-box-align: center;
  -webkit-box-flex: 1;
`;
const Paymentmethod = styled.div`
  border: 1px solid rgb(230, 230, 230);
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  word-break: break-all;
`;
const Radioboxs = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Radiobox = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 16px 18px 20px;
`;
const Radioinput = styled.input``;
const Radiolabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0px 8px;
  color: #3d3d3d;
  font-family: 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Arial, 'NotoSansKR',
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.015em;
  line-height: 24px;
`;

const PAYMENT_LISTS = [
  {
    id: 1,
    title: '카드 및 계좌',
    img: 'free-icon-bank-account-2721031',
    width: '39px',
  },
  { id: 2, title: '토스페이', img: 'Toss_Symbol_Primary', width: '39px' },
  { id: 3, title: '네이버페이', img: 'npay_78', width: '55px' },
  {
    id: 4,
    title: '카카오페이',
    img: 'payment_icon_yellow_small',
    width: '55px',
  },
  { id: 5, title: '삼성페이', img: 'samsungpay', width: '55px' },
];
export default Methodpaymentcomponent;
