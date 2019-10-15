import React from 'react';
import { bindActionCreators } from 'redux';
import * as todoActions from './actions/todos';

export default function ToDo() {
	return (
		<>
			<ul>
				<li>ToDo Item</li>
			</ul>

			<input type='text' />
			<button>New ToDo</button>
		</>
	);
}

const mapDispatchToProps = dispatch => {
	bindActionCreators(todoActions, dispatch);
};
