import { AiOutlinePlus } from "react-icons/ai";

const Input = () => {
  return (
    <>
      <form className="flex justify-items-center items-center">
        <input
          type="text"
          placeholder="Add new task"
          className="flex grow p-2"
        />
        <button className="bg-red-400 p-3">
          <AiOutlinePlus />
        </button>
      </form>
    </>
  );
};

export default Input;
