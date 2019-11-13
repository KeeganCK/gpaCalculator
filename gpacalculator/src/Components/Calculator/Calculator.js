import React from 'react';
import styles from './Calculator.css';


const calculator = props => {
	return(
		<div className="main1">
			<p>Grade</p>
			<p className="line"><button className="button2" value={9} onClick={props.click}>A+</button></p>
			<p className="line"><button className="button2" value={8} onClick={props.click}>A</button></p>
			<p className="line"><button className="button2" value={7} onClick={props.click}>A-</button></p>
			<p className="line"><button className="button2" value={6} onClick={props.click}>B+</button></p>
			<p className="line"><button className="button2" value={5} onClick={props.click}>B</button></p>
			<p className="line"><button className="button2" value={4} onClick={props.click}>B-</button></p>
			<p className="line"><button className="button2" value={3} onClick={props.click}>C+</button></p>
			<p className="line"><button className="button2" value={2} onClick={props.click}>C</button></p>
			<p className="line"><button className="button2" value={1} onClick={props.click}>D</button></p>
			<p className="line"><button className="button2" value={0} onClick={props.click}>F</button></p>
		</div>
	)
}

export default calculator;
