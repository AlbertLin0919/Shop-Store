import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <p>404 error</p>

      <p>This page doesn't exist</p>
      <button onClick={() => navigate("/")}>點此購物</button>
    </div>
  );
};

export default Error;
