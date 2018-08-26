export const VIDEO_START = 'VIDEO_START'
export function video_start(video) {
	return {
		type: VIDEO_START,
		video
	}
}

export const ADD_LIST = 'ADD_LIST';
export function add_list(video) {
	return {
		type: ADD_LIST,
		video
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
