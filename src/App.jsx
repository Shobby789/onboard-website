import { Suspense, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import Loader from "./components/Global/Loader";
import "regenerator-runtime/runtime";
import "core-js/stable";
import CustomScrollbar from "./components/Global/CustomScrollbar";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (position / totalHeight) * 100;
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <CustomScrollbar scrollPosition={scrollPosition} />
      <Routes>
        {routes.map((route, index) => {
          return <Route path={route.url} element={route.page} key={index} />;
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
