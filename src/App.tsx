import React from "react";

import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <>
      {/* <Provider store={store}> */}
      {/* <SearchHeader /> */}
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      {/* </Provider> */}
    </>
  );
};

export default App;
