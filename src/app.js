import React, { Component } from 'react';
import Menu from './components/menu';
import Search from './components/search';
import SearchList from './pages/search_list';
import VideoPlayer from './pages/video_player';
import { Provider } from 'react-redux';
import Store from './redux/store';

import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Provider store={Store}>
					<div style={Style.container}>
						<Menu />
						<div style={Style.content}>
							<Search />
							<SearchList />
							<VideoPlayer />
						</div>
					</div>
				</Provider>
			</BrowserRouter>
		)
	}
}

const Style = {
	container: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		height: '100%'
	},
	content: {
		backgroundColor: "#FAFAFA",
		display: 'flex',
		flexGrow: 1,
		paddingLeft: '256px',
		flexDirection: 'column'
	}
}