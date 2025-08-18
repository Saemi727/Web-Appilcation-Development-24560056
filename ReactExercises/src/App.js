import React, { useState } from 'react';

// Import các component của từng bài
import HelloWorld from './components/HelloWorld';
import GreetingCard from './components/GreetingCard';
import Counter from './components/Counter';
import ToggleVisibility from './components/ToggleVisibility';
import TodoList from './components/TodoList';
import Timer from './components/Timer';
import UserProfile from './components/UserProfile';
import NavigationApp from './components/navigation/NavigationApp';
import LoginForm from './components/LoginForm';
import { ThemeProvider } from './components/theme/ThemeContext';
import ThemeSwitcher from './components/theme/ThemeSwitcher';

function App() {
  const [exercise, setExercise] = useState(1);

  const renderExercise = () => {
    switch (exercise) {
      case 1: return <HelloWorld />;
      case 2: return (
        <>
          <GreetingCard name="Alice" />
          <GreetingCard name="Bob" />
          <GreetingCard name="Charlie" />
        </>
      );
      case 3: return <Counter />;
      case 4: return <ToggleVisibility />;
      case 5: return <TodoList />; // Đã nâng cấp kèm lọc và delete
      case 6: return <TodoList />; // Bài 6 dùng cùng TodoList nâng cấp
      case 7: return <Timer />;
      case 8: return <UserProfile />;
      case 9: return <NavigationApp />;
      case 10: return <LoginForm />;
      case 11:
        return (
          <ThemeProvider>
            <ThemeSwitcher />
          </ThemeProvider>
        );
      default: return <p style={{ textAlign: 'center' }}>Select an exercise</p>;
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>React Lab Exercises</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <label>Choose Exercise: </label>
        <select value={exercise} onChange={(e) => setExercise(Number(e.target.value))}>
          <option value={1}>Ex1 - Hello World</option>
          <option value={2}>Ex2 - Greeting Card</option>
          <option value={3}>Ex3 - Counter</option>
          <option value={4}>Ex4 - Toggle Visibility</option>
          <option value={5}>Ex5 - Todo List</option>
          <option value={6}>Ex6 - Dynamic List Filtering</option>
          <option value={7}>Ex7 - Timer/Stopwatch</option>
          <option value={8}>Ex8 - Data Fetching</option>
          <option value={9}>Ex9 - Navigation (Router)</option>
          <option value={10}>Ex10 - Login Form</option>
          <option value={11}>Ex11 - Theme Switcher</option>
        </select>
      </div>
      {renderExercise()}
    </div>
  );
}

export default App;
