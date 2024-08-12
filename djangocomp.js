import React from 'react'; 
import axios from 'axios'; 

class App extends React.Component { 

	state = { 
		details : [], 
	} 

	componentDidMount() { 

		let data ; 

		axios.get('http://localhost:8000/writeup/') 
		.then(res => { 
			data = res.data; 
			this.setState({ 
				details : data	 
			}); 
		}) 
		.catch(err => {}) 
	} 

render() { 
	return( 
	<div> 
			{this.state.details.map((detail, id) => ( 
			<div key={id}> 
			<div > 
				<div > 
						<h1>{detail.title} </h1> 
						<footer >--- by 
						<cite title="Source Title"> 
						{detail.username}</cite> 
						</footer> 
				</div> 
			</div> 
			</div> 
			) 
		)} 
	</div> 
	); 
} 
} 

export default App;
