import React from 'react';

let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

export default class People extends React.Component {
	render(){
		return(
			<ul>
				{names.map((i, index) => (
					<li key={index}> 
						<a href={ "/page/" + i }>{ i }</a>
					</li>
					))}
			</ul>
		)
	}
}