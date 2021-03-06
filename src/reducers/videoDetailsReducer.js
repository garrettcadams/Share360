export default function videoDetailsReducer(state = { inFavorites: false, comments: [] }, action) {
	switch(action.type) {
		case "GET_VIDEO_BY_ID": {
			return Object.assign({}, state, action.payload);
		}
		case "ADD_FAVORITE": {
			return Object.assign({}, state, { inFavorites: true });
		}
		case "REMOVE_FAVORITE": {
			return Object.assign({}, state, { inFavorites: false });
		}
		case "SET_FAVORITE": {
			return Object.assign({}, state, { inFavorites: action.payload });
		}
		case "GET_COMMENTS": {
			return Object.assign({}, state, { comments: action.payload });
		}
		default: {
			return state;
		}
	}
}