import React from 'react';
import styled from 'styled-components';
import Paymentscreenleft from './Paymentscreenleft';

const Paymentscreen = () => {
  return (
    <PaymentContainer>
      <Paymentscreenleft />
    </PaymentContainer>
  );
};

export default Paymentscreen;

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 640px;
  margin-bottom: 48px;
  padding: 18px 16px;
`;
