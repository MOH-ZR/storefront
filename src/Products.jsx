import React from 'react';
import { useSelector } from 'react-redux';

function Products(props) {
  const { productList, category } = useSelector((state) => ({
    productList: state.productsReducer,
    category: state.categoriesReducer
  }));
  return (
    <div className="productSection">
      <div className="productSectionHeading">
        <h2>{category.activeCategory.displayName}</h2>
        <p>{category.activeCategory.description}</p>
      </div>
      <div className="productGrid">
        {productList.products.map((product, idx) => (
          <div key={idx} className="product">
            <img src={product.imgUrl} alt="" className="productImg" />
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

export default Products;
