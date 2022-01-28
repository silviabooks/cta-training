import { useQuery } from '@apollo/client'
import { CreateExpense } from './CreateExpense';
import { GET_USERS } from './queries/getUsers';

function App() {
  const res = useQuery(GET_USERS);
  console.log(res.data)

  return (
    <div>
      <CreateExpense users={res?.data?.users} />

      <h5>Users' statistics:</h5>
      {res.data && (
        <ul>
          {res.data.users.map(user => (
            <li>
              {user.name}
              ({user.expenses.length} expenses)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
