import { Layout } from "./Layout";

export const layout = ({ registerAction }) => {
  registerAction({
    hook: "$REACT_ROOT_COMPONENT",
    handler: { component: Layout }
  });
};
