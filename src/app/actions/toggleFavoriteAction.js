import {TOGGLE_FAVORITE} from '../constants';

export const toggleFavorite = index => {
  return { type: TOGGLE_FAVORITE, index }
};
