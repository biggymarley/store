import { Toaster } from "sonner";
import { ProuctsContext } from "./Context";
import MainRouter from "./mainRouter";
import useFetchJson from "./useFetchJson";

function App() {
  const { data, loading, error } = useFetchJson("/products.json");

  return (
    <ProuctsContext.Provider value={{ data, loading, error }}>
      <Toaster richColors  position="top-center"/>
      <div className="bg-slate-900 w-full min-h-screen">
        <MainRouter />
      </div>
    </ProuctsContext.Provider>
  );
}

export default App;
