import React, { Component } from 'react'
import { connect } from 'react-redux'
class Playlist extends Component {
	render() {
		const { playlist } = this.props;
		return (
			<div>
				{playlist.map(video => {
					return (video.id.videoId);
				})}
			</div>
		)
	}
}

export default connect((state) => {
	const { Video_Player } = state;
	return {
		...Video_Player
	}
})(Playlist)