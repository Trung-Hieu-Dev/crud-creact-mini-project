import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (name, age) => {
        setUsersList((prevUserList) => {
            return [
                { name: name, age: age, id: Math.random().toString() },
                ...prevUserList,
            ];
        });
    };
    return (
        <div>
            <AddUser onSaveUser={addUserHandler} />
            <UsersList users={usersList} />
        </div>
    );
}

export default App;
