import React, { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';

import classes from './AddUser.module.css';

function AddUser() {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    const userNameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const userAgeChangeHandler = (e) => {
        setEnteredUserAge(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log(enteredUsername, enteredUserAge);
    };

    return (
        <Card className={classes.input}>
            <form action="username" onSubmit={submitForm}>
                <label htmlFor="username">Name:</label>
                <input
                    type="text"
                    id="username"
                    onChange={userNameChangeHandler}
                />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" onChange={userAgeChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;
