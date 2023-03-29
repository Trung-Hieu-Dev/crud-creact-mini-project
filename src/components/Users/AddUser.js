import React from 'react';
import Card from '../UI/Card';

import classes from './AddUser.module.css';

function AddUser() {
    const submitForm = (e) => {
        e.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form action="username" onSubmit={submitForm}>
                <label htmlFor="username">Name:</label>
                <input type="text" id="username" />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" />
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
}

export default AddUser;
