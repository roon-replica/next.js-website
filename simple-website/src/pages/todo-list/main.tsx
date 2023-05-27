import Header from "@/components/Header";
import CardHeader from "@/components/todo-list/CardHeader";
import TodoCardType from "@/components/todo-list/constants/TodoCardType";
import TodoModal from "@/components/todo-list/TodoModal";

// import { useAppDispatch } from "@/global-store/hooks";
import { add } from "@/global-store/todo-list/todoSlice";

import { CardProps } from "@/components/todo-list/Card";
import TodoColumn from "@/components/todo-list/TodoColumn";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();

  const createNewTodo = (modalInputs: CardProps) => {
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
        <CardHeader type={TodoCardType.TODO} />
        <CardHeader type={TodoCardType.DOING} />
        <CardHeader type={TodoCardType.DONE} />
      </div>

      <div className="flex flex-wrap">
        <TodoColumn type={TodoCardType.TODO} />
        <TodoColumn type={TodoCardType.DOING} />
        <TodoColumn type={TodoCardType.DONE} />
      </div>
    </>
  );
};

export default Main;
