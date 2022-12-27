import {getProductsreducer} from "./Productreducers"
import {combineReducers} from "redux"

const rootreducers = combineReducers({
    getproductsdata : getProductsreducer, 
});

export default rootreducers;