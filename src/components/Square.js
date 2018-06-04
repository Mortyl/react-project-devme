import React from 'react';

	const divStyle = {
		width: 200,
		height: 200,
		background: 'red'

	}

export default class Square extends React.Component {

	render(){
		return(
		<div style={divStyle}></div>
	);
	}
}
