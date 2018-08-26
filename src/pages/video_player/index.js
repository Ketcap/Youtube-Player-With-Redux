import React, { Component } from 'react'
import { connect } from 'react-redux';
import Styles from './index.module.scss';
import Playlist from '../../components/playlist';
import YouTube from 'react-youtube';

import Icon from 'react-icons-kit';
import { xSquare as closeIcon, minimize2 as minimize, maximize2 as maximize, plusSquare } from 'react-icons-kit/feather';
import { toggle, close, add_list } from '../../redux/video_player';

class VideoPlayer extends Component {
	state = {
		controls: null
	}
	toggle = () => {
		const { dispatch } = this.props;
		dispatch(toggle())
	}
	close = () => {
		const { dispatch } = this.props;
		dispatch(close())
	}
	addToList = (video) => () => {
		const { dispatch } = this.props;
		dispatch(add_list(video))
	}
	videoOnReady = (controls) => {
		this.setState({ controls });
	}
	escKey = (e) => {
		const { dispatch, isMinimized } = this.props;
		if (e.key === 'Escape' && !isMinimized)
			dispatch(toggle())
	}
	componentDidMount() {
		document.addEventListener('keyup', this.escKey);
	}
	render() {
		const { isClosed, isMinimized, video } = this.props;
		return (
			<div id="videoPlayerContainer" className={`${Styles.video_player_container} ${!isClosed ? Styles.open : Styles.closed} ${isMinimized ? Styles.minimized : ''} `}>
				<div className={Styles.buttons}>
					<Icon onClick={this.close} icon={closeIcon} size={24} />
					<Icon onClick={this.toggle} icon={!isMinimized ? minimize : maximize} size={24} />
					{/* <Icon onClick={this.addToList(video)} icon={plusSquare} size={24} /> */}
				</div>
				<YouTube
					videoId={typeof video.id !== 'undefined' ? video.id.videoId : null}
					containerClassName={Styles.videoContainer}
					opts={{ playerVars: { controls: 1, showinfo: 0, autoplay: 1, playsinline: 0, rel: 0 } }}
					onReady={this.videoOnReady}
				/>
				<div className={Styles.videoInfo}>
					{video.snippet &&
						[
							<span key={'title'} className={Styles.title}>
								{video.snippet.title}
							</span>,
							<span key={'channel'} className={Styles.channelTitle}>
								{video.snippet.channelTitle}
							</span>
						]
					}
				</div>
				<Playlist />
			</div>
		)
	}
}

export default connect((state) => {
	const { Video_Player } = state
	return Video_Player;
})(VideoPlayer)