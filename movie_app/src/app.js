import React from 'react';
import { render } from 'react-dom';
import { TodoList } from './components';

const dummyTodos = [
  { id: 0, isDone: true,  text: 'make components1' },
  { id: 1, isDone: false, text: 'design actions1' },
  { id: 2, isDone: false, text: 'implement reducer1' },
  { id: 3, isDone: false, text: 'connect components1' }
];

render(
  <TodoList todos={dummyTodos} />,
  document.getElementById('app')
);
