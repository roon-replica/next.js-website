import Header from "@/components/Header";
import CardHeader from "@/components/todo-list/CardHeader";
import CardType from "@/components/todo-list/constants/CardType";
import TodoModal, { TodoModalInputs } from "@/components/todo-list/TodoModal";

const Main = () => {
  const createNewTodo = (modalInputs: TodoModalInputs) => {
    console.log(
      `create new todo! ${modalInputs.title} ${modalInputs.assignee} ${modalInputs.priority}`
    );
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
