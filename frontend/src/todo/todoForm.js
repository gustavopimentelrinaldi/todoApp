import React from 'react'

export default props => (
    <div role='form' className='todoForm container'>
        <div class="row">
            <div class="col-lg-6">
                <div class="input-group">
                <input type="text" class="form-control" placeholder="Adicionar uma tarefa..." aria-label="Search for..."/>
                <span class="input-group-btn">
                    <button class="btn btn-secondary" type="button">Salvar!</button>
                </span>
                </div>
            </div>
        </div>
    </div>
)