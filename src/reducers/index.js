import { combineReducers } from 'redux';
import fakeUsers from './fake-users';
import fakeVideos from './fake-videos';
import dates from './dates'
import videoDetailsReducer from './videoDetailsReducer';
import loginReducer from './loginReducer';

import editProfileReducer from './edit-profile-reducer';

import searchReducer from './searchReducer';



const allReducers = combineReducers({
    users: fakeUsers,
    videos: fakeVideos,
    videoDetails: videoDetailsReducer,
    dates: dates,
    loginStatus: loginReducer,
    editProfile: editProfileReducer,
    searchResults: searchReducer
});

export default allReducers;