import React, { Component } from 'react'
import Style from './index.module.scss';
import { connect } from 'react-redux';
import Icon from 'react-icons-kit'
import { video_start, add_list } from '../../redux/video_player';
import { plusSquare } from 'react-icons-kit/feather';
class VideoItem extends Component {
	playVideo = (video) => () => {
		const { dispatch } = this.props;
		dispatch(video_start(video))
	}
	// addToList = (video) => () => {
	// 	const { dispatch, playlist } = this.props;
	// 	console.log(this.props)
	// 	if (playlist.length < 1) {
	// 		dispatch(video_start(video))
	// 		return;
	// 	}
	// 	dispatch(add_list(video))
	// }
	render() {
		const { snippet: { channelTitle, title, thumbnails: { medium } } } = this.props.video;
		return (
			<div className={Style.videoContainer}>
				{/* <Icon icon={plusSquare} className={Style.addList} onClick={this.addToList(this.props.video)} /> */}
				<img onClick={this.playVideo(this.props.video)} src={medium.url} alt={title} className={Style.thumbnail} />
				<div onClick={this.playVideo(this.props.video)} className={Style.description}>
					{title}
				</div>
				<div className={Style.info}>
					{channelTitle}
				</div>
			</div>
		)
	}
}

export default connect(({ Video_Player: { playlist } }) => ({ playlist }))(VideoItem)
