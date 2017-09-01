import 'whatwg-fetch';
import {requestIsLoading, requestSuccess, requestHasFailed} from './getImagesActions';

export default (searchText) => {
  return async (dispatch, getState) => {
    dispatch(requestIsLoading(true));

    try {
      const response = await fetch(`http://localhost:3000/api/v1/search.json?query=${searchText}`);
      const json = await response.json();
      console.log(json);
      const parsedResult = parseGemsList(json);
      dispatch(requestIsLoading(false));
      dispatch(requestSuccess(parsedResult));
    } catch (e) {
      dispatch(requestHasFailed(true));
    }
  }
};


// authors
//   :
//   "David Heinemeier Hansson"
// documentation_uri
//   :
//   "http://api.rubyonrails.org"
// downloads
//   :
//   106305764
// gem_uri
//   :
//   "https://rubygems.org/gems/rails-5.1.3.gem"
// homepage_uri
//   :
//   "http://rubyonrails.org"
// info
//   :
//   "Ruby on Rails is a full-stack web framework optimized for programmer happiness and sustainable productivity. It encourages beautiful code by favoring convention over configuration."
// licenses
//   :
//   ["MIT"]
// name
//   :
//   "rails"
// platform
//   :
//   "ruby"
// project_uri
//   :
//   "https://rubygems.org/gems/rails"
// version
//   :
//   "5.1.3"
const parseGemsList = gems => {
  const n = gems.length;
  for (let i = 0; i < n; i++) {
    gems[i].key = i;
  }
  return gems;
};