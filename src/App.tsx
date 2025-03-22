import { Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cast from "./pages/Cast/indeex";
import Encode from "./pages/Encode";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/cast"
          element={<Cast />}
        />
        <Route
          path="/encode"
          element={<Encode />}
        />
      </Route>
    </Routes>
  );
};

export default App;
