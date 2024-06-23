import ChildComponents from "./ChildComponents";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const CounterWithClassFunComponent = ({ count, setCount }: TProps) => {
  return (
    <div className="border border-purple-500 p-10 m-10">
      <button
        className="bg-purple-500 p-5 rounded-md border border-black"
        onClick={() => setCount((prev) => prev + 1)}
      >
        click for update
      </button>
      <ChildComponents count={count} />
    </div>
  );
};

export default CounterWithClassFunComponent;
