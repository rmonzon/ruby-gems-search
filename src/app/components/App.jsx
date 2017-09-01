import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../core/components/Spinner';
import SearchBar from './SearchBar';
import ListItem from './ListItem';
import '../../styles/app.scss';

class App extends Component {
  state = {
    value: '',
  };

  handleOnChange = e => {
    this.setState({value: e.target.value});
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const {doGetGemsAsync} = this.props;
    doGetGemsAsync(this.state.value);
  };

  render() {
    const {value} = this.state;
    const {gemsList, gemsAreLoading} = this.props;
    const noData = gemsList.length === 0 && !gemsAreLoading;

    return (
      <div className="app__container">
        <SearchBar
          value={value}
          gemsAreLoading={gemsAreLoading}
          handleOnSubmit={this.handleOnSubmit}
          handleOnChange={this.handleOnChange} />

        {gemsAreLoading && <Spinner classNames={'main__spinner'} />}

        {
          noData ?
            <div>
              <h1>Search your favorite Ruby Gems.</h1>
            </div> :
            <div className="gems__list-container">
              { gemsList.map(e => <ListItem item={e} />) }
            </div>
        }
      </div>
    );
  }
}

App.propTypes = {
  gemsList: PropTypes.array.isRequired,
  gemsAreLoading: PropTypes.bool.isRequired
};

export default App;
export {App};
