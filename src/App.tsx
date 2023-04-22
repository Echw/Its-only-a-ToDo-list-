import Input from "./Input";
import { Layout } from "./Layout/index";

function App() {
  return (
    <Layout>
      <div className="bg-stone-200 flex-col absolute  m-6 p-6 justify-center justify-items-center content-center rounded-2xl drop-shadow-2xl">
        <h1 className="text-zinc-700 m-6 text-3xl font-bold ">
          It's Only a ToDo list
        </h1>
        <Input />
      </div>
    </Layout>
  );
}

export default App;
