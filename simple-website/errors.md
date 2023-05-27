### 1. Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers. redux

- redux reducer 설정안해줘서 발생

### 2. Error: Hydration failed because the initial UI does not match what was rendered on the server.

- [stackoverflow 답변](https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render)
- 내외부 태그가 서로 잘 안맞아서 발생했음

### 3. TypeError: Cannot read properties of null (reading 'useContext')

- `const todoList = useAppSelector((state) => state.todo.todoList);` 이거 쓰니까 발생함..
- useAppSelector를 function 안에서 써야함...

### 4. Warning: Each child in a list should have a unique "key" prop.

-
