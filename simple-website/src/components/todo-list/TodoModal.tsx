import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CardProps } from "./Card";
import PriorityType from "./constants/PriorityType";
import TodoCardType from "./constants/TodoCardType";

interface TodoModalProps {
  onSave: (inputs: CardProps) => void; // todo: onSave 콜백 꼭 밖에서 주는 Props로 받아야 할까?
}

const TodoModal: React.FunctionComponent<TodoModalProps> = ({ onSave }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState(PriorityType.FIRST);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    initModal();
  };

  const initModal = () => {
    setTitle("");
    setPriority(PriorityType.FIRST);
    setAssignee("");
  };

  const saveData = () => {
    onSave({
      id: uuidv4(),
      title: title,
      assignee: assignee,
      priority: priority,
      type: TodoCardType.TODO,
    });

    closeModal();
  };

  return (
    <div className="flex flex-col mx-auto justify-center items-center">
      <button
        onClick={openModal}
        className="btn bg-blue-500 rounded-none border-none"
      >
        새로운 TODO 등록
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">할 일 등록</h2>

            {/* 1. 할 일 제목 */}
            <div className="mb-4">
              <label>
                <p>어떤 일인가요?</p>
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 focus:outline-none focus:border-primary"
                placeholder="할 일을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* 2. 담당자 */}
            <div className="mb-4">
              <select
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                className="form-select w-full border border-gray-500 p-2 focus:outline-none focus:border-primary"
              >
                <option value="">담당자를 선택하세요</option>
                <option value="roon">roon</option>
                <option value="BE Dev">BE Dev</option>
                <option value="FE Dev">FE Dev</option>
                <option value="App Dev">App Dev</option>
              </select>
            </div>

            {/* 3. 우선순위 */}
            <div className="mb-4">
              <label>
                <p>우선순위를 선택하세요</p>
              </label>
              <div className="flex">
                <div className="mb-4 flex flex-col justify-center items-center mx-1 my-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="option"
                      value="option1"
                      checked={priority === PriorityType.FIRST}
                      onChange={() => setPriority(PriorityType.FIRST)}
                      className="form-radio mr-2"
                    />
                    1순위
                  </label>
                </div>
                <div className="mb-4 flex flex-col justify-center items-center mx-1 my-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="option"
                      value="option2"
                      checked={priority === PriorityType.SECOND}
                      onChange={() => setPriority(PriorityType.SECOND)}
                      className="form-radio mr-2"
                    />
                    2순위
                  </label>
                </div>
                <div className="mb-4 flex flex-col justify-center items-center mx-1 my-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="option"
                      value="option3"
                      checked={priority === PriorityType.THIRD}
                      onChange={() => setPriority(PriorityType.THIRD)}
                      className="form-radio mr-2"
                    />
                    3순위
                  </label>
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
              <button
                onClick={saveData}
                className="flex  mx-auto btn bg-blue-500 rounded-none mr-2"
              >
                제출
              </button>
              <button
                onClick={initModal}
                className="flex justify-end btn bg-blue-500 rounded-none"
              >
                내용 지우기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoModal;
