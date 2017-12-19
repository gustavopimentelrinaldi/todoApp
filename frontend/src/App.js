import React from 'react';
import Menu from './template/menu'
import 'react-bootstrap/dist/bootstrap.min.css';
import Routes from './routes'

export default props => (
  <main>
    <Menu/>
    <Routes/>
  </main>
)