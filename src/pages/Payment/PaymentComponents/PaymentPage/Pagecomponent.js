import React from 'react';
import styled from 'styled-components';
import ProductComponent from './ProductComponent';
import Paymentscreen from './PaymentScreen/Paymentscreen';

const Pagecomponent = () => {
  return (
    <Page>
      <ProductComponent />
      <Paymentscreen />
    </Page>
  );
};

const Page = styled.div`
  display: block;
  position: relative;
  box-sizing: inherit;
  width: 1160px;
  margin: 0 auto;
  border-bottom: 1px solid rgb(230, 230, 230);
  text-decoration: none;
  word-break: break-all;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
`;
export default Pagecomponent;
