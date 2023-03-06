import { put, call, takeEvery } from 'redux-saga/effects';
import { getSongsSuccess } from './songState';


function* workGetSongsFetch() {
    const songs = yield call(() => fetch('https://mitkuaddissongapi.onrender.com/api/songs/'));
    const formatedSongs = yield songs.json();
    yield put(getSongsSuccess(formatedSongs));
}

function* workDeleteSong({ payload }) {
    const id = JSON.stringify(payload);
    const _id = id.replace(/["']/g, "");
    yield call(() => fetch(`https://mitkuaddissongapi.onrender.com/api/songs/${_id}`, { method: 'DELETE' }));
}

function* postNewSong(song) {
    const { title, artist, album, genre } = song.payload;
    console.log(song);
    try {
        yield call(() =>
            fetch("https://mitkuaddissongapi.onrender.com/api/songs/create", {
                method: 'POST',
                mode: "cors",
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    artist: artist,
                    album: album,
                    genre: genre
                }),
            }).then(res => res.json())
            .then(data => {
                // console.log(data)
            }));
    } catch (error) {
        console.log(error);
    }
}

function* addNewSong(action) {
    // console.log(action)
    try {
        yield postNewSong(action);
    } catch (e) {
        console.log(e)
    }
}


function* updateSong(song, { payload }) {
    const { title, artist, album, genre } = song.payload;
    const id = JSON.stringify(payload);
    const _id = id.replace(/["']/g, "");
    console.log(song);
    try {
        yield call(() =>
            fetch(`https://mitkuaddissongapi.onrender.com/api/songs/${_id}`, {
                method: 'PUT',
                mode: "cors",
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    artist: artist,
                    album: album,
                    genre: genre
                }),
            }).then(res => res.json())
            .then(data => {
                console.log(data)
            }));
    } catch (error) {
        console.log(error);
    }
}


function* updateOldSong(action, { payload }) {
    // console.log(action)
    try {
        yield updateSong(action, { payload });
    } catch (e) {
        console.log(e)
    }
}

function* songSaga() {
    yield takeEvery('songs/getSongsFetch', workGetSongsFetch);
    yield takeEvery('songs/deleteSong', workDeleteSong);
    yield takeEvery('songs/addSong', addNewSong);
    yield takeEvery('songs/updateSong', updateOldSong);
}

export default songSaga;