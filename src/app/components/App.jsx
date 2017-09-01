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

  componentDidMount() {
    let lsObj = JSON.parse(localStorage.getItem('favGems'));
    if (!lsObj) {
      localStorage.setItem('favGems', JSON.stringify([]))
    }
  }

  handleOnChange = e => {
    this.setState({value: e.target.value});
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const {doGetGemsAsync} = this.props;
    doGetGemsAsync(this.state.value);
  };

  handleClickFavorite = e => {
    const {gemsList, toggleFavorite} = this.props;
    const index = Number(e.target.id.split('_')[1]);
    let names = JSON.parse(localStorage.getItem('favGems'));

    if (gemsList[index].favorite) {
      names.splice(names.indexOf(gemsList[index].name), 1);
    }
    else {
      names.push(gemsList[index].name);
    }

    this.updateLocalStorage(names);
    toggleFavorite(index);
  };

  updateLocalStorage = data => {
    localStorage.setItem('favGems', JSON.stringify(data));
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

        {
          gemsAreLoading ?
            <Spinner classNames={'main__spinner'} /> :
            noData ?
            <div>
              <h1>Search your favorite Ruby Gems.</h1>
            </div> :
            <div className="gems__list-container">
              { gemsList.map(e => <ListItem key={e.key} item={e} handleClickFavorite={this.handleClickFavorite} />) }
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
