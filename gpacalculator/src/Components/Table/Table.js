import React from 'react';
import styles from './Table.css';


const table = props => {
	return(
		<div className="main2">
			<p className="table">Table</p>
			<table class="table1">
				<tr>
					<td class="td1">A+ count</td>
					<td class="td2">{props.amountAP}</td>
				</tr>
				<tr>
					<td class="td1">A count</td>
					<td class="td2">{props.amountA}</td>
				</tr>
				<tr>
					<td class="td1">A- count</td>
					<td class="td2">{props.amountAM}</td>
				</tr>
				<tr>
					<td class="td1">B+ count</td>
					<td class="td2">{props.amountBP}</td>
				</tr>
				<tr>
					<td class="td1">B count</td>
					<td class="td2">{props.amountB}</td>
				</tr>
				<tr>
					<td class="td1">B- count</td>
					<td class="td2">{props.amountBM}</td>
				</tr>
				<tr>
					<td class="td1">C+ count</td>
					<td class="td2">{props.amountCP}</td>
				</tr>
				<tr>
					<td class="td1">C count</td>
					<td class="td2">{props.amountC}</td>
				</tr>
				<tr>
					<td class="td1">D count</td>
					<td class="td2">{props.amountD}</td>
				</tr>
				<tr>
					<td class="td1">F count</td>
					<td class="td2">{props.amountF}</td>
				</tr>
				<tr>
					<td class="td1">Number of Classes</td>
					<td class="td2">{props.classes}</td>
				</tr>
				<tr>
					<td class="td1">Number of credits</td>
					<td class="td2">{props.credit}</td>
				</tr>
				<tr>
					<td class="td1">Total of Credits</td>
					<td class="td2">{props.credits}</td>
				</tr>
				<tr>
					<td class="td11">Grades entered</td>
					<td class="td22">{props.list} </td>
				</tr>
			</table>
		</div>
	)
}


export default table;
