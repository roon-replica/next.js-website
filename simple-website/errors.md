### 1. Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers. redux

- redux reducer 설정안해줘서 발생

### 2. Error: Hydration failed because the initial UI does not match what was rendered on the server.

- [stackoverflow 답변](https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render)
- 내외부 태그가 서로 잘 안맞아서 발생했음

### 3. TypeError: Cannot read properties of null (reading 'useContext')

- `const todoList = useAppSelector((state) => state.todo.todoList);` 이거 쓰니까 발생함..
- useAppSelector를 function 안에서 써야함...

### 4. Warning: Each child in a list should have a unique "key" prop.

- key 값보고 렌더링 조작한다고 함.. 이거 안주면 레더링 이상하게 되는듯

### 5. This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided.

- JSX는 렌더링할때 string이나 리액트 요소를 기대한다고 함.  
  근데 new Date()하면 Date 객체 반환해서 오류난거..!

### 6. TypeError: Cannot assign to read only property '0' of object '[object Array]'

- 불변값은 변경안되니까 복사해서 사용해야 함
