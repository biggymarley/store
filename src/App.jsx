import { Toaster } from "sonner";
import { ProuctsContext } from "./Context";
import MainRouter from "./mainRouter";
import useFetchJson from "./useFetchJson";
import bb from "./assets/bb.png";
import useCart from "./useCartManagment";
function App() {
  const { data, loading, error } = useFetchJson("/products.json");
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

  return (
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
      <Toaster richColors position="top-center" />
      <div className="bg-slate-900 w-full min-h-screen overflow-hidden relative">
        <div
          src={bb}
          className={`absolute bg-[url(./assets/bb.png)] w-screen h-full opacity-30 blur-sm z-0`}
        />
        <MainRouter />
      </div>
    </ProuctsContext.Provider>
  );
}

export default App;
