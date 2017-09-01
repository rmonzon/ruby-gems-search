import {REQUEST_GEMS} from '../constants';
import {FETCHING, SUCCESS, FAILURE} from '../../core/constants';

export function requestHasFailed(bool) {
  return {
    type: `${REQUEST_GEMS}_${FAILURE}`,
    hasFailed: bool
  };
}

export function requestIsLoading(bool) {
  return {
    type: `${REQUEST_GEMS}_${FETCHING}`,
    isLoading: bool
  };
}

export function requestSuccess(payload) {
  return {
    type: `${REQUEST_GEMS}_${SUCCESS}`,
    gemsList: payload
  };
}
