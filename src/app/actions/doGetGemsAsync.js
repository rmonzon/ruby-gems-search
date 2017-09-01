import 'whatwg-fetch';
import {requestIsLoading, requestSuccess, requestHasFailed} from './getGemsActions';

export default (searchText) => {
  return async (dispatch, getState) => {
    dispatch(requestIsLoading(true));

    try {
      const response = await fetch(`http://localhost:3000/api/v1/search.json?query=${searchText}`);
      const json = await response.json();
      const parsedResult = parseGemsList(json);
      dispatch(requestIsLoading(false));
      dispatch(requestSuccess(parsedResult));
    } catch (e) {
      dispatch(requestHasFailed(true));
    }
  }
};

const parseGemsList = gems => {
  const favorites = JSON.parse(localStorage.getItem('favGems'));
  return gems.map((gem, i) => {
    gem.key = i;
    gem.favorite = favorites.includes(gem.name);
    return gem;
  });
};