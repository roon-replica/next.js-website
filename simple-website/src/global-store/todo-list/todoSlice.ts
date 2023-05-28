import { CardProps } from "@/components/todo-list/Card";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoListState {
    todoList: Array<CardProps> // todo, doing, done 따로 나눠서 관리하는게 나으려나??
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
        },
        update: (state, action) => {
            const id = action.payload.todo.id
            const index = state.todoList.findIndex(todo => todo.id === id)
            const updatedTodo = action.payload.todo
            state.todoList[index] = updatedTodo
        }
    }
})

export const {add, update} = todoSlice.actions
// export const selectTodo = (state:RootState) => state.todo
export default todoSlice.reducer