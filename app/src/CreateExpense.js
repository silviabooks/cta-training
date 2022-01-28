import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_USERS } from './queries/getUsers';
import { ADD_EXPENSE } from './mutations/addExpense';

const refreshPage = () => {
  window.location.reload(false);
}

export const CreateExpense = () => {
  const [notes, setNotes] = useState('Pizza');
  const [amount, setAmount] = useState(15);
  const [userId, setUserId] = useState(2);

  const users = useQuery(GET_USERS);
  const [addExpense] = useMutation(ADD_EXPENSE);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const submit = () => {
    addExpense({
      variables: {
        amount: 10,
        notes: "Pizza",
        user_id: 2
      }
    }).then((res) => {
      console.log(res);
      refreshPage();
    })
  }
  return <div>
    <h3>Insert a new expense</h3><br />
    <label>User:</label><br />
    <select value={userId}
      onChange={(e) => setUserId(e.target.value)}
      style={{ width: "170px" }}>
      {users?.data?.users && users.data.users.map(u => {
        return <option value={u.id}>{u.name}</option>
      })}
    </select><br />
    <label>Notes:</label><br />
    <input type="text" value={notes}
      onChange={(e) => setNotes(e.target.value)} /> <br />
    <label>Amount:</label> <br />
    <input type="number" value={amount}
      onChange={(e) => setAmount(e.target.value)} />
    <br />
    <button type="button" onClick={submit}
      style={{ marginTop: "10px", width: "170px" }}>
      Add!
    </button>
  </div>;
}
