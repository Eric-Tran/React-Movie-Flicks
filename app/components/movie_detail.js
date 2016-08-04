import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import VideoItem from './video_item';
import StarRatingComponent from 'react-star-rating-component';
import NumberFormat from 'react-number-format';

class MovieDetail extends Component {
	componentWillMount() {
		this.props.fetchMovieDetail(this.props.params.id);
	}

	render() {
		if (this.props.data == null) {
			return (
				<div>Loading...</div>
			)
		}
			let data = this.props.data;
			let year = data.release_date.substring(0,4);
			let background= {
				backgroundImage: "url(http://image.tmdb.org/t/p/w1280" + data.poster_path + ")"
			} 
		return (
			<div className="content-detail">
				<div className="row">
					<div className="col-md-4">
						<img src={"http://image.tmdb.org/t/p/w300" + data.poster_path} alt='img'/>
					</div>
					<div className="col-md-8">
						<h1>{data.title} <span>({year})</span></h1>
						<StarRatingComponent
								name={data.title}
								starCount={5}
								value={data.vote_average/1.8} 
								editing={false}/>
						<h2>{data.tagline}</h2>
						<p>{data.overview}</p>
						<hr />
						<div className="movie-info">
							<p>Release Date: {data.release_date}</p>
							<p>Runtime: {data.runtime} minutes</p>
							<p>Budget: <NumberFormat 
								value={data.budget} 
								displayType={'text'} 
								thousandSeperator={true} 
								prefix={'$'} />
							</p>
							<p>Revenue: <NumberFormat 
								value={data.revenue} 
								displayType={'text'} 
								thousandSeperator={true} 
								prefix={'$'} />
							</p>
						</div>
					</div>
				</div>
				<div className="content-detail-bottom">
				<VideoItem
					title={data.title + " official trailer"} />
				</div>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return { data: state.detail.data };
}
export default connect(mapStateToProps, actions)(MovieDetail);