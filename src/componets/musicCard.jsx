import styled from "styled-components";
import React from "react";
import NotaImg from '../images/nota.png';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSongsFetch } from '../songState';

import { Audio } from 'react-loader-spinner';

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
`;

export default function MusicCard() {
    const songs = useSelector(state => state.songs.songs);
    const isLoading = useSelector(state => state.songs.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSongsFetch());
    }, [dispatch]);
    console.log(songs);
    console.log(isLoading);
    const SongsList = songs.map((song) => {
        return <Wrapper key={song._id}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div>
                    <Paragraph style={{ fontSize: 15 }}>Title: {song.title}</Paragraph>
                    <Paragraph style={{ fontSize: 15 }}>Artist: {song.artist}</Paragraph>
                    <Paragraph style={{ fontSize: 15 }}>Album:  {song.album}</Paragraph>
                    <Paragraph style={{ fontSize: 15 }}>Genre: {song.genre}</Paragraph>
                </div>

                <img src={NotaImg} height="50%" width="40%" alt="nota will appear here" />
            </div>
        </Wrapper>

    });
    return (
        <div>
            {
                isLoading ?
                    <center style={{alignItems: "center",justifyContent:"center"}}>
                        <Audio
                            height="60"
                            width="60"
                            radius="9"
                            color="yellow"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        />
                    </center>

                    : <div style={{ marginLeft: 200, marginRight: 200, display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: 30 }}>
                        {SongsList}
                    </div>

            }
        </div>

    );
}