import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";

import SearchVideos from "./pages/SearchVideos";
import Top7Videos from "./pages/Top7Videos";
import RoundVideos from "./pages/RoundVideos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/videos/:keyword",
        element: <SearchVideos />,
      },
      {
        path: "/videos/watch/:videoId",
        element: <VideoDetail />,
      },
      {
        path: "/videos/top7/:memberName",
        element: <Top7Videos />,
      },
      {
        path: "/videos/round/:roundName",
        element: <RoundVideos />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <RouterProvider router={router} />
);

reportWebVitals();
