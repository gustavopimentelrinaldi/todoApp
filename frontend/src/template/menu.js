import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
                <a className="navbar-brand" href="todos">
                    TodoApp
                </a>

            <div id="navbar" className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href='todos'>Tarefas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='about'>Sobre</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)