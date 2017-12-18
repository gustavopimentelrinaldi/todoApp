import React from 'react';
import Todo from './todo/todo'
import About from './todo/about'
import 'react-bootstrap/dist/bootstrap.min.css';

export default props => (
  <div className="container">
   <Todo/>
   <About/>
  </div>
)
