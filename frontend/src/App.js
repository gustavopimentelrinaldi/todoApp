import React from 'react';
import Todo from './todo/todo'
import About from './todo/about'
import Menu from './template/menu'
import 'react-bootstrap/dist/bootstrap.min.css';

export default props => (
  <div>
    <Menu/>
    <Todo/>
    <About/>
  </div>
)
