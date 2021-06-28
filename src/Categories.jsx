import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { Devices, Restaurant} from '@material-ui/icons';
// import { Storefront } from '@material-ui/icons';
import { activeCategory } from './store/categories';
import { filterProducts } from './store/products';

function Categories(props) {

  const dispatch = useDispatch()

  function changeCategory(category) {
    // there must be a way to dispatch the same action
    // ... in a cleaner way
    dispatch(filterProducts(category));
    dispatch(activeCategory(category));
  }

  useEffect(() => {
    dispatch(filterProducts('FOOD'));
    dispatch(activeCategory('FOOD'));
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

// const mapDispatchToProps = { activeCategory, filterProducts };

// export default connect(null, mapDispatchToProps)(Categories);
export default Categories;
