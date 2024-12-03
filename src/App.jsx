import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useGameLogicStore } from "../useGameLogicStore";

import CustomCursor from "./components/CustomCursor";

//routes
import TitleScreen from "./routes/TitleScreen";
import Level from "./routes/Level";
import Options from "./routes/Options";
import GameOver from "./routes/GameOver";
import HowToPlay from "./routes/HowToPlay";

const App = () => {
  
  const { preLoadSoundEffects, allowCustomCursor } = useGameLogicStore();

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
    <div>
      <RouterProvider router={router}></RouterProvider>
      {allowCustomCursor && <CustomCursor />}
    </div>
  )
}

export default App;
