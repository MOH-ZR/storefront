import React from 'react';
import { connect } from 'react-redux';
import { Devices, Restaurant, Storefront } from '@material-ui/icons';
import { activeCategory } from './store/products';

function Categories(props) {
  return (
    <div className="categoriesContainer">
      <div className="categories">
        <h2>Browse our categories</h2>
        <div className="categoriesList">
          {/* <Storefront className="categoriesIcon" />
          <p onClick={() => props.activeCategory()}>ALL</p> */}
          <Restaurant className="categoriesIcon" />
          <p onClick={() => props.activeCategory('FOOD')}>FOOD</p>
          <Devices className="categoriesIcon" />
          <p onClick={() => props.activeCategory('ELECTRONICS')}>ELECTRONICS</p>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = { activeCategory };

export default connect(null, mapDispatchToProps)(Categories);
