import { Layout } from "./Layout/index";

import { Sidebar } from "./Sidebar";

function App() {
  return (
    <Layout>
      <div className="bg-brown-50 flex overflow-hidden rounded-2xl drop-shadow-2xl">
        <Sidebar
          open={false}
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </Layout>
  );
}

export default App;
