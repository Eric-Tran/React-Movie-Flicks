import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchBar extends Component {

	handleFormSubmit(search) {
		this.props.searchTitle(search.search);
	}


	render() {
		const { handleSubmit, fields: { search }} = this.props;
		return (
			<div className="searchbar">
				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<fieldset className="form-group">
						<input 
						className="form-control searchbar-input" type="text" 
						placeholder="Search for a movie or tv show..."
						{...search} />
					</fieldset>
				</form>
			</div>
		)
	}
}

export default reduxForm({
	form: 'movieForm',
	fields: ['search']
}, null, actions)(SearchBar);

