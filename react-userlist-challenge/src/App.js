import { useState } from 'react';
import AddUser from './components/Adduser/AddUser';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState('');

  const newUserHandler = (newUser) => {
    if(!newUser.error) {
      const name = newUser.name
      const userdata = {
        name: name,
        age: newUser.age,
        gen:newUser.gen,
        id: `${name.slice(0,3)}${Math.random().toFixed(3)}`
      }
      setUsers((prevUsers) => {
        return [userdata, ...prevUsers]
      })
    }
  }
  
  return (
    <main className="App">
      <h2 className="App-title">React user "management" project</h2>
      <AddUser onUserAdd={newUserHandler} />
      <UserList users={users} />
    </main>
  );
}

export default App;
