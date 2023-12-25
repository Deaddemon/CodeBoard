import React from "react";
import './home.css';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  const handleClickLanding = () => {
    nav("/landing");
  };
  const handleClickCanvas = () => {
    nav("/canvas");
  };
  return (
    <div className="App">
      <div className="header">
        <button
          className="btn btn-primary btn-landing"
          onClick={handleClickLanding}
        >
          {" "}
          Code editor{" "}
        </button>
        <button
          className="btn btn-primary btn-canvas"
          onClick={handleClickCanvas}
        >
          {" "}
          Whiteboard{" "}
        </button>
      </div>
    </div>
  );
}
