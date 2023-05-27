import Header from "@/components/Header";
import CardHeader from "@/components/todo-list/CardHeader";
import CardType from "@/components/todo-list/constants/CardType";

const Main = () => {
  return (
    <>
      <div className="mb-7 flex flex-wrap items-center">
        <Header
          header="나의 해야할 일들"
          headerTextClassName="flex flex-col ml-1 mt-4 text-xl transform -rotate-45 font-bold"
        />
        <button className="flex flex-col mx-auto justify-center items-center btn bg-blue-500 rounded-none">
          새로운 TODO 등록
        </button>
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
