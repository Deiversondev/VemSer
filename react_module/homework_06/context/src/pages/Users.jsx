import { useState, useEffect, useContext } from "react";

import api from '../api'

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const {data} = await api.get('/users')
      setUsers(data);
    })()
  }, []);

  return (
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} <br/> </li>
          ))}
        </ul>
        <button>Sair</button>
      </div>
  );
}

export default Users;