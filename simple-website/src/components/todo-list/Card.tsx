import { ArrowRightIcon } from "@heroicons/react/24/outline";
import PriorityType from "./constants/PriorityType";
import TodoCardType from "./constants/TodoCardType";
export interface CardProps {
  id: string;
  title: string;
  assignee: string;
  priority: PriorityType;
  type: TodoCardType;
  createdAt: number; // Date가 아니라 이렇게 쓰는게 맞을지
}

interface CardComponentProps {
  cardProps: CardProps;
  handleOnClickMoveCard: () => void;
}

const Card = ({ cardProps, handleOnClickMoveCard }: CardComponentProps) => {
  const { id, title, assignee, priority, type, createdAt } = cardProps;
  const date = new Date(createdAt).toLocaleString();

  return (
    <div className="flex flex-col justify-center items-center mx-4 my-2">
      <div className="card w-48 bg-sky-400 text-primary-content rounded-none">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions">
            <span> 담당자: {assignee} </span>
            <span> 우선순위: {priority}</span>
            <span> 생성일자: {date}</span>

            {type !== TodoCardType.DONE && (
              <button
                className="btn btn-sm"
                onClick={() => handleOnClickMoveCard()}
              >
                <div className="top-0 right-0 mt-1 mr-1">
                  <ArrowRightIcon className="w-4 h-4 bg-red" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
