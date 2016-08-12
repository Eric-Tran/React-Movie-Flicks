import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class VideoItem extends Component {
	componentWillMount() {
		this.props.fetchVideo(this.props.title);
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.title !== this.props.title) {
			this.props.fetchVideo(nextProps.title);
		}
	}

	render() {
		if(this.props.video == null) {
			return (
				<div>Loading...</div>
			)
		}
		const video = this.props.video[0];
		const videoId = video.id.videoId;
		const url = 'https://www.youtube.com/embed/' + videoId;
		return (
			<div className="video-detail">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url} ></iframe>
				</div>
				<div className="details">

				</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return { video: state.video.data };
}

export default connect(mapStateToProps, actions)(VideoItem);