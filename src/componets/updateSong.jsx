import React from "react";
import styled from "styled-components";
import Header from './header.jsx';
import Footer from './footer.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useLocation} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { updateSong } from '../songState';

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
  padding: 10px 8.4rem;
  border: 2px solid #262626;
  border-radius: 3px;
`;


//toast.configure()
export default function UpdateSong() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    function handleSubmit(e) {
        e.preventDefault();
        const updatedSong = { _id: id, title: e.target.title.value, artist: e.target.artist.value, album: e.target.album.value, genre: e.target.genre.value };
        console.log(updatedSong);
        dispatch(updateSong(updatedSong));
        toast.success('Successfully updated a song!', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    return (
        <div>
            <Header />
            <ToastContainer />
            <form style={{ paddingTop: 80 }} onSubmit={handleSubmit}>
                <center>
                    <p style={{ color: "#262626", fontSize: 30, fontWeight: "bold" }}> Update Song</p>
                    <Input type="text" placeholder="Title" name="title" defaultValue={location.state.title}/><br></br>
                    <Input type="text" placeholder="Artist" name="artist" defaultValue={location.state.artist}/><br></br>
                    <Input type="text" placeholder="Album" name="album" defaultValue={location.state.album}/><br></br>
                    <Input type="text" placeholder="Genre" name="genre" defaultValue={location.state.genre}/><br></br>
                    <Button primary> Update </Button>
                </center>
            </form>
            <Footer />
        </div>
    );
}

