import styled from "styled-components";
import React from "react";
import NotaImg from '../images/nota.png';
import { Audio } from 'react-loader-spinner';
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSongsFetch,deleteSong } from '../songState';



const Paragraph = styled.p`
    fontSize: 15;
`;

const Wrapper = styled.section`
  padding: 3em;
  background: white;
  width: 350px;
  height: 150px;
  box-shadow: 0px 1px 3px #cca300;
  border: 0.3px solid #e6e6e6;
  border-radius: 15px;
  border-left: 8px solid;
`;


export default function MusicCard() {
    const songs = useSelector(state => state.songs.songs);
    const isLoading = useSelector(state => state.songs.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSongsFetch());
    }, [dispatch]);
    // console.log(songs);
    // console.log(isLoading);
    
    const SongsList = songs.map((song) => {
        return <Wrapper key={song._id}>
             <div style={{ display: "flex",justifyContent:"left",paddingBottom:10}}>
                        <FontAwesomeIcon onClick={() => {
                            confirmAlert({
                                title: "Confirm to delete",
                                message: "Are you sure you want to delete this song?",
                                buttons: [
                                  {
                                    label: "Yes",
                                    onClick: () => {dispatch(deleteSong(song._id));}
                                  },
                                  {
                                    label: "No"
                                  }
                                ]
                              });
                           }
                            } icon={faTrash} style={{ marginRight: 20, color: "#262626" }} />
                        <FontAwesomeIcon icon={faPen} style={{ color: "#262626" }} />
                    </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div>
                   
                    <Paragraph style={{ fontSize: 15 }}>Title: {song.title}</Paragraph>
                    <Paragraph style={{ fontSize: 15 }}>Artist: {song.artist}</Paragraph>
                    <Paragraph style={{ fontSize: 15 }}>Album:  {song.album}</Paragraph>
                    <Paragraph style={{ fontSize: 15 }}>Genre: {song.genre}</Paragraph>

                </div>
                <hr style={{ height: 2, borderWidth: 2, color: "#262626", backgroundColor: "#e6e6e6" }}></hr>
                <img src={NotaImg} height="50%" width="40%" alt="nota will appear here" />
            </div>
        </Wrapper>

    });
    return (
        <div>
            {
                isLoading ?
                    <div style={{ justifyContent: "center", display: "flex" }}>
                        <Audio
                            height="60"
                            width="60"
                            radius="9"
                            color="yellow"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass

                        />
                    </div>

                    : <div style={{ marginLeft: "10%", marginRight: "10%", display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: 30 }}>
                        {SongsList}
                    </div>

            }
        </div>

    );
}