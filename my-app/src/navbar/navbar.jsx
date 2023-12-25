import React from "react";
import './navbar.css';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  const handleClickLanding = () => {
    nav("/landing");
  };
  const handleClickCanvas = () => {
    nav("/canvas");
  };
  return (
    <div className="Navbar">
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
