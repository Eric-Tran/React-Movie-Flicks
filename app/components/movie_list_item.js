import React, { Component } from 'react';
import { connect } from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class MovieListItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hover: false
		}
	}

	toggleHover() {
		this.setState({hover: !this.state.hover})
	}

	render() {
		let data = this.props.data;
		let liStyle;
		if (this.state.hover) {
			liStyle = {boxShadow: "10px 4px 12px rgba(0,0,0,1),0 2px #fff"}
		}
		if (data.release_date !== undefined && data.release_date !== null) {
			return (
				<li 
				onClick={this.props.onClick}
				style={liStyle} 
				onMouseEnter={this.toggleHover.bind(this)} 
				onMouseLeave={this.toggleHover.bind(this)}>
					<img src={'https://image.tmdb.org/t/p/w185'+ data.poster_path} />
					<StarRatingComponent
						name={data.title}
						starCount={5}
						value={data.vote_average/2} 
						editing={false} />
					<p>{data.title}</p>
				</li>
			)
		} else {
			return (
				<li 
				onClick={this.props.onClick}
				style={liStyle} 
				onMouseEnter={this.toggleHover.bind(this)} 
				onMouseLeave={this.toggleHover.bind(this)}>
					<img src={'https://image.tmdb.org/t/p/w185'+ data.poster_path} />
					<StarRatingComponent
						name={data.name}
						starCount={5}
						value={data.vote_average/2} 
						editing={false} />
					<p>{data.name}</p>
				</li>
			)
		}
	}
}

