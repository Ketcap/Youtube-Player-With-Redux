import React from 'react'
import { combineReducers } from 'redux'
import {
	START_SEARCH, GET_RESULTS, RESET
} from './youtube_actions'
import {
	VIDEO_START, ADD_LIST, TOGGLE, CLOSE
} from './video_player';

import { toast } from 'react-toastify';


function Youtube_Reducers(
	state = {
		fetching: false,
		fetched: false,
		error: false,
		data: {
			results: [],
			query: null
		}
	},
	action
) {
	switch (action.type) {
		case START_SEARCH:
			return {
				...state,
				fetching: true,
				query: action.query
			}
		case GET_RESULTS:
			return {
				...state,
				fetching: false,
				fetched: true,
				data: { results: action.results }
			}
		case RESET:
			return {
				...state,
				fetching: false,
				fetched: false,
				error: false,
				data: {
					results: [],
					query: null
				}
			}
		default:
			return state
	}
}

function Video_Player(
	state = {
		isClosed: true,
		isMinimized: false,
		playlist: [],
		video: {}
	},
	action
) {
	switch (action.type) {
		case VIDEO_START:
			return {
				...state,
				isClosed: false,
				isMinimized: false,
				video: action.video
			}
		case ADD_LIST:
			toast(({ closeToast }) => <div><b>{action.video.snippet.title}</b> added to playlist</div>);
			return {
				...state,
				playlist: [...state.playlist, action.video]
			}
		case TOGGLE:
			return {
				...state,
				isMinimized: !state.isMinimized
			}
		case CLOSE:
			return {
				...state,
				isClosed: true,
				isMinimized: false,
				video: {}
			}
		default:
			return state
	}
}

export default combineReducers({
	Youtube_Reducers,
	Video_Player
})
