import React from 'react';

function Products() {
  return (
    <div className="productSection">
      <div className="productSectionHeading">
        <h2>PRODUCT</h2>
        <p>Category description</p>
      </div>
      <div className="productGrid">
        <div className="product">
          <img src="/assets/1.jpg" alt="" className="productImg" />
          <p className="productName">Sneakers</p>
          <div className="productFooter">
            <p>ADD TO CART</p>
            <p>VIEW DETAILS</p>
          </div>
        </div>
        <div className="product">
          <img src="/assets/1.jpg" alt="" className="productImg" />
          <p className="productName">Sneakers</p>
          <div className="productFooter">
            <p>ADD TO CART</p>
            <p>VIEW DETAILS</p>
          </div>
        </div>
        <div className="product">
          <img src="/assets/1.jpg" alt="" className="productImg" />
          <p className="productName">Sneakers</p>
          <div className="productFooter">
            <p>ADD TO CART</p>
            <p>VIEW DETAILS</p>
          </div>
        </div>
        <div className="product">
          <img src="/assets/1.jpg" alt="" className="productImg" />
          <p className="productName">Sneakers</p>
          <div className="productFooter">
            <p>ADD TO CART</p>
            <p>VIEW DETAILS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
