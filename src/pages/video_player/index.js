import React, { Component } from 'react'
import { connect } from 'react-redux';
import Styles from './index.module.scss';

import YouTube from 'react-youtube';

import Close from '../../public/icon/close.svg';
import Minimize from '../../public/icon/minimize.svg';
import Open from '../../public/icon/open.svg';

import { toggle, close } from '../../redux/video_player';

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
	videoOnReady = (controls) => {
		this.setState({ controls });
	}
	render() {
		const { isClosed, isMinimized, current } = this.props
		return (
			<div className={`${Styles.video_player_container} ${!isClosed ? Styles.open : Styles.closed} ${isMinimized ? Styles.minimized : ''} `}>
				<div className={Styles.buttons}>
					<img onClick={this.close} src={Close} alt={'close'} />
					<img onClick={this.toggle} src={!isMinimized ? Minimize : Open} alt={'minimize'} />
				</div>
				<YouTube
					videoId={current}
					containerClassName={Styles.videoContainer}
					opts={{ playerVars: { controls: 0, showinfo: 0, autoplay: 1, playsinline: 0 } }}
					onReady={this.videoOnReady}
				/>
				<div>
				</div>
			</div>
		)
	}
}

export default connect((state) => {
	const { Video_Player } = state
	return Video_Player;
})(VideoPlayer)