import React from "react";
import styled from "styled-components";
import Header from './header.jsx';
import Footer from './footer.jsx';

import { useDispatch } from 'react-redux';
import { updateSong } from '../songState';


export default function Statistics() {
  
    return (
        <div>
            <Header />
            <p style={{color:"#262626",fontSize: 25, fontWeight:"bold",paddingLeft: "10%"}}>  Statistics</p>
            <div style={{color:"#262626",fontSize: 20, fontWeight:"bold",paddingLeft: "10%"}}>
            <p>Total Number of songs: </p>
            <p>Total Number of artists: </p>
            <p>Total Number of albums: </p>
            <p>Total Number of genres: </p>
            </div>
            <Footer />
        </div>
    );
}

