import React, { useState } from 'react';
import styled from 'styled-components';
import GiftinforComponent from './GiftinforComponent';
import Sponsorcomponent from './Sponsorcomponent';
import Shippingaddresscomponent from './Shippingaddresscomponent';
import Methodpaymentcomponent from './Methodpaymentcomponent';
import Paymentscreenright from './Paymentscreenright';

const Paymentscreenleft = () => {
  const [payCheck, setPayCheck] = useState();
  function checkProps(param) {
    setPayCheck(param);
  }

  // console.log(payCheck);

  return (
    <LeftContainer>
      <GiftinforComponent />
      <Sponsorcomponent />
      <Shippingaddresscomponent />
      <Methodpaymentcomponent checkProps={checkProps} payCheck={payCheck} />
      <Paymentscreenright payCheckValue={payCheck} />
    </LeftContainer>
  );
};

const LeftContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 8px;
  padding-top: 0px !important;
`;

export default Paymentscreenleft;
