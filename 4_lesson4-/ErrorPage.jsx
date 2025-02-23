import React from 'react';

const ErrorPage = ({ user }) => {
    return (
        <div>
            <h1>Тебе сюда нельзя - {user.name} {user.lastname}</h1>
            <p>Для доступа введите имя "John" и фамилию "Johns".</p>
        </div>
    );
};

export default ErrorPage;