import { createStore, combineReducers } from "redux";
import productsReducer from "./products";

let reducers = combineReducers({
  productsReducer
})

const store = () => {
  return createStore(reducers)
}

export default store();