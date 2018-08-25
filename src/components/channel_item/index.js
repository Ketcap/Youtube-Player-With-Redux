import React, { Component } from 'react'
import Style from './index.module.scss';

export default class ChannelItem extends Component {
	render() {
		console.log(this.props)
		const { snippet: { thumbnails: { default: low }, title } } = this.props;
		return (
			<div className={Style.channel}>
				<img className={Style.responsiveImg} src={low.url} alt={title} />
				<span className={Style.title}>{title}</span>
			</div>
		)
	}
}
