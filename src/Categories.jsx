import React from 'react';
import { connect } from 'react-redux';
import { Devices, Restaurant} from '@material-ui/icons';
// import { Storefront } from '@material-ui/icons';
import { activeCategory } from './store/categories';
import { filterProducts } from './store/products';
import { useEffect } from 'react';

function Categories(props) {

  function changeCategory(category) {
    // there must be a way to dispatch the same action
    // ... in a cleaner way
    props.filterProducts(category);
    props.activeCategory(category);
  }

  useEffect(() => {
    props.filterProducts('FOOD');
    props.activeCategory('FOOD');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="categoriesContainer">
      <div className="categories">
        <h2>Browse our categories</h2>
        <div className="categoriesList">
          {/* <Storefront className="categoriesIcon" />
          <p onClick={() => props.activeCategory()}>ALL</p> */}
          <Restaurant className="categoriesIcon" />
          <p onClick={() => changeCategory('FOOD')}>FOOD</p>
          <Devices className="categoriesIcon" />
          <p onClick={() => changeCategory('ELECTRONICS')}>ELECTRONICS</p>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = { activeCategory, filterProducts };

export default connect(null, mapDispatchToProps)(Categories);
