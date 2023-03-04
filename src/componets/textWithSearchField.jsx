import styled from "styled-components";
import React from "react";

const Footers = styled.footer`
  align-items: center;
  padding: 10px 200px;
  background: white;


  h4 {
    font-weight: 400;
    color: #262626;
    font-size: 16px;
    font-weight:bold;
    align-items: center;


  }
`;

export default function TextWithSearchField() {
    return (
        <div style={{ display: "flex", flexDirection: "row",justifyContent: "space-between",paddingLeft: 200,paddingBottom:20,paddingTop:20}} >
            <p style={{color:"#262626",fontSize: 25,}}>  Popular Songs</p>
            {/* <input type="text" id="search" name="search" placeholder="Search..." /><br></br> */}
        </div>
    );
}
