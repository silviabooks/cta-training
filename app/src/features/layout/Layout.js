import { createElement } from "react";
import { useGetContext } from "@forrestjs/react-root";
import { Routes, Route } from "react-router-dom";
import { MenuItem } from "./MenuItem";

export const Layout = () => {
  const routes = useGetContext("layout.routes.items");
  const menu = useGetContext("layout.menu.items");
  const title = useGetContext("layout.title");

  return (
    <div>
      <div id="title">{createElement(title.component, title.props)}</div>

      <div id="menu">
        {menu.map((item) =>
          createElement(item.component || MenuItem, {
            ...item.props,
            key: item.props.to
          })
        )}
      </div>

      <hr />

      <div id="routes">
        <Routes>
          {routes.map((route) =>
            createElement(route.component || Route, {
              ...route.props,
              key: route.props.path
            })
          )}
        </Routes>
      </div>
    </div>
  );
};
