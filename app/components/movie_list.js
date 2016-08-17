import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import MovieListItem from './movie_list_item';

class MovieList extends Component {
	componentWillMount() {
		if (!this.props.movies) {
			this.props.fetchPopularMovies();
		}
	}

	static contextTypes = {
		router: PropTypes.object
	};

	constructor(props) {
		super(props);
		this.state = {
			showData: false
		}
	}

	showMovieDetail(id) {
		this.context.router.push('/'+`${id}`);
	}
	showTvDetail(id) {
		this.context.router.push('/tv/'+`${id}`);
	}
	renderMovieListItems() {
		if (this.props.movies) {
		return this.props.movies.map((data) => {
			if (data.release_date !== undefined && data.release_date !== null) {
				return (
					<MovieListItem
					onClick={this.showMovieDetail.bind(this, data.id)}
					key={data.id}
					data={data} />
				)
			} else {
				return (
					<MovieListItem
					onClick={this.showTvDetail.bind(this, data.id)}
					key={data.id}
					data={data} />
				)
			}

			})
		}
	}

	render() {
		if(!this.props.movies) {
			return (
				<div className="content-list">
					<h2>Loading...</h2>
				</div>
			)
		}
		return (
			<div className="content-list">
				<ul>
				{this.renderMovieListItems()}
				</ul>
			</div>
		)
			
	}
}

function mapStateToProps(state) {
	return { movies: state.movies.data }
}

export default connect (mapStateToProps, actions)(MovieList);