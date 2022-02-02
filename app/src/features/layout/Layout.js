import { createElement } from "react";
import { useGetContext } from "@forrestjs/react-root";
import { Routes, Route } from "react-router-dom";

export const Layout = () => {
  const routes = useGetContext("layout.routes.items");
  const title = useGetContext("layout.title");

  return (
    <div>
      {createElement(title.component, title.props)}
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </div>
  );
};
