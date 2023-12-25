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
      <div className="navbar-header">
        <button
          className="navbar-btn navbar-btn-primary navbar-btn-landing"
          onClick={handleClickLanding}
        >
          {" "}
          Code editor{" "}
        </button>
        <button
          className="navbar-btn navbar-btn-primary navbar-btn-canvas"
          onClick={handleClickCanvas}
        >
          {" "}
          Whiteboard{" "}
        </button>
      </div>
    </div>
  );
}
