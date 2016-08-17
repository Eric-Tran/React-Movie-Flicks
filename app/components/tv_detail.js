import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import VideoItem from './video_item';
import StarRatingComponent from 'react-star-rating-component';

class TvDetail extends Component {
	componentWillMount() {
		this.props.fetchTvDetail(this.props.params.id);
	}

	render() {
		let data = this.props.tvData;
		if (data == null) {
			return (
				<div>Loading...</div>
			)
		}
		return (
			<div className="content-detail">
				<div className="row">
					<div className="col-md-4">
						<img src={"http://image.tmdb.org/t/p/w300" + data.poster_path} alt='img'/>
					</div>
					<div className="col-md-8">
						<h1>{data.name} <span>({data.year})</span></h1>
						<StarRatingComponent
								name={data.name}
								starCount={5}
								value={data.vote_average/1.8} 
								editing={false}/>
						<h2>Overview</h2>
						<p>{data.overview}</p>
						<hr />
						<div className="movie-info">
							<p>Release Date: {data.first_air_date}</p>
							<p>Original Language: {data.original_language}</p>
							<p>Seasons: {data.number_of_seasons}</p>
							<p>Episodes: {data.number_of_episodes}</p>
						</div>
					</div>
				</div>
				<div className="content-detail-bottom">
				<VideoItem
					title={data.name + " " + data.year + " official trailer"} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { tvData: state.detail.data };
}
export default connect(mapStateToProps, actions)(TvDetail);