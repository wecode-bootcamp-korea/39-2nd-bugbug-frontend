import React from 'react';
import styled from 'styled-components';

const Sponsorcomponent = () => {
  return (
    <Sponsorbox>
      <Sponsorform>
        <SponsorHeader>
          <Sponsortitle>후원자 정보</Sponsortitle>
        </SponsorHeader>
        <Sponsorinforbox>
          <Sponsorinfor>
            <Sponsortable>
              <Sponsortbody>
                <Sponsorttr>
                  <Sponsorth>연락처</Sponsorth>
                  <td>
                    <Sponsoremail>
                      <Sponsorspan>
                        <Sponsoremailinput
                          type="email"
                          placeholder="이메일을 입력해주세요."
                        />
                      </Sponsorspan>
                    </Sponsoremail>
                    <Sponsorcertificationnumber>
                      인증번호 전송
                    </Sponsorcertificationnumber>
                  </td>
                </Sponsorttr>
              </Sponsortbody>
            </Sponsortable>
            <Sponsorguide>
              <Sponsormessage>
                * 위 이메일로 후원 관련 소식이 전달됩니다.
              </Sponsormessage>
              <Sponsormessage>
                * 이메일 변경은 설정 {'>'} 계정 설정에서 가능합니다.
              </Sponsormessage>
            </Sponsorguide>
          </Sponsorinfor>
        </Sponsorinforbox>
      </Sponsorform>
    </Sponsorbox>
  );
};
const Sponsorbox = styled.div`
  width: 100%;
  margin-bottom: 14px !important;
  border-bottom: none !important;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  word-break: break-all;
`;
const Sponsorform = styled.div`
  padding: 0px 0px 20px;
`;
const SponsorHeader = styled.div`
  display: flex;
  margin: 0px 0px 12px;
  font-size: 16px;
  letter-spacing: -0.02em;
  line-height: 27px;
`;
const Sponsortitle = styled.p`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
  font-weight: bold;
  -webkit-box-align: center;
  -webkit-box-flex: 1;
`;
const Sponsorinforbox = styled.div`
  border: 1px solid rgb(230, 230, 230);
`;
const Sponsorinfor = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Sponsortable = styled.table`
  width: 100%;
  margin: 16px 0px;
  border-spacing: 0;
  border-collapse: collapse;
  text-align: left;
`;
const Sponsortbody = styled.tbody`
  display: table-row-group;
  box-sizing: inherit;
  border-color: inherit;
  vertical-align: middle;
`;
const Sponsorttr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;
const Sponsorth = styled.th`
  display: table-cell;
  width: 98px;
  padding: 4px 0px 4px 16px;
  font-weight: bold;
  text-align: left;
  vertical-align: top;
`;
const Sponsoremail = styled.div`
  width: auto;
`;
const Sponsorspan = styled.span`
  display: flex;
  align-items: center;
  min-width: 80px;
  max-height: 44px;
  padding: 0px 12px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 1px;
  background: rgb(255, 255, 255);
  color: rgb(13, 13, 13);
  font-size: 14px;
  letter-spacing: -0.015em;
  line-height: 24px;
  -webkit-box-align: center;
`;
const Sponsoremailinput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 11px 0px;
  border: 1px;
  outline: none;
  background: transparent;
  appearance: none !important;
`;

const Sponsorcertificationnumber = styled.button`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 0px;
  margin-top: 8px !important;
  padding: 0px 16px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 1px;
  outline: 0;
  outline: 0px;
  background-color: rgb(255, 255, 255);
  color: rgb(109, 109, 109);
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.02em;
  line-height: 27px;
  white-space: nowrap;
  cursor: pointer;
  -webkit-box-align: center;
  -webkit-box-pack: center;
`;
const Sponsorguide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0px;
  padding: 0px 16px 16px;
`;
const Sponsormessage = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(109, 109, 109);
  font-size: 13px;
  line-height: 15px;
`;
export default Sponsorcomponent;
