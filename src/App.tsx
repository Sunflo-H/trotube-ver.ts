import React from "react";

import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header/Header";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <>
      {/* <Provider store={store}> */}
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      {/* </Provider> */}
    </>
  );
};

export default App;
