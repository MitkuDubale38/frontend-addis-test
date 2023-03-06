import styled from "styled-components";
import React from "react";

const Footers = styled.footer`
  align-items: center;
  padding: 10px 10%;
  background: white;


  h4 {
    font-weight: 400;
    color: #262626;
    font-size: 16px;
    font-weight:bold;
    align-items: center;


  }
`;

export default function Footer() {
    return (
        <div style={{marginTop: 100}} >
            <center>
            <hr style={{height:2,borderWidth:0,color:"#262626",backgroundColor:"#e6e6e6"}}></hr>
                <Footers><h4>Addis Songs Inc Ⓒ 2023 All Rights Reserved</h4></Footers>
            </center>

        </div>
    );
}
