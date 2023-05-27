import CardType from "./constants/CardType";

interface CardProps {
  title: string;
  description: string;
  type: CardType;
}

const Card: React.FunctionComponent<CardProps> = ({
  title,
  description,
  type,
}) => {
  return (
    <div className="flex flex-col justify-center items-centermx-4 my-2">
      <div className="card w-48 bg-emerald-500 text-primary-content rounded-none">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {type !== CardType.DONE ? (
              <button className="btn">"move right"</button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
