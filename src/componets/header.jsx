import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
export const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`;

export const Title = styled.h1`
  font-size: 1.8em;
  text-align: left;
  color: white;
  padding-left: 3.5em;

`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%;
  background: #262626;


  h2 {
    font-weight: 400;
    color: #cca300;
    font-size: 28px;
    font-weight:bold;

  }

  li {
    list-style: none;
    display: inline-block;
    color: #997a00;
    font-size: 20px;
    padding-right:0.9rem;
  }
  li:hover {
    color: #ffcc00;
  }
`;
export const Container = styled.div`
  margin-top:-20px;
  height: 80px;
  background-color: #004d4d;
`;
export default function Head() {
  return (
    <div className="Header">
      <Header>
      <Link to="/" style={{ textDecoration: 'none' }}><h2>Addis Songs</h2></Link>
        <ul>
        <Link to="/addSong" style={{ textDecoration: 'none' }}><li>Add New Song</li></Link>
        <Link to="/statistics" style={{ textDecoration: 'none' }}><li>Statistics</li></Link>
        </ul>
        </Header>
      
    </div>
  );
}
