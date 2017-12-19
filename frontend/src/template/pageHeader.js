import React from 'react'

export default props => (
    <header className='card-body'>
        <h2>{props.name} <small className="card-subtitle mb-2 text-muted">{props.small}</small></h2>
    </header>
)