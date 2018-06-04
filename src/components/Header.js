import React from 'react';

// export default class Header extends React.Component {
// 	render(){
// 		return(
// 		<h1> Hello World! </h1>
// 	);
// 	}
// }

const header = ({title, subtitle}) => (

			<h1>
			{title} 
			{''}
			{subtitle ? <small>{subtitle}</small> : null}
			</h1>
	)

export default header

