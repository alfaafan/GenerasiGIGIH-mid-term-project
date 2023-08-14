import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoList from "./components/Pages/VideoList/VideoList.jsx";
import VideoDetail from "./components/Pages/VideoDetail/VideoDetail.jsx";
import Navbar from "./components/UI/Navbar/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <VideoList />,
  },
  {
    path: "/:videoId",
    element: <VideoDetail />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
