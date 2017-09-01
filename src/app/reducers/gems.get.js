import {REQUEST_GEMS, TOGGLE_FAVORITE} from '../constants';
import {FETCHING, SUCCESS, FAILURE} from '../../core/constants';

export function gemsHasFailed(state = false, action) {
  switch (action.type) {
    case `${REQUEST_GEMS}_${FAILURE}`:
      return action.hasFailed;
    default:
      return state;
  }
}

export function gemsAreLoading(state = false, action) {
  switch (action.type) {
    case `${REQUEST_GEMS}_${FETCHING}`:
      return action.isLoading;
    default:
      return state;
  }
}

export function gemsList(state = [], action) {
  switch (action.type) {
    case `${REQUEST_GEMS}_${SUCCESS}`:
      return action.gemsList;
    case TOGGLE_FAVORITE:
      return state.map((gem, index) => {
        if (index === action.index) {
          return Object.assign({}, gem, {favorite: !gem.favorite})
        }
        return gem;
      });
    default:
      return state;
  }
}
