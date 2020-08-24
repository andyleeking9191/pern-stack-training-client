import React, { Fragment } from 'react';
import './App.css';

// Import Components

import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

function App() {
  return <Fragment>
  <InputTodo></InputTodo>
  <ListTodo></ListTodo>
  </Fragment>;
}

export default App;
