import { useAppDispatch } from "@/global-store/hooks";
import { update } from "@/global-store/todo-list/todoSlice";

import Card, { CardProps } from "./Card";
import TodoCardType from "./constants/TodoCardType";

interface TodoColumnProps {
  todoList: Array<CardProps>;
}

const TodoColumn: React.FC<TodoColumnProps> = ({ todoList }) => {
  const dispatch = useAppDispatch();

  // 이 로직 어디다 배치해야 좋을지
  function handleOnClickMoveCard(index: number) {
    const selectedTodo = todoList[index];

    const updatedTodo = { ...selectedTodo };
    const cardTypeString = TodoCardType[updatedTodo.type + 1];
    const cardType: TodoCardType =
      TodoCardType[cardTypeString as keyof typeof TodoCardType]; // 이게 최선인가. 되게 번거롭고 뭐하는건지도 잘 모르겠음

    updatedTodo.type = cardType;

    dispatch(update({ todo: updatedTodo }));

    console.log("index=", index);
  }

  return (
    <div className="flex flex-col">
      {todoList.length > 0 ? (
        todoList.map((todo, index) => {
          const cardProps = {
            id: todo.id,
            title: todo.title,
            assignee: todo.assignee,
            priority: todo.priority,
            type: todo.type,
            key: todo.id,
          };

          return (
            <Card
              key={todo.id}
              cardProps={cardProps}
              handleOnClickMoveCard={() => handleOnClickMoveCard(index)}
            ></Card>
          );
        })
      ) : (
        <div className="flex flex-col justify-center items-center mx-4 my-2 w-48">
          {/* <p>No cards</p> */}
        </div>
      )}
    </div>
  );
};

export default TodoColumn;
