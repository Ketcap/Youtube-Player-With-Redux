export const VIDEO_START = 'VIDEO_START'
export function video_start(id) {
	return {
		type: VIDEO_START,
		videoId: id
	}
}

export const ADD_LIST = 'ADD_LIST';
function add_list(id) {
	return {
		type: ADD_LIST,
		videoId: id
	}
}

export const TOGGLE = 'TOGGLE';
export function toggle() {
	return {
		type: TOGGLE
	}
}

export const CLOSE = 'CLOSE';
export function close() {
	return {
		type: CLOSE
	}
}
