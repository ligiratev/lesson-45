import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  // Состояния
  const [inputValue, setInputValue] = useState(''); // Для хранения значения input
  const [names, setNames] = useState([]); // Для хранения списка имен

  // Ref для фокусировки на input
  const inputRef = useRef(null);

  // Обработчик добавления имени
  const handleAddName = () => {
    if (inputValue.trim()) {
      setNames([...names, inputValue]); // Добавляем имя в список
      setInputValue(''); // Очищаем поле ввода
      inputRef.current.focus(); // Фокусируемся на input
    }
  };

  // Обработчик изменения имени
  const handleChangeName = (index) => {
    if (inputValue.trim()) {
      const newNames = [...names]; // Копируем массив имен
      newNames[index] = inputValue; // Обновляем имя по индексу
      setNames(newNames); // Устанавливаем новый массив
      setInputValue(''); // Очищаем поле ввода
      inputRef.current.focus(); // Фокусируемся на input
    }
  };

  // Обработчик удаления имени
  const handleDeleteName = (index) => {
    const newNames = names.filter((_, i) => i !== index); // Удаляем имя по индексу
    setNames(newNames); // Устанавливаем новый массив
  };

  // Обработчик нажатия клавиши Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddName(); // Добавляем имя при нажатии Enter
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          {/* Поле ввода */}
          <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // Обработчик изменения input
              onKeyPress={handleKeyPress} // Обработчик нажатия Enter
              placeholder="Введите имя"
              ref={inputRef} // Привязываем ref к input
          />

          {/* Кнопка "Добавить" */}
          <button onClick={handleAddName} disabled={!inputValue.trim()}>
            Добавить
          </button>

          {/* Отображение списка имен */}
          {names.length === 0 ? (
              <p>Список пуст</p> // Сообщение, если список пуст
          ) : (
              <ul>
                {names.map((name, index) => (
                    <li key={index}>
                      {name}
                      {/* Кнопка "Поменять" */}
                      <button onClick={() => handleChangeName(index)} disabled={!inputValue.trim()}>
                        Поменять
                      </button>
                      {/* Кнопка "Удалить" */}
                      <button onClick={() => handleDeleteName(index)}>
                        Удалить
                      </button>
                    </li>
                ))}
              </ul>
          )}
        </header>
      </div>
  );
}

export default App;