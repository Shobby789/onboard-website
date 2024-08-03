import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import Loader from "./components/Global/Loader";
import "regenerator-runtime/runtime";
import "core-js/stable";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map((route, index) => {
          return <Route path={route.url} element={route.page} key={index} />;
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
