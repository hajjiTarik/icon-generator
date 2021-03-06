import React from 'react';
import PropTypes from 'prop-types';

import Icon from './components/Icon';
import Upload from '../Upload';
import TitleCategory from '../TitleCategory';

import uploadIcon from '../../public/assets/img/icons/upload.png';

const renderIcon = (item, f) => <Icon id={f} key={f} link={item} />;

const renderCategoriesIcon = (category) => {
  const items = category.items.map(renderIcon);

  return (
    <li key={category.name} className="category">
      <TitleCategory link={category.iconCategory}>
        {category.name}
      </TitleCategory>
      <ul className="items">
        {items}
      </ul>
    </li>
  );
};

const Icons = props => (
  <div className="nav-element">
    <h2 className="title-categories">Design Elements</h2>
    <ul className="categories">
      <Upload active="active" link={uploadIcon} />
      {props.listCategories.map(renderCategoriesIcon)}
    </ul>
  </div>
);

Icons.defaultProps = {
  listCategories: null,
};

Icons.propTypes = {
  listCategories: PropTypes.arrayOf(
    PropTypes.shape({
      iconCategory: PropTypes.string,
      items: PropTypes.array,
      name: PropTypes.string,
    }),
  ),
};

export default Icons;
