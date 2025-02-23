import React, { useState, useEffect, useRef } from 'react';
import MainPage from './pages/MainPage/MainPage';
import ErrorPage from './pages/MainPage/ErrorPage';

function App() {
  const [user, setUser] = useState({ name: '', lastname: '' });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isFirstRender = useRef(true); // Используем useRef для отслеживания первого рендера

  useEffect(() => {
    if (isFirstRender.current) {
      const name = prompt("Введите ваше имя:");
      const lastname = prompt("Введите вашу фамилию:");

      if (name && lastname) {
        setUser({ name, lastname });
        if (name === 'John' && lastname === 'Johns') {
          setIsAuthenticated(true);
        }
      }

      isFirstRender.current = false; // Устанавливаем флаг в false после первого рендера
    }
  }, []);

  return (
      <div className="App">
        {isAuthenticated ? (
            <MainPage user={user} />
        ) : (
            <ErrorPage user={user} />
        )}
      </div>
  );
}

export default App;