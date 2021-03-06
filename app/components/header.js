import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Searchbar from './search_bar';
import * as actions from '../actions/index'

export default class Header extends Component {

	popularMovies() {
		this.props.fetchPopularMovies();
	}
	topMovies() {
		this.props.fetchTopMovies();
	}
	playingMovies() {
		this.props.fetchPlayingMovies();
	}

	popularTv() {
		this.props.fetchPopularTv();
	}
	topTv() {
		this.props.fetchTopTv();
	}
	playingTv() {
		this.props.fetchPlayingTv();
	}

	render() {
		return (
			<div className='header'>
				<nav className="navbar">
					<div className='container'>
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">Movie Flicks</Link>
						<ul className="nav navbar-nav">
							<li className="nav-item">
								<Link className="nav-link nav-movie" to="/" onClick={this.popularMovies.bind(this)}>Movies</Link>
								<ul className="movie-links">
									<li className="nav-item">
										<Link className="nav-link" to="/"onClick={this.popularMovies.bind(this)}>Popular</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/" onClick={this.topMovies.bind(this)}>Top Rated</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/" onClick={this.playingMovies.bind(this)}>Now Playing</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<Link className="nav-link nav-tv" to="/" onClick={this.popularTv.bind(this)}>TV Shows</Link>
								<ul className="tv-links">
									<li className="nav-item">
										<Link className="nav-link" to="/" onClick={this.popularTv.bind(this)}>Popular</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/" onClick={this.topTv.bind(this)}>Top Rated</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/" onClick={this.playingTv.bind(this)}>On TV</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">All</Link>
							</li>
						</ul>
					</div>
					</div>
				</nav>
					<Searchbar />
			</div>
		);
	}
}

export default connect(null, actions)(Header);