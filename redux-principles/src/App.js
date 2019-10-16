import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
import Video from './components/Video';

class App extends Component {
	state = {
		activeLesson: {}
	};

	render() {
		return (
			<div className='App'>
				<Video activeLesson={this.state.activeLesson} />
				<Sidebar modules={this.state.modules} />
			</div>
		);
	}
}

export default App;
