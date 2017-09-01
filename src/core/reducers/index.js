import { combineReducers } from 'redux'
import {gemsHasFailed, gemsAreLoading, gemsList} from '../../app/reducers';

export default combineReducers({
  gemsHasFailed,
  gemsAreLoading,
  gemsList
});
