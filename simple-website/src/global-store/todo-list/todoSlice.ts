import { CardProps } from "@/components/todo-list/Card";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoListState {
    todoList: Array<CardProps>
}

const initialState: TodoListState = { 
    todoList: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CardProps>) => {
            state.todoList.push(action.payload)
            console.log('[todoSlice.add]', state.todoList)
        }
    }
})

export const {add} = todoSlice.actions
// export const selectTodo = (state:RootState) => state.todo
export default todoSlice.reducer