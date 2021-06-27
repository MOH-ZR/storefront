import React from 'react';
import { connect } from 'react-redux';
import { activeCategory, allCategories } from './store/products';

function Products(props) {
  return (
    <div className="productSection">
      <div className="productSectionHeading">
        <h2>PRODUCT</h2>
        <p>Category description</p>
      </div>
      <div className="productGrid">
        {props.productList.products.map((product, idx) => (
          <div key={idx} className="product">
            <img src="/assets/1.jpg" alt="" className="productImg" />
            <p className="productName">{product.name}</p>
            <p className="productDescription">{product.description}</p>
            <div className="productFooter">
              <p>ADD TO CART</p>
              <p>VIEW DETAILS</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productList: state.productsReducer
});

const mapDispatchToProps = { activeCategory, allCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
