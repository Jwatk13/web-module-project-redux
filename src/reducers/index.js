import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoritesReducer';

export default combineReducers({
    favorites: favoriteReducer,
    movies: movieReducer
});