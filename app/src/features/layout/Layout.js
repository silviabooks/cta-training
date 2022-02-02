import { useGetContext } from "@forrestjs/react-root";
import { Routes, Route } from "react-router-dom";

export const Layout = () => {
  const routes = useGetContext("layout.routes.items");

  return (
    <Routes>
      {routes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Routes>
  );
};
