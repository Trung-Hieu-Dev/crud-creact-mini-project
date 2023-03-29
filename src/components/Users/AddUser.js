import React from 'react';

function AddUser() {
    const submitForm = (e) => {
        e.preventDefault();
    };

    return (
        <form action="username" onSubmit={submitForm}>
            <label htmlFor="username">Name:</label>
            <input type="text" id="username" />
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" />
            <button type="submit">Add User</button>
        </form>
    );
}

export default AddUser;
