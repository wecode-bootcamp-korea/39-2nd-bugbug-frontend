import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './Modaladdress';

const Shippingaddresscomponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <Shippingaddressbox>
      <Shippingaddressform>
        <Shippingaddressp>배송지</Shippingaddressp>
      </Shippingaddressform>
      <Adresspl>
        <Adressstyle>
          <Adressbutton onClick={showModal}>+ 배송지 추가</Adressbutton>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
        </Adressstyle>
      </Adresspl>
    </Shippingaddressbox>
  );
};

const Modal = ({ setModalOpen }) => {
  const [address, setAddress] = React.useState('');
  const [popup, setPopup] = React.useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <First>
      <Secon>
        <Center>
          <Container>
            <Modaltext>
              배송지 추가
              <Close onClick={closeModal}>X</Close>
            </Modaltext>
            <Modalunder>
              <Modalundertwo>
                <Touse>
                  <Topeopel>받는 사람</Topeopel>
                  <Tousefrom>
                    <Tousespan>
                      <Toinput
                        type="text"
                        placeholder="받는 분 성함을 입력해 주세요."
                      />
                    </Tousespan>
                  </Tousefrom>
                </Touse>
                <Address>
                  <Addresstext>주소</Addresstext>
                  <Addressinput>
                    <Addressspan>
                      <Toinput />
                      <Magnifyingbutton
                        type="button"
                        onClick={() => {
                          setPopup(!popup);
                        }}
                      >
                        <Magnifyingdi>
                          <Magnifyingimg src="/images/Payment/free-icon-magnifier-2319177.png" />
                        </Magnifyingdi>
                      </Magnifyingbutton>
                      {popup && (
                        <Post address={address} setAddress={setAddress} />
                      )}
                    </Addressspan>
                  </Addressinput>
                </Address>
                <Ponnumber>
                  <Poneto>받는 사람 휴대폰 번호</Poneto>
                  <Phonto>
                    <Phontospan>
                      <Phontoinput placeholder="받는 분 휴대폰 번호를 입력해주세요." />
                    </Phontospan>
                  </Phonto>
                </Ponnumber>
                <Addboxpadding>
                  <Addboxmargin>
                    <Addboxlabel>
                      <input type="checkbox" />
                      기본 배송지로 등록
                    </Addboxlabel>
                  </Addboxmargin>
                </Addboxpadding>
                <Subox>
                  <span>등록완료</span>
                </Subox>
              </Modalundertwo>
            </Modalunder>
          </Container>
        </Center>
      </Secon>
    </First>
  );
};

const Shippingaddressbox = styled.div`
  width: 100%;
  margin: 0px 0px 16px;
  margin-bottom: 14px !important;
  border-bottom: 1px solid rgb(230, 230, 230);
  border-bottom: none !important;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
`;
const Shippingaddressform = styled.div`
  display: flex;
  margin: 0px 0px 12px;
  font-size: 16px;
  letter-spacing: -0.02em;
  line-height: 27px;
`;
const Shippingaddressp = styled.p`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  margin-top: 0em;
  margin-bottom: 0em;
  padding: 0;
  font-weight: bold;
  line-height: 1.7em;
  word-break: break-all;
  -webkit-box-align: center;
  -webkit-box-flex: 1;
`;
const Adresspl = styled.div`
  border: 1px solid rgb(230, 230, 230);
`;
const Adressstyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  cursor: pointer;
  -webkit-box-pack: center;
  -webkit-box-align: center;
`;
const Adressbutton = styled.span`
  display: inline-flex;
  color: rgb(109, 109, 109);
  font-size: 16px;
  line-height: 27px;
`;
const Subox = styled.button`
  margin: 16px 0px 0px;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: -0.02em;
  background-color: rgb(255, 87, 87);
  font-weight: bold;
  border: 0px;
  width: 100%;
  cursor: pointer;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 52px;
  white-space: nowrap;
  border-radius: 1px;
  box-sizing: border-box;
  padding: 0px 24px;
  color: rgb(255, 255, 255);
`;
const Addboxlabel = styled.label`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding: -1px 0px 0px 29px;
  color: rgb(61, 61, 61);
  display: inline-flex;
`;
const Addboxmargin = styled.div`
  margin-bottom: 0px;
`;
const Addboxpadding = styled.div`
  margin: 20px 0 0;
  display: flex;
  flex-flow: column;
`;
const Phontoinput = styled.input`
  width: 100%;
  background: transparent;
  border: 0px;
  padding: 11px 0px;
  box-sizing: border-box;
  height: 100%;
  outline: none;
  margin: 0px;
  appearance: none !important;
`;
const Phontospan = styled.span`
  border: 1px solid rgb(230, 230, 230);
  color: rgb(13, 13, 13);
  background: rgb(255, 255, 255);
  padding: 0px 12px;
  max-height: 44px;
  min-width: 100px;
  display: flex;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 1px;
`;
const Phonto = styled.div`
  width: auto;
`;
const Poneto = styled.div`
  color: rgb(61, 61, 61);
  margin: 0px 0px 10px;
`;
const Ponnumber = styled.div`
  margin-top: 32px;
`;
const Magnifyingimg = styled.img`
  width: 27px;
`;
const Magnifyingdi = styled.div`
  display: inline-flex;
`;
const Magnifyingbutton = styled.button`
  font-size: 32px;
  line-height: 27px;
  letter-spacing: -0.02em;
  border: 0;
  outline: 0;
  background: white;
  cursor: pointer;
`;
const Addressspan = styled.span`
  border: 1px solid rgb(230, 230, 230);
  color: rgb(13, 13, 13);
  background: rgb(255, 255, 255);
  padding: 0px 0px 0px 12px;
  max-height: 44px;
  min-width: 100px;
  display: flex;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 1px;
`;
const Addressinput = styled.div`
  width: auto;
`;
const Addresstext = styled.div`
  color: rgb(61, 61, 61);
  margin: 0px 0px 10px;
`;
const Address = styled.div`
  margin-top: 32px;
`;
const First = styled.div`
  position: fixed;
  z-index: 999999999;
  left: 0px;
  top: 0px;
  width: 100%;
  background: #fff;
  color: #3d3d3d;
`;
const Secon = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(13, 13, 13, 0.65);
`;
const Center = styled.div`
  min-width: 328px;
  position: absolute;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  max-width: 600px;
  max-height: 100vh;
`;

const Container = styled.div`
  padding: 24px 32px 40px;
  width: 500px;
  height: 480px;
  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
`;
const Close = styled.button`
  position: absolute;
  top: 50%;
  right: 0px;
  margin: -10px 0px 0px;
  cursor: pointer;
`;

const Modaltext = styled.div`
  display: flex;
  position: relative;
  padding: 0px;
  height: auto;
  font-weight: bold;
  min-height: 36px;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.025em;
  margin: 0px 0px 24px;
  color: black;
`;
const Modalunder = styled.div`
  max-height: 75vh;
  overflow: hidden auto;
`;
const Modalundertwo = styled.div`
  width: 100%;
`;
const Touse = styled.div`
  margin-top: 0px;
`;
const Topeopel = styled.div`
  color: rgb(61, 61, 61);
  margin: 0px 0px 10px;
`;
const Tousefrom = styled.div`
  width: auto;
`;
const Tousespan = styled.span`
  width: 230px;
  border: 1px solid rgb(230, 230, 230);
  color: rgb(13, 13, 13);
  background: rgb(255, 255, 255);
  padding: 0px 12px;
  max-height: 44px;
  min-width: 100px;
  display: flex;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 1px;
`;
const Toinput = styled.input`
  width: 100%;
  background: transparent;
  border: 0px;
  padding: 11px 0px;
  box-sizing: border-box;
  height: 100%;
  outline: none;
  margin: 0px;
  appearance: none !important;
`;

export default Shippingaddresscomponent;
