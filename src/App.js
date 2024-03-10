import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/header/SearchHeader";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <SearchHeader />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </Provider>
    </>
  );
}
export default App;
