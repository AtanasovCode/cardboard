import { createBrowserRouter, RouterProvider } from "react-router-dom";

//routes
import TitleScreen from "./routes/TitleScreen";
import Level from "./routes/Level";
import Options from "./routes/Options";

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
    {
      path: "/options",
      element: <Options />,
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
