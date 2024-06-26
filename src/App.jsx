import { Toaster } from "sonner";
import { LoadingContext, ProuctsContext } from "./Context";
import MainRouter from "./mainRouter";
import useFetchJson from "./useFetchJson";
import bb from "./assets/bb.png";
import useCart from "./useCartManagment";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
const url = "https://pymentserver.onrender.com";

function App() {
  const { data, loading, error } = useFetchJson("/products.json");
  const [appLoading, setAppLoading] = useState(false);

  const {
    total,
    cart,
    cartLength,
    addItem,
    removeItem,
    clearCart,
    removeNumProduct,
    addNumProduct,
  } = useCart();

  useEffect(() => {
    fetch(`${url}/api/`).then(async (r) => {});
  }, []);

  return (
    <LoadingContext.Provider value={{ appLoading, setAppLoading }}>
      <ProuctsContext.Provider
        value={{
          total,
          data,
          loading,
          error,
          cart,
          cartLength,
          addItem,
          removeItem,
          clearCart,
          removeNumProduct,
          addNumProduct,
        }}
      >
        {appLoading ? (
          <div className="z-loader fixed">
            <Loader />
          </div>
        ) : null}
        <Toaster richColors position="top-center" />
        <div className="bg-slate-900 w-full min-h-screen overflow-hidden relative">
          <div
            src={bb}
            className={`absolute bg-[url(./assets/bb.png)] w-screen h-full opacity-30 blur-sm z-0`}
          />
          <MainRouter />
        </div>
      </ProuctsContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
