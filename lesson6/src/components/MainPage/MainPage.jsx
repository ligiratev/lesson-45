import React from 'react';
import { useForm } from 'react-hook-form';

const MainPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [users, setUsers] = React.useState([]);

    const onSubmit = (data) => {
        setUsers([...users, data]);
        reset();
    };

    const handleDelete = (index) => {
        const newUsers = users.filter((_, i) => i !== index);
        setUsers(newUsers);
    };

    const handleClearTable = () => {
        setUsers([]);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Имя:</label>
                    <input
                        {...register('name', { required: 'Поле "Имя" обязательно для заполнения' })}
                        style={{ marginLeft: '10px' }}
                    />
                    {errors.name && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.name.message}</span>}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Имя пользователя:</label>
                    <input
                        {...register('username', { required: 'Поле "Имя пользователя" обязательно для заполнения' })}
                        style={{ marginLeft: '10px' }}
                    />
                    {errors.username && (
                        <span style={{ color: 'red', marginLeft: '10px' }}>{errors.username.message}</span>
                    )}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label>
                    <input
                        {...register('email', {
                            required: 'Поле "Email" обязательно для заполнения',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Некорректный email',
                            },
                        })}
                        style={{ marginLeft: '10px' }}
                    />
                    {errors.email && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.email.message}</span>}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Телефон:</label>
                    <input
                        {...register('phone', {
                            required: 'Поле "Телефон" обязательно для заполнения',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Телефон должен состоять из 10 цифр',
                            },
                        })}
                        style={{ marginLeft: '10px' }}
                    />
                    {errors.phone && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.phone.message}</span>}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Веб-сайт:</label>
                    <input {...register('website')} style={{ marginLeft: '10px' }} />
                </div>

                <button type="submit" style={{ marginRight: '10px' }}>
                    Создать
                </button>
                <button type="button" onClick={handleClearTable}>
                    Очистить таблицу
                </button>
            </form>

            <div>
                {users.length === 0 ? (
                    <p>Таблица пуста</p>
                ) : (
                    <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%' }}>
                        <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Имя пользователя</th>
                            <th>Email</th>
                            <th>Телефон</th>
                            <th>Веб-сайт</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>
                                    <button onClick={() => handleDelete(index)}>Удалить</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default MainPage;