import React, { Component } from 'react';
import { Link } from 'react-router';
import Searchbar from './search_bar';

export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<nav className="navbar">
					<div className='container'>
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">Movie Time</Link>
						<ul className="nav navbar-nav">
							<li className="nav-item">
								<Link className="nav-link nav-movie" to="/movies">Movies</Link>
								<ul className="movie-links">
									<li className="nav-item">
								<Link className="nav-link" to="/movies">Popular</Link>
								</li>
								<li className="nav-item">
								<Link className="nav-link" to="/movies">Top Rated</Link>
								</li>
								<li className="nav-item">
								<Link className="nav-link" to="/movies">Now Playing</Link>
								</li>
								</ul>
							</li>
							<li className="nav-item">
								<Link className="nav-link nav-tv" to="/tv">TV Shows</Link>
								<ul className="tv-links">
									<li className="nav-item">
								<Link className="nav-link" to="/tv">Popular</Link>
								</li>
								<li className="nav-item">
								<Link className="nav-link" to="/tv">Top Rated</Link>
								</li>
								<li className="nav-item">
								<Link className="nav-link" to="/tv">On Tv</Link>
								</li>
								</ul>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/all">All</Link>
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