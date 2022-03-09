import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from './bugs';

export default configureStore() {
    const store = configureStore({
        reducer
    })
}