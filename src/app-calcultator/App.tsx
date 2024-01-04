import { Provider } from "react-redux";
import { store } from "./data/store";
import Calcultor from "./components/Calculator";
import { createHashRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

const router = createHashRouter([
  {
    path: "",
    element: <Calcultor />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
