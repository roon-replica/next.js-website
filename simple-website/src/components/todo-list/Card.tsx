import PriorityType from "./constants/PriorityType";
import TodoCardType from "./constants/TodoCardType";

export interface CardProps {
  id: string;
  title: string;
  assignee: string;
  priority: PriorityType;
  type: TodoCardType;
}

const Card: React.FunctionComponent<CardProps> = ({
  id,
  title,
  assignee,
  priority,
  type,
}) => {
  return (
    <div className="flex flex-col justify-center items-center mx-4 my-2">
      <div className="card w-48 bg-sky-400 text-primary-content rounded-none">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-actions">
            <span>
              {assignee} {priority}
            </span>
            {type !== TodoCardType.DONE ? (
              <button className="btn btn-sm"> Right </button>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
