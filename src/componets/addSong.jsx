import React from "react";
import styled from "styled-components";
import Header from './header.jsx';
import Footer from './footer.jsx';

import { useDispatch } from 'react-redux';
import { addSong } from '../songState';

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  width: 20rem;
  margin: 10px;
  background: #e6e6e6;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #262626;
  }
`;


const Button = styled.button`
  color: ${props => (props.primary ? " #cca300;" : "palevioletred")};
  background: ${props => (props.primary ? "#262626;" : "white")};
  font-size: 20px;
  font-weight:bold;
  margin: 10px;
  padding: 10px 9.4rem;
  border: 2px solid #262626;
  border-radius: 3px;
`;


export default function AddSong() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.title.value)
    console.log(e.target.elements)
    const newSong = {title: e.target.title.value, artist: e.target.artist.value , album: e.target.album.value, genre: e.target.genre.value};
    console.log(newSong);
    dispatch(addSong(newSong));
  }
  return (
    <div>
      <Header />
      <form style={{paddingTop:80}} onSubmit={handleSubmit}>
        <center>
        <p style={{color:"#262626",fontSize: 30,fontWeight:"bold"}}>  Add Song</p>
        <Input type="text" placeholder="Title" name="title" /><br></br>
        <Input type="text" placeholder="Artist" name="artist"/><br></br>
        <Input type="text" placeholder="Album" name="album"/><br></br>
        <Input type="text" placeholder="Genre" name="genre" /><br></br>
        <Button primary> Add </Button>
        </center>
      </form>
      <Footer />
    </div>
  );
}

