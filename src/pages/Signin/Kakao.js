import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Kakao() {
  //code를 추출하기 위한 과정
  const href = window.location.href;
  let params = new URL(document.URL).searchParams;
  let code = params.get('code');
  console.log(code);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://10.58.52.97:3000/user/signin?code=${code}`)
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', JSON.stringify(data.accessToken));
        navigate('/');
      });
  }, []);

  return (
    //spinner
    <div>
      <h1>잠시만 기다려주세요 !</h1>
    </div>
  );
}
