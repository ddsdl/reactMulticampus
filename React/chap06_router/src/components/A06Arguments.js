// npm i query-string
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string'

const data = [
  { id: 1, name: "Apples", category: "Fruit", price: 1.2, expiry: 10 },
  { id: 2, name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
  { id: 3, name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
  { id: 4, name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
  { id: 5, name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
  { id: 6, name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
];

function A06Arguments() {
  const location = useLocation();
  // console.log(location);
  const query = queryString.parse(location.search);
  // console.log(query);

  const [product, setProduct] = useState({});
  useEffect(() => {
    const findItem = data.find((item) => {
      return item.id === Number(query.id)
    });

    setProduct(findItem)
  }, [query.id])

  return (
    <div>
      <h5>Argument Component</h5>
      <div>This is Argument Component</div>
      <br />

      <div>
        pathname: {location.pathname} <br />
        search: {decodeURIComponent(location.search)}<br />
        hash: {location.hash}
      </div>
      <br />

      <div>
        Name: {query.name} <br />
        id: {query.id}<br />
        Address: {query.address}
      </div>
      <br />

      <div>
        ID: {product.id}<br />
        Name: {product.name}<br />
        Category: {product.category}
      </div>
    </div>
  );
};
export default A06Arguments;
