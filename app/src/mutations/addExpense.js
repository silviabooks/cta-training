import { gql } from '@apollo/client';

export const ADD_EXPENSE = gql`
mutation newExpense($amount: Int!, $user_id: Int!, $notes: String!) {
  insert_expenses(objects: {amount: $amount, notes: $notes, user_id: $user_id}) {
    affected_rows
    returning {
      id
      created_at
      notes
      amount
    }
  }
}`;