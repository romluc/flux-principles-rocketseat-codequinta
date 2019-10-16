import React, { Component } from 'react';

// import { Container } from './styles';

export default class Sidebar extends Component {
	render() {
		return (
			<aside>
				{modules.map(module => (
					<div key={module.id}>
						<strong>{module.title}</strong>
						<ul>
							{module.lessons.map(lesson => (
								<li key={lesson.id}>{lesson.title}</li>
							))}
						</ul>
					</div>
				))}
			</aside>
		);
	}
}
