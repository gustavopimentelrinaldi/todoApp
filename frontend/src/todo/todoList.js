import React from 'react'

export default props => {
	const renderRows = () => {
		const list = props.list || []
		return list.map(todo =>(
			<tr key={todo._id}>
				<td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
				<td>
					<button className={todo.done ? 'hide' : 'btn list btn-success'} onClick={() => props.handleMarkAsDone(todo)}>Feito</button>
					<button className={!todo.done ? 'hide' : ' btn list btn-warning'} onClick={() => props.handleMarkAsPending(todo)}>Desmarcar</button>
					<button className="btn list btn-danger" onClick={() => props.handleRemove(todo)}>Remover</button>
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