import "react-datepicker/dist/react-datepicker.css";
import { Layout } from "./Layout/index";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <>
      <div className="h-full min-h-5/6 min-w-5/6 py-10 px-20 center flex justify-center grow">
        <Layout>
          <Sidebar
            open={false}
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Layout>
      </div>
    </>
  );
}

export default App;
