import { createBrowserRouter, RouterProvider } from "react-router-dom";

//routes
import TitleScreen from "./routes/TitleScreen";
import Level from "./routes/Level";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TitleScreen />,
    },
    {
      path: "/play",
      element: <Level />,
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
