import { put, call, takeEvery } from 'redux-saga/effects';
import { getSongsSuccess } from './songState';


function* workGetSongsFetch() {
    const songs = yield call(() => fetch('http://localhost:8000/api/songs/'));
    const formatedSongs = yield songs.json();
    yield put(getSongsSuccess(formatedSongs));
}

function* songSaga() {
    yield takeEvery('songs/getSongsFetch', workGetSongsFetch);
}

export default songSaga;