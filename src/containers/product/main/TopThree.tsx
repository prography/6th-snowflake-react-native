import * as React from 'react';
import ProductBar from '~/components/product/main/ProductBar';

const TopThree = () => {
  const productList = [
    { rankNum: 1, company: '바른 생각', title: '퍼펙트핏', star: 4 },
    { rankNum: 2, company: '이브', title: '울트라씬', star: 3 },
    { rankNum: 3, company: '듀렉스', title: '필 울트라씬', star: 2 },
  ];
  return (
    <>
      {productList.map((product) => {
        return <ProductBar product={product} />;
      })}
    </>
  );
};

export default TopThree;
