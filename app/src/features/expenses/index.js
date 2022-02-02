import { ListExpenses } from "./ListExpenses";
import { AddExpense } from "./AddExpense";

export const expenses = {
  hook: "$LAYOUT_ROUTES",
  handler: [
    {
      path: "/expenses",
      exact: true,
      element: <ListExpenses />
    },
    {
      path: "/expenses/add",
      exact: true,
      element: <AddExpense />
    }
  ]
};
