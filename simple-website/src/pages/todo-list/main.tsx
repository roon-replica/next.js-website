import Header from "@/components/Header";
import CardHeader from "@/components/todo-list/CardHeader";
import TodoCardType from "@/components/todo-list/constants/TodoCardType";
import TodoForm from "@/components/todo-list/TodoFormModal";

// import { useAppDispatch } from "@/global-store/hooks";
import {add} from "@/global-store/todo-list/todoSlice";

import {CardProps} from "@/components/todo-list/Card";
import TodoColumn from "@/components/todo-list/TodoColumn";

import {useAppDispatch, useAppSelector} from "@/global-store/hooks";

const Main = () => {
    const dispatch = useAppDispatch();
    const todoList = useAppSelector((state) => state.todo.todoList);

    console.log(todoList);

    /**
     * TypeError: Cannot assign to read only property '0' of object '[object Array]' 발생..
     * 여기서 정렬 못하는건가
     * 그럼 렌더링할때 정렬해줘야 하나
     * 아래 sortedTodoList 사용하니 해결되네..
     * redux 저장소랑 동기화 이슈있을줄 알았는데 문제없나보네
     todoList.sort((t1, t2) => {
     if (t1.priority !== t2.priority) return t1.priority - t2.priority;
     else t1.createdAt - t2.createdAt;

     return 0; // 이거 안 쓰면 오류나네.. undefined가 발생할 수 있다네
     });
     */

    const sortedTodoList = [...todoList].sort((t1, t2) => {
        if (t1.priority !== t2.priority) return t1.priority - t2.priority;
        else t1.createdAt - t2.createdAt;

        return 0; // 이거 안 쓰면 오류나네.. undefined가 발생할 수 있다네
    });

    const createNewTodo = (modalInputs: CardProps) => {
        dispatch(add(modalInputs));
    };

    return (
        <div className="min-h-screen p-6">
            <div className="mb-7 flex flex-wrap items-center">
                <Header
                    header="나의 해야할 일들"
                    headerTextClassName="flex flex-col ml-1 mt-4 text-xl transform font-italic"
                />

                <TodoForm onSave={createNewTodo}/>
            </div>
            <div className="flex flex-wrap">
                <CardHeader type={TodoCardType.TODO}/>
                <CardHeader type={TodoCardType.DOING}/>
                <CardHeader type={TodoCardType.DONE}/>
            </div>

            <div className="flex flex-wrap">
                <TodoColumn
                    todoList={sortedTodoList.filter(
                        (todo) => todo.type === TodoCardType.TODO
                    )}
                />
                <TodoColumn
                    todoList={sortedTodoList.filter(
                        (todo) => todo.type === TodoCardType.DOING
                    )}
                />
                <TodoColumn
                    todoList={sortedTodoList.filter(
                        (todo) => todo.type === TodoCardType.DONE
                    )}
                />
            </div>
        </div>
    );
};

export default Main;
