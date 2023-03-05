import { put, call, takeEvery } from 'redux-saga/effects';
import { getSongsSuccess } from './songState';


function* workGetSongsFetch() {
    const songs = yield call(() => fetch('http://localhost:8000/api/songs/'));
    const formatedSongs = yield songs.json();
    yield put(getSongsSuccess(formatedSongs));
}

function* workDeleteSong({ payload }) {
    const id = JSON.stringify(payload);
    const _id = id.replace(/["']/g, "");
    yield call(() => fetch(`http://localhost:8000/api/songs/${_id}`, { method: 'DELETE' }));
}

function* postNewSong(song) {
    console.log("test inside");

    const { title, artist, album, genre } = song;
    console.log(song);
    try {
        const data = yield call(() => {
            return fetch("http://localhost:8000/api/songs/create", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    artist: artist,
                    album: album,
                    genre: genre
                }),
            });
        });
        console.log("api req result")
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

function* addNewSong(action) {
    console.log(action)
    try {
        yield postNewSong(action);
    } catch (e) {
        console.log(e)
    }
}

function* songSaga() {
    yield takeEvery('songs/getSongsFetch', workGetSongsFetch);
    yield takeEvery('songs/deleteSong', workDeleteSong);
    yield takeEvery('songs/addSong', addNewSong);
}

export default songSaga;