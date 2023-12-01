import React from "react";
import { useNavigate } from "react-router-dom";

function A04History() {

  const navigate = useNavigate();     // method
  const goURL = (url) => {
    navigate(url);
  }

  return (
    <div>
      <h5>Product Component</h5>
      <div>This is Product Component</div>
      <br />

      <div>
        <button onClick={() => navigate(-1)}>BACK</button>
        <button onClick={() => navigate(1)}>FORWARD</button>
        <button onClick={() => navigate('/')}>HOME</button>
        <button onClick={() => goURL('/A02State')}>PARAMETER</button>
      </div>
    </div>
  );
};
export default A04History;
