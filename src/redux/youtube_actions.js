import fetch from 'unfetch'
import { api_key, api_url } from '../config.json';

export const START_SEARCH = 'START_SEARCH'
function start_search(query) {
	return {
		type: START_SEARCH,
		query
	}
}

export const RESET = 'RESET';
export function reset() {
	return function (dispatch) {
		dispatch({ type: 'RESET' })
	}
}


export const GET_RESULTS = 'GET_RESULTS'
function get_results(query, json) {
	return {
		type: GET_RESULTS,
		query,
		results: json
	}
}

export function SEARCH_VIDEO(query) {
	return function (dispatch) {
		dispatch(start_search(query))
		return fetch(`${api_url}search?
				maxResults=25&q=${query}&part=snippet&key=${api_key}`)
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json =>
				dispatch(get_results(query, json))
			)
	}
}