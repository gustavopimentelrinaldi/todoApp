import React from 'react';
import Menu from './template/menu'
import 'react-bootstrap/dist/bootstrap.min.css'
import Routes from './routes'
import './template/style.css'

export default props => (
  <main>
    <Menu/>
    <Routes/>
  </main>
)