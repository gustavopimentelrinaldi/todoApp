import React from 'react'

export default props => {
	const keyHandler = (e) => {
		if (e.key === 'Enter'){
			e.shiftKey ? props.handleSearch() : props.handleAdd()
		} else if(e.key === 'Escape'){
			props.handleClear()
		}
	}

	return(
		<form roley="form" className='todoForm container'>
			<div className="col-lg-12">
				<div className="input-group">
					<input type="text" className="form-control input-group-addon" placeholder="Adicionar uma tarefa..." onChange={props.handleChange} onKeyUp={keyHandler} value={props.description}/>
					<div className="btn-group" role="group" arial-label="Basic">
						<button className="btn btn-secondary" type="button" onClick={props.handleAdd}>Salvar!</button>
						<button className="btn btn-info" type="button" onClick={props.handleSearch}>Pesquisar</button>
					</div>
				</div>
			</div>
			<br/>
		</form>	
	)
}