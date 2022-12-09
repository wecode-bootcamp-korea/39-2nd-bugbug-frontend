import React, { useState } from 'react';
import styled from 'styled-components';
import { PROJECT_UPLAOD_LIST } from './ProjectUploadListData';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';

export default function Projectupload() {
  const [imgPreveiw, setImgPreveiw] = useState(null);
  const [fileUploadData, setFileUploadData] = useState({});
  const [targetValue, setTargetValue] = useState({
    title: '',
    summary: '',
    category: '',
    story: '',
    price: '',
    gift: '',
    gift_information: '',
    date_start: '',
    date_end: '',
  });

  const navigate = useNavigate();

  function inputValueBring(e) {
    const { name, value, id, files } = e.target;
    setTargetValue({ ...targetValue, [name]: value });

    if (name === 'category') {
      setTargetValue({ ...targetValue, [name]: `${id}` });
    }

    if (name === 'file') {
      setFileUploadData(files[0]);
    }
  }

  function projectUploadDataTransfer() {
    const formData = new FormData();
    formData.append('file', fileUploadData);
    formData.append('targetValue', JSON.stringify(targetValue));

    const accessToken = localStorage.getItem('token');

    fetch(`${BASE_URL}/projects`, {
      method: 'POST',
      headers: {
        //'Content-Type': 'application/json',
        //'Content-Type': 'multipart/form-data',

        // 토큰 전달
        authorization: JSON.parse(accessToken),
      },
      body: formData,
    });
    //window.location.replace('/');
    navigate('/');
  }

  // 이미지 미리보기
  function imgPreview() {
    setImgPreveiw(URL.createObjectURL(fileUploadData));
  }

  return (
    <Container>
      <Inner>
        <Title>프로젝트 데이터 입력하기</Title>
        <DataArea>
          <SubTitle>프로젝트 개요</SubTitle>
          <DataListArea>
            {PROJECT_UPLAOD_LIST.map(list => {
              return (
                <DataList key={list.id}>
                  <ListExplan>{list.explan}</ListExplan>
                  <FormBox>
                    {list.type !== 'radio' && (
                      <Input
                        type={list.type}
                        id={list.name}
                        name={list.name}
                        onChange={e => {
                          inputValueBring(e);
                        }}
                      />
                    )}
                    {list.type === 'file' && (
                      <>
                        <BtnUpload onClick={imgPreview}>미리보기</BtnUpload>
                        {imgPreveiw && (
                          <ImgArea>
                            <img src={imgPreveiw} alt="img-preview" />
                          </ImgArea>
                        )}
                      </>
                    )}
                    {list.type === 'radio' &&
                      list.choice?.map(elem => {
                        return (
                          <RadioBox key={elem.id}>
                            <Input
                              type="radio"
                              name="category"
                              id={elem.id}
                              onClick={e => {
                                inputValueBring(e);
                              }}
                            />
                            <Label htmlFor={elem.name}>{elem.title}</Label>
                          </RadioBox>
                        );
                      })}
                  </FormBox>
                </DataList>
              );
            })}
          </DataListArea>
          <BtnSubmit onClick={projectUploadDataTransfer}>
            프로젝트 올리기
          </BtnSubmit>
        </DataArea>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px 0;
  background: #f5f5f5;
  input[type='text'],
  input[type='number'] {
    display: block;
    width: 100%;
    height: 40px;
    border: 0;
    border-bottom: 1px solid black;
    outline: 0;
  }
  input[type='date'] {
    display: inline-block;
    width: 300px;
    height: 40px;
    border: 0;
    border-bottom: 1px solid #000;
  }
  button {
    background-color: transparent;
    cursor: pointer;
  }
`;
const Inner = styled.div`
  margin: 0 auto;
  width: 1160px;
`;
const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
`;
const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;
const DataArea = styled.div`
  margin-top: 40px;
`;
const DataListArea = styled.ul`
  margin-top: 20px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  overflow: hidden;
  background: #fff;
`;
const DataList = styled.li`
  padding: 20px 20px;
  & + li {
    border-top: 1px solid #e5e5e5;
  }
`;
const FormBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
`;
const ImgArea = styled.div`
  display: block;
  margin-top: 20px;
  width: 100%;
  img {
    width: 300px;
  }
`;
const ListExplan = styled.p`
  &:before {
    content: '*';
    margin-right: 4px;
  }
  font-weight: bold;
  font-size: 14px;
  color: rgb(248, 100, 83);
`;
const UploadBox = styled.div``;
const RadioBox = styled.div`
  margin-right: 8px;
`;
const Input = styled.input`
  padding: 0 10px;
`;
const Label = styled.label``;
const BtnUpload = styled.button`
  padding: 0 10px;
  height: 40px;
  border: 1px solid rgb(248, 100, 83);
  border-radius: 4px;
  background-color: rgb(248, 100, 83) !important;
  color: #fff;
  font-weight: bold;
`;
const BtnSubmit = styled.button`
  margin-top: 20px;
  padding: 0 10px;
  width: 100%;
  height: 60px;
  border: 1px solid rgb(248, 100, 83);
  border-radius: 4px;
  background-color: rgb(248, 100, 83) !important;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
