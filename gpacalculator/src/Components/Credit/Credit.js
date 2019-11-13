import React from 'react';
import styles from './Credit.css';


const credit = props => {
	return(
		<div className="main">
			<p>Credit</p>
			<p className="line"><button className="button1" value={2} onClick={props.clickCred}>2</button></p>
			<p className="line"><button className="button1" value={1.5} onClick={props.clickCred}>1.5</button></p>
			<p className="line"><button className="button1" value={1} onClick={props.clickCred}>1</button></p>
			<p className="line"><button className="button1" value={0.5} onClick={props.clickCred}>0.5</button></p>
		</div>
	)
}

export default credit;
