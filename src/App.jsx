import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useGameLogicStore } from "../useGameLogicStore";

//routes
import TitleScreen from "./routes/TitleScreen";
import Level from "./routes/Level";
import Options from "./routes/Options";
import GameOver from "./routes/GameOver";
import HowToPlay from "./routes/HowToPlay";

const App = () => {
  
  const { preLoadSoundEffects } = useGameLogicStore();

  useEffect(() => {
    preLoadSoundEffects();
  }, [])

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
    {
      path: "/how-to-play",
      element: <HowToPlay />,
    },
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
