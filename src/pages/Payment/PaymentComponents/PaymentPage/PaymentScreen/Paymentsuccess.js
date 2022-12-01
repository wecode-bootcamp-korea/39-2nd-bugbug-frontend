import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Paymentsuccess = () => {
  const [params, setParams] = useSearchParams();
  const paymentKey = params.get('paymentKey');
  const order = params.get('orderId');
  const amount = params.get('amount');

  useEffect(() => {
    let axios = require('axios').default;

    let options = {
      method: 'POST',
      url: 'https://api.tosspayments.com/v1/payments/confirm',
      headers: {
        Authorization:
          'Basic dGVzdF9za19vZXFSR2dZTzFyNU1PcU1hTjRiclFuTjJFeWF6Og==',
        'Content-Type': 'application/json',
      },
      data: {
        paymentKey: paymentKey,
        amount: amount,
        orderId: order,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  useEffect(() => {
    let axios = require('axios').default;

    let options = {
      method: 'POST',
      url: 'http://10.58.52.249:3000/payments',
      headers: {
        Authorization:
          'Basic dGVzdF9za19vZXFSR2dZTzFyNU1PcU1hTjRiclFuTjJFeWF6Og==',
        'Content-Type': 'application/json',
      },
      data: {
        paymentKey: paymentKey,
        amount: amount,
        orderId: order,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <>
      <div>결제에 성공하였습니다.</div>

      <Link to="/">홈으로</Link>
    </>
  );
};
export default Paymentsuccess;
