import TodoCardType from "./constants/TodoCardType";

export interface CardHeaderProps {
  type: TodoCardType;
}

const CardHeader: React.FunctionComponent<CardHeaderProps> = ({ type }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-4 my-2">
      <div className="card w-48 bg-sky-800 text-primary-content rounded-none">
        <div className="card-body">
          <h2 className="card-title">{type}</h2>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
