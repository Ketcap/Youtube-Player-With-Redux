import fetch from 'unfetch'

export const START_SEARCH = 'START_SEARCH'
function start_search(query) {
	return {
		type: START_SEARCH,
		query
	}
}

export const GET_RESULTS = 'GET_RESULTS'
function get_results(query, json) {
	return {
		type: GET_RESULTS,
		query,
		results: json.data
	}
}

export function SEARCH_YOUTUBE(query) {
	return function (dispatch) {
		dispatch(start_search(query))
		return fetch(`https://www.reddit.com/r/${subreddit}.json`)
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json =>
				dispatch(getResults(query, json))
			)
	}
}