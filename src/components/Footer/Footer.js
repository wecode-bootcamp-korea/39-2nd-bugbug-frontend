import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FOOTER_LIST } from './FooterListData';

export default function Footer() {
  return (
    <FooterWrap>
      <div>
        <LinkAreaInner>
          {FOOTER_LIST.map(elem => {
            return (
              <LinkSection key={elem.id}>
                <strong>{elem.title}</strong>
                <LinkSectionUl>
                  {elem.list.map((elem, index) => {
                    return (
                      <LinkSectionList key={index}>
                        <FooterInfoLink to="/">{elem}</FooterInfoLink>
                      </LinkSectionList>
                    );
                  })}
                </LinkSectionUl>
              </LinkSection>
            );
          })}
        </LinkAreaInner>
      </div>
      <FooterInfoArea>
        <FooterInfoInner>
          <p>
            벅벅은 박문영,우석민,조형진,송아영,김세호,서재선으로 구성되어있다.
            39기 2차 프로젝트 파이팅~
          </p>
        </FooterInfoInner>
      </FooterInfoArea>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  border-top: 1px solid rgb(240, 240, 240);
  strong {
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  }
`;

const LinkAreaInner = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 20px 0;
  width: 1160px;
`;
const LinkSection = styled.section`
  margin-right: 40px;
`;

const LinkSectionUl = styled.ul`
  margin-top: 15px;
`;

const LinkSectionList = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const FooterInfoLink = styled(Link)`
  display: inline-block;
  font-size: 14px;
  line-height: 22px;
  color: rgb(109, 109, 109);
  text-decoration: none;
`;
const FooterInfoArea = styled.div`
  padding: 10px 0;
  background: rgb(240, 240, 240);
  color: rgb(109, 109, 109);
  font-size: 12px;
  line-height: 18px;
`;
const FooterInfoInner = styled.div`
  margin: 0 auto;
  width: 1160px;
`;
