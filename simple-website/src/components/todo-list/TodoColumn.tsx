import { useAppSelector } from "@/global-store/hooks";

import Card from "./Card";
import TodoCardType from "./constants/TodoCardType";

interface TodoColumnProps {
  type: TodoCardType;
}

const TodoColumn: React.FC<TodoColumnProps> = ({ type }) => {
  console.log(type);

  const todoList = useAppSelector((state) => state.todo.todoList);
  console.log(todoList);

  return (
    <>
      {todoList.map((todo) =>
        todo.type === type ? (
          <Card
            id={todo.id}
            title={todo.title}
            assignee={todo.assignee}
            priority={todo.priority}
            type={todo.type}
            key={todo.id}
          ></Card>
        ) : null
      )}
    </>
  );
};

export default TodoColumn;
