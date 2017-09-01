import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ListItem = ({item, handleClickFavorite}) => (
  <div className="gems__item-container">
    <div className="gems__item-left--col">
      <h2>
        <a className="gems__item-title" href={item.project_uri} target="_blank">{item.name}</a>
        <span className="gems__item-version">{item.version}</span>
      </h2>
      <p className="gems__item-desc">{item.info}</p>
    </div>
    <div className="gems__item-middle--col">
      <h3>{item.downloads.toLocaleString()}</h3>
      <span>Downloads</span>
    </div>
    <div className="gems__item-right--col">
      <span
        id={`item_${item.key}`}
        title="Mark as favorite"
        className={cx('gems__item--star', {'gems__item--star-filled': item.favorite})}
        onClick={handleClickFavorite}>☆</span>
    </div>
  </div>
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleClickFavorite: PropTypes.func.isRequired
};

export default ListItem;
