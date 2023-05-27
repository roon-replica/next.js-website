import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todo-list/todoSlice';

const globalStore = configureStore({
    reducer: {
        todo: todoReducer
    }
})

export type RootState = ReturnType<typeof globalStore.getState>
export type AppDispatch = typeof globalStore.dispatch

export default globalStore