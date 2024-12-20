import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import Draggable from "react-draggable";
import { CardProps } from "./Card";
import PriorityType from "./constants/PriorityType";
import TodoCardType from "./constants/TodoCardType";

interface TodoFormProps {
  onSave: (inputs: CardProps) => void;
}

interface TodoFormValues {
  title: string;
  assignee: string;
  priority: PriorityType;
}

const TodoForm: React.FunctionComponent<TodoFormProps> = ({ onSave }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<TodoFormValues>({
    defaultValues: {
      title: "",
      assignee: "",
      priority: PriorityType.FIRST,
    },
  });

  const title = watch("title");
  const assignee = watch("assignee");
  const priority = watch("priority");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    initModal();
  };

  const initModal = () => {
    reset();
  };

  const saveData = () => {
    onSave({
      id: uuidv4(),
      title: title,
      assignee: assignee,
      priority: priority,
      type: TodoCardType.TODO,
      createdAt: Date.now(),
    });

    closeModal();
  };

  return (
      <div className="flex flex-col mx-auto justify-center items-center" data-theme="cozy">
        <button
            onClick={openModal}
            className="btn rounded-none border-none bg-primary"
        >
          <div className="text-primary-content">Add new TODO</div>
        </button>

        {isOpen && (
            <Draggable>
              <form
                  className="fixed inset-0 flex items-center justify-center z-50"
                  onSubmit={handleSubmit(saveData)}
              >
                <div className="bg-white p-6 rounded shadow-md max-w-sm w-full bg-base-100/50">
                  <h2 className="text-2xl font-bold mb-4 items-center">할 일 등록</h2>

                  {/* 1. 할 일 제목 */}
                  <div className="mb-4">
                    <label>
                      <p>어떤 일인가요?</p>
                    </label>
                    {errors?.title?.type === "required" && (
                        <p className="alert alert-error shadow-lg h-1 text-sm rounded-none">
                          This field is required
                        </p>
                    )}
                    {errors?.title?.type === "maxLength" && (
                        <p className="alert alert-error shadow-lg h-1 text-sm rounded-none">
                          Title cannot exceed 30 characters
                        </p>
                    )}
                    <input
                        {...register("title", { required: true, maxLength: 30 })}
                        type="text"
                        className="input input-bordered input-md border border-gray-300 p-2 focus:outline-none focus:border-primary"
                        placeholder="할 일을 입력하세요"
                        value={title}
                    />
                  </div>

                  {/* 2. 담당자 */}
                  <div className="mb-4">
                    <label>
                      <p>담당자는 누구인가요?</p>
                    </label>
                    {errors?.assignee?.type === "required" && (
                        <p className="alert alert-error shadow-lg h-1 text-sm rounded-none">
                          This field is required
                        </p>
                    )}
                    <input
                        {...register("assignee", { required: true, maxLength: 30 })}
                        type="text"
                        className="input input-bordered input-md border border-gray-300 p-2 focus:outline-none focus:border-primary"
                        placeholder="담당자를 입력하세요"
                        value={assignee}
                    />
                  </div>

                  {/* 3. 우선순위 */}
                  <div className="mb-4">
                    {errors.priority?.type === "required" && (
                        <span className="alert alert-error shadow-lg h-1 text-sm rounded-none">
                    옵션 중 하나를 선택하세요
                  </span>
                    )}
                    <label>
                      <p>우선순위를 선택하세요</p>
                    </label>
                    <div className="flex">
                      <div className="mb-4 flex justify-center items-center mx-1 my-2">
                        <input
                            type="radio"
                            value="1"
                            {...register("priority", { required: true })}
                            className="radio"
                        />
                        <label className="inline-flex items-center">1순위</label>
                      </div>
                      <div className="mb-4 flex justify-center items-center mx-1 my-2">
                        <input
                            type="radio"
                            value="2"
                            {...register("priority", { required: true })}
                            className="radio"
                        />
                        2순위
                        <label className="inline-flex items-center"></label>
                      </div>
                      <div className="mb-4 flex justify-center items-center mx-1 my-2">
                        <input
                            type="radio"
                            value="3"
                            {...register("priority", { required: true })}
                            className="radio"
                        />
                        <label className="inline-flex items-center">3순위</label>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap">
                    <button
                        onClick={closeModal}
                        className="flex mr-4 btn btn-ghost border border-gray-300"
                    >
                      닫기
                    </button>
                    <input
                        type="submit"
                        className="flex mx-auto btn bg-blue-500 rounded-none mr-2"
                    />
                    <button
                        onClick={initModal}
                        className="flex justify-end btn bg-blue-500 rounded-none"
                    >
                      내용 지우기
                    </button>
                  </div>
                </div>
              </form>
            </Draggable>
        )}
      </div>
  );
};

export default TodoForm;