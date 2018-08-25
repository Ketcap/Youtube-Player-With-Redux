import React, { Component } from 'react'
import Style from './index.module.scss';
import { connect } from 'react-redux';
import { video_start } from '../../redux/video_player';

class VideoItem extends Component {
	playVideo = (videoId) => () => {
		const { dispatch } = this.props;
		dispatch(video_start(videoId))
	}
	render() {
		const { id: { videoId }, snippet: { channelTitle, title, thumbnails: { medium } } } = this.props;
		return (
			<div onClick={this.playVideo(videoId)} className={Style.videoContainer}>
				<img src={medium.url} alt={title} className={Style.thumbnail} />
				<div className={Style.description}>
					{title}
				</div>
				<div className={Style.info}>
					{channelTitle}
				</div>
			</div>
		)
	}
}

export default connect()(VideoItem)
