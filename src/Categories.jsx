import { Devices, Restaurant, Storefront } from '@material-ui/icons'
import React from 'react'

function Categories() {
  return (
    <div className="categoriesContainer">
      <div className="categories">
        <h2>Browse our categories</h2>
        <div className="categoriesList">
          <Storefront className="categoriesIcon" />
          <p>ALL</p>
          <Restaurant className="categoriesIcon" />
          <p>FOOD</p>
          <Devices className="categoriesIcon" />
          <p>ELECTRONICS</p>
        </div>
      </div>
    </div>
  )
}

export default Categories
