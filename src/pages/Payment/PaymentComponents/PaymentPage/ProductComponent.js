import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../../config';

const ProductComponent = () => {
  const [productList, setProductList] = useState([]);

  const params = useParams();
  const proId = params.id;

  useEffect(() => {
    fetch(`${BASE_URL}/projects/${proId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);
  const today = new Date();
  let todayYear = today.getFullYear();
  let todayMonth = today.getMonth() + 1;
  let todayDate = today.getDate();
  let todayString = todayYear + '-' + todayMonth + '-' + todayDate;
  const getDateDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffDate = date1.getTime() - date2.getTime();
    return Math.abs(diffDate / (1000 * 60 * 60 * 24));
  };
  return (
    <ProductProject>
      <Productsection>
        <ProductInner>
          <ProductImgArea>
            <ProductImg
              key={productList.id}
              alt={productList.name}
              src={productList.img_url}
            />
          </ProductImgArea>
          <ProductInfo>
            <StyledSpan>{productList.type}</StyledSpan>
            <ProductTitle>{productList.name}</ProductTitle>
            <ProductContents>
              <ProductAccount>
                {Math.floor(productList.gathered_amount).toLocaleString(
                  'ko-Kr'
                )}
                원
              </ProductAccount>
              <ProductAchivement>
                {productList.amountPercent}%
              </ProductAchivement>

              <ProductState>
                {getDateDiff(todayString, productList.deadline)}일 남음
              </ProductState>
            </ProductContents>
          </ProductInfo>
        </ProductInner>
      </Productsection>
    </ProductProject>
  );
};

const ProductProject = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: auto;
  background: transparent;
  -webkit-box-pack: center;
`;
const Productsection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0px;
  user-select: none;
  -webkit-box-pack: center;
`;
const ProductInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  padding: 32px 16px 36px;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  word-break: inherit;
`;
const ProductImgArea = styled.div`
  width: 107px;
`;
const ProductImg = styled.img`
  width: 100%;
`;
const ProductInfo = styled.div`
  position: relative;
  flex: 1 1 0%;
  margin-left: 14px;
  font-size: 12px;
  letter-spacing: -0.01em;
  line-height: 19px;
`;
const StyledSpan = styled.span`
  color: rgb(158, 158, 158);
  font-size: 10px;
  font-weight: bold;
  letter-spacing: -0.005em;
  line-height: 16px;
`;
const ProductTitle = styled.h3`
  display: block;
  color: rgb(61, 61, 61);
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.02em;
  line-height: 27px;
`;
const ProductContents = styled.div`
  display: flex;
`;

const ProductAccount = styled.strong`
  margin-right: 12px;
  font-weight: bold;
`;
const ProductAchivement = styled.span`
  display: block;
  color: rgb(255, 87, 87);
`;

const ProductState = styled.span`
  position: relative;
  padding-left: 12px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 4px;
    width: 2px;
    height: 2px;
    background: rgb(61, 61, 61);
  }
`;

export default ProductComponent;
