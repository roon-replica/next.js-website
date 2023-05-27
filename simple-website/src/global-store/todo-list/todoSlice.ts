import PriorityType from "@/components/todo-list/constants/PriorityType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../globalStore";

export interface TodoState { title: string;  assignee: string;
    priority: PriorityType; }

const initialState: TodoState = { title: '', assignee: '', priority: PriorityType.FIRST}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<TodoState>) => {
            console.log('[todoSlice.add]', state, action)
        }
    }
})

export const {add} = todoSlice.actions
export const selectTodo = (state:RootState) => state.todo
export default todoSlice.reducer