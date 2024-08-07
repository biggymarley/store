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
  const {
    data,
    displayData,
    loading,
    error,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    goToPage,
    searchData,
    toggleSortOrder,
    sortOrder,
  } = useFetchJson("/products.json");
  const [appLoading, setAppLoading] = useState(false);
  const [userData, setuserData] = useState(undefined);

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
    fetch(`${url}/api/`, {
      mode: "cors",
      method: "GET",
    }).then(async () => {});
  }, []);

  return (
    <LoadingContext.Provider value={{ appLoading, setAppLoading }}>
      <ProuctsContext.Provider
        value={{
          data,
          total,
          displayData,
          loading,
          error,
          cart,
          cartLength,
          userData,
          setuserData,
          addItem,
          removeItem,
          clearCart,
          removeNumProduct,
          addNumProduct,
          currentPage,
          totalPages,
          nextPage,
          previousPage,
          goToPage,
          searchData,
          toggleSortOrder,
          sortOrder,
        }}
      >
        {appLoading ? (
          <div className="z-loader fixed">
            <Loader />
          </div>
        ) : null}
        <Toaster richColors position="top-center" />
        <div className="bg-white w-full min-h-screen  relative flex flex-col">
          {/* <div
            src={bb}
            className={`absolute bg-[url(./assets/bb.png)] w-screen h-full opacity-30 blur-sm z-0`}
          /> */}
          <MainRouter />
        </div>
      </ProuctsContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
