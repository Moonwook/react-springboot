// import logo from './logo.svg';
import { RouterProvider } from "react-router-dom";
import "./App.css";
import root from "./router/root";

function App() {
  //  return <h1 className="text-3xl font-bold underline ">Hello World</h1>;
  return <RouterProvider router={root} />;
}

export default App;
