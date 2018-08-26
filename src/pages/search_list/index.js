import React, { Component } from 'react'
import Style from './index.module.scss';

import { connect } from 'react-redux';
import Loading from '../../components/loading';
import VideoItem from '../../components/video_item'
import ChannelItem from '../../components/channel_item';

class SearchList extends Component {
	render() {
		const { fetching, fetched, results } = this.props;
		if (fetching) {
			return (<Loading />);
		}
		if (!fetched) {
			return <div />
		}
		const videos = [...results.items].filter(i => (i.id.kind === 'youtube#video'));
		const channels = [...results.items].filter(i => (i.id.kind === 'youtube#channel'));
		return (
			<div className={Style.contentContainer}>
				<div className={Style.channelList}>
					{fetched && channels.length > 0 ?
						channels.map(channel => (
							<ChannelItem key={channel.id.channelId} {...channel} />
						))
						: null}
				</div>
				<div className={Style.videoList}>
					{fetched && videos.length > 0 ?
						videos.map(video => (
							<VideoItem key={video.id.videoId} video={video} />
						))
						: null}
				</div>
			</div>
		)
	}
}

export default connect((store) => {
	const { fetched, data: { results }, fetching } = store.Youtube_Reducers
	return {
		fetched,
		fetching,
		results
	}
})(SearchList)