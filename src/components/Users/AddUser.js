import React, { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState();

    //reset error
    const errorHandler = () => {
        setError(null);
    };

    const userNameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const userAgeChangeHandler = (e) => {
        setEnteredUserAge(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (
            enteredUsername.trim().length === 0 ||
            enteredUserAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid input',
                message: 'The input field must not be empty',
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'The age field must be > 0',
            });
            return;
        }

        props.onSaveUser(enteredUsername, enteredUserAge);

        setEnteredUsername('');
        setEnteredUserAge('');
    };

    return (
        <>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}

            <Card className={classes.input}>
                <form action="username" onSubmit={submitForm}>
                    <label htmlFor="username">Name:</label>
                    <input
                        type="text"
                        id="username"
                        value={enteredUsername}
                        onChange={userNameChangeHandler}
                    />
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        value={enteredUserAge}
                        onChange={userAgeChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
