import { Provider } from "react-redux";
import { simpan } from "./data/simpan";
import Kalkulator from "./komponen/Kalkulator";
import Tentang from "./komponen/Tentang";
import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "",
    element: <Kalkulator />,
  },
  {
    path: "tentang",
    element: <Tentang />,
  },
]);

export function App() {
  return (
    <Provider store={simpan}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
