import { createBrowserRouter, RouterProvider } from "react-router-dom";

//routes
import TitleScreen from "./routes/TitleScreen";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TitleScreen />,
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
