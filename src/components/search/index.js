import React, { Component } from 'react'
import { connect } from 'react-redux';

import Style from './index.module.scss';
import SearchIcon from '../../public/icon/search_icon.svg';

import { SEARCH_VIDEO, reset } from '../../redux/youtube_actions';

class Search extends Component {
	keyPress = (e) => {
		if (e.key === 'Enter') {
			const { dispatch } = this.props;
			if (!e.target.value.trim()) {
				dispatch(reset())
				return;
			}
			dispatch(SEARCH_VIDEO(e.target.value))
		}
	}
	render() {
		const { fetched } = this.props;
		return (
			<div className={`${Style.container} ${!fetched ? Style.open : ''}`}>
				<img src={SearchIcon} alt='search' className={Style.icon} />
				<input className={Style.input} placeholder={'Search'} onKeyPress={this.keyPress} />
			</div>
		)
	}
}

export default connect((store) => {
	const { fetched } = store.Youtube_Reducers
	return {
		fetched
	}
})(Search)