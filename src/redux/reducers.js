import { combineReducers } from 'redux'
import {
	START_SEARCH, GET_RESULTS
} from './actions'


function Youtube_Reducers(
	state = {
		searching: false,
		results: [],
		query: null,
		playlist: [],
	},
	action
) {
	switch (action.type) {
		case START_SEARCH:
			return {
				...state,
				searching: true,
				query: action.query
			}
		case GET_RESULTS:
			return {
				...state,
				searching: false,
				results: action.data
			}
		default:
			return state
	}
}

export default combineReducers({
	Youtube_Reducers
})
