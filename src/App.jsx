import { createBrowserRouter, RouterProvider } from "react-router-dom";

//routes
import TitleScreen from "./routes/TitleScreen";
import Level from "./routes/Level";
import Options from "./routes/Options";
import GameOver from "./routes/GameOver";

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
    {
      path: "/game-over",
      element: <GameOver />,
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
