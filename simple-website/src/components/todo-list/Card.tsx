import { ArrowRightIcon } from "@heroicons/react/outline";
import PriorityType from "./constants/PriorityType";
import TodoCardType from "./constants/TodoCardType";

export interface CardProps {
  id: string;
  title: string;
  assignee: string;
  priority: PriorityType;
  type: TodoCardType;
  createdAt: number;
}

interface CardComponentProps {
  cardProps: CardProps;
  handleOnClickMoveCard: () => void;
}

const Card = ({ cardProps, handleOnClickMoveCard }: CardComponentProps) => {
  const { title, assignee, priority, type, createdAt } = cardProps;
  const date = new Date(createdAt).toLocaleString();

  return (
      <div className="flex flex-col justify-center items-center mx-4 my-2" data-theme="cozy">
        <div className="card w-96 bg-info text-primary-content rounded-none p-2 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-lg font-bold mb-2">{title}</h2>
            <div className="card-actions mb-2">
              <div className="flex flex-col space-y-1">
                <span className="font-medium">담당자: {assignee}</span>
                <span className="font-medium">우선순위: {priority}</span>
                <span className="font-medium">생성일자: {date}</span>
              </div>
            </div>
            {type !== TodoCardType.DONE && (
                <button
                    className="btn btn-sm bg-primary text-primary-content mt-2"
                    onClick={handleOnClickMoveCard}
                >
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
            )}
          </div>
        </div>
      </div>
  );
};

export default Card;