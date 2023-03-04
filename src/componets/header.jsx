import styled from "styled-components";
import React from "react";

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
  padding: 10px 200px;
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
    padding-right:20px;
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
        <h2>Addis Songs</h2>
        <ul>
        <li>Login</li>
        <li>Signup</li>
        </ul>
        </Header>
      
    </div>
  );
}
