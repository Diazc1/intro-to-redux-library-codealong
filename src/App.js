import React, { Component } from 'react';
import './App.css';

class App extends Component {
	handleOnClick = () => {
		//once we've created the store and passed it to the App component as a prop, 
		//we can access it using this.props.store
		this.props.store.dispatch({
		  type: 'INCREASE_COUNT',
		});
	  }

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.store.getState().clicks}</p>
			</div>
		);
	}
}

export default App;
