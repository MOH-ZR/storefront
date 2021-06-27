import React from 'react';
import { connect } from 'react-redux';
import { Devices, Restaurant} from '@material-ui/icons';
// import { Storefront } from '@material-ui/icons';
import { activeCategory } from './store/categories';
import { filterProducts } from './store/products';

function Categories(props) {

  // function changeCategory(category) {
  //   activeCategory(category);
  //   filterProducts(category);
  // }
  
  return (
    <div className="categoriesContainer">
      <div className="categories">
        <h2>Browse our categories</h2>
        <div className="categoriesList">
          {/* <Storefront className="categoriesIcon" />
          <p onClick={() => props.activeCategory()}>ALL</p> */}
          <Restaurant className="categoriesIcon" />
          <p onClick={() => props.filterProducts('FOOD')}>FOOD</p>
          <Devices className="categoriesIcon" />
          <p onClick={() => props.filterProducts('ELECTRONICS')}>ELECTRONICS</p>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = { activeCategory, filterProducts };

export default connect(null, mapDispatchToProps)(Categories);
