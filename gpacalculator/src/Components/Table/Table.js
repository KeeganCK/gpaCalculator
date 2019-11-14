import React from 'react';
import styles from './Table.css';


const table = props => {
	return(
		<div className="main2">
			<p className="table">Table</p>
			<table className="table1">
				<tbody>
					<tr>
						<td className="td1">A+ count</td>
						<td className="td2">{props.amountAP}</td>
					</tr>
					<tr>
						<td className="td1">A count</td>
						<td className="td2">{props.amountA}</td>
					</tr>
					<tr>
						<td className="td1">A- count</td>
						<td className="td2">{props.amountAM}</td>
					</tr>
					<tr>
						<td className="td1">B+ count</td>
						<td className="td2">{props.amountBP}</td>
					</tr>
					<tr>
						<td className="td1">B count</td>
						<td className="td2">{props.amountB}</td>
					</tr>
					<tr>
						<td className="td1">B- count</td>
						<td className="td2">{props.amountBM}</td>
					</tr>
					<tr>
						<td className="td1">C+ count</td>
						<td className="td2">{props.amountCP}</td>
					</tr>
					<tr>
						<td className="td1">C count</td>
						<td className="td2">{props.amountC}</td>
					</tr>
					<tr>
						<td className="td1">D count</td>
						<td className="td2">{props.amountD}</td>
					</tr>
					<tr>
						<td className="td1">F count</td>
						<td className="td2">{props.amountF}</td>
					</tr>
					<tr>
						<td className="td1">Number of Classes</td>
						<td className="td2">{props.classes}</td>
					</tr>
					<tr>
						<td className="td1">Number of credits</td>
						<td className="td2">{props.credit}</td>
					</tr>
					<tr>
						<td className="td1">Total of Credits</td>
						<td className="td2">{props.credits}</td>
					</tr>
					<tr className="marginBottom">
						<td className="td11">Grades entered</td>
						<td className="td22">{props.list} </td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}


export default table;
