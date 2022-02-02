import { ListExpenses } from "./ListExpenses";
import { AddExpense } from "./AddExpense";

export const expenses = ({ registerAction }) => {
  registerAction({
    hook: "$LAYOUT_ROUTE_COMPONENTS",
    handler: [
      {
        props: {
          path: "/expenses",
          exact: true,
          element: <ListExpenses />
        }
      },
      {
        props: {
          path: "/expenses/add",
          exact: true,
          element: <AddExpense />
        }
      }
    ]
  });

  registerAction({
    hook: "$LAYOUT_MENU_COMPONENTS",
    handler: [
      {
        props: {
          to: "/expenses",
          children: "List Expenses"
        }
      },
      {
        props: {
          to: "/expenses/add",
          children: "Add Expense"
        }
      }
    ]
  });
};
