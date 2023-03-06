import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AddSong from "./componets/addSong";
import UpdateSong from "./componets/updateSong";
import Statistics from "./componets/statistics";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import songsReducer from './songState';
import songSaga from './songSaga';

const root = ReactDOM.createRoot(document.getElementById("root"));


const saga = createSagaMiddleware();

const store = configureStore({
   reducer: {
    songs:songsReducer
  },
   middleware:[saga]
});

saga.run(songSaga);


root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/addSong" element={<AddSong/>}></Route>
        <Route path="/updateSong/:id" element={<UpdateSong/>}></Route>
        <Route path="/statistics" element={<Statistics/>}></Route>
      </Routes>
    </BrowserRouter>
   
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
