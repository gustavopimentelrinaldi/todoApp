import React from 'react'

export default props => (
<form className='todoForm container'>
	<div className="col-lg-12">
		<div className="input-group">
			<input type="text" className="form-control" placeholder="Adicionar uma tarefa..." onChange={props.handleChange} value={props.description}/>
			<span className="input-group-btn">
				<button className="btn btn-secondary" type="button" onClick={props.handleAdd}>Salvar!</button>
			</span>
		</div>
	</div>
</form>
)