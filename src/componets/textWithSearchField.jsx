import styled from "styled-components";
import React from "react";

export default function TextWithSearchField() {
    return (
        <div style={{ display: "flex", flexDirection: "row",justifyContent: "space-between",paddingLeft: "10%",paddingBottom:20,paddingTop:20}} >
            <p style={{color:"#262626",fontSize: 25, fontWeight:"bold"}}>  Popular Songs</p>
            {/* <input type="text" id="search" name="search" placeholder="Search..."/><br></br> */}
        </div>
    );
}
