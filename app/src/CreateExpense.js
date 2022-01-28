import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_USERS } from "./queries/getUsers";
import { ADD_EXPENSE } from "./mutations/addExpense";

const refreshPage = () => {
  window.location.reload(false);
};

const inputStyle = { width: "170px" };

export const CreateExpense = () => {
  const [notes, setNotes] = useState("Pizza");
  const [amount, setAmount] = useState(15);
  const [userId, setUserId] = useState(2);
  const [errorMessage, setErrorMessage] = useState();

  const users = useQuery(GET_USERS);
  const [addExpense] = useMutation(ADD_EXPENSE);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const submit = () => {
    setErrorMessage(null);
    addExpense({
      variables: {
        amount,
        notes,
        user_id: userId,
      },
    })
      .then((res) => {
        console.log(res);
        refreshPage();
      })
      .catch((err) => {
        setErrorMessage(err.message);
        console.error(err.message);
      });
  };
  return (
    <div>
      <h3>Insert a new expense</h3>
      <br />
      <label>User:</label>
      <br />
      <select
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={inputStyle}
      >
        {users?.data?.users &&
          users.data.users.map((u) => {
            return <option value={u.id}>{u.name}</option>;
          })}
      </select>
      <br />
      <label>Notes:</label>
      <br />
      <input
        type="text"
        value={notes}
        style={inputStyle}
        onChange={(e) => setNotes(e.target.value)}
      />{" "}
      <br />
      <label>Amount:</label> <br />
      <input
        type="number"
        value={amount}
        style={inputStyle}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button
        type="button"
        onClick={submit}
        style={{ ...inputStyle, marginTop: "10px" }}
      >
        Add!
      </button>
      {errorMessage && <h6>{errorMessage}</h6>}
    </div>
  );
};
