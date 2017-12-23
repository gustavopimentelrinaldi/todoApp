import React from 'react'

export default props => {
	const renderRows = () => {
		const list = props.list || []
		return list.map(todo =>(
			<tr key={todo._id}>
				<td>{todo.description}</td>
				<td>
					<button className="btn btn-danger" onClick={() => props.handleRemove(todo)}>Remover</button>
				</td>
			</tr>
		))
	}

	return(
		<table className='table'>
			<thead>
				<tr>
					<th scope="col">Descrição</th>
					<th scope="col">Ações</th>
				</tr>
			</thead>
			<tbody>
				{renderRows()}
			</tbody>
		</table>
	)
}