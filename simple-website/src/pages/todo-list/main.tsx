import Header from "@/components/Header";
import CardHeader from "@/components/todo-list/CardHeader";
import CardType from "@/components/todo-list/constants/CardType";
import TodoModal, { TodoModalInputs } from "@/components/todo-list/TodoModal";

import { useAppDispatch } from "@/global-store/hooks";
import { add } from "@/global-store/todo-list/todoSlice";

const Main = () => {
  //   const todo = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const createNewTodo = (modalInputs: TodoModalInputs) => {
    dispatch(add(modalInputs));
  };

  return (
    <>
      <div className="mb-7 flex flex-wrap items-center">
        <Header
          header="나의 해야할 일들"
          headerTextClassName="flex flex-col ml-1 mt-4 text-xl transform -rotate-45 font-bold"
        />

        <TodoModal onSave={createNewTodo} />
      </div>
      <div className="flex flex-wrap">
        <CardHeader type={CardType.TODO} />
        <CardHeader type={CardType.DOING} />
        <CardHeader type={CardType.DONE} />
      </div>
    </>
  );
};

export default Main;
