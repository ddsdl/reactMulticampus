import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const data = [
  { id: 1, name: "Apples", category: "Fruit", price: 1.2, expiry: 10 },
  { id: 2, name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
  { id: 3, name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
  { id: 4, name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
  { id: 5, name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
  { id: 6, name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
];

function A05MatchParam() {
  // const params = useParams();
  // console.log(params);
  const { id, name } = useParams();

  // 주소 정보를 가져온다
  const location = useLocation();
  // console.log(location);

  // filter => 없으면 빈 배열
  // find => 없으면 undefined
  const [product, setProduct] = useState({});

  // console.log(getData())
  useEffect(() => {
    // Ajax를 이용한 서버에 데이터 요청
    setProduct(data.find((item) => item.id === Number(id)));
  }, [id]);

  return (
    <div>
      <h5>Parameter Component</h5>
      <div>This is Parameter Component</div>
      <br />

      <div>
        Id: {id} <br />
        Name: {name}<br />
        Location: {location.pathname}
      </div>
      <br />

      <div>
        Id: {product.id}<br />
        Name: {product.name}<br />
        Category: {product.category}
      </div>
    </div>
  );
};
export default A05MatchParam;
