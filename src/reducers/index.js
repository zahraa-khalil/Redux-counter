import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';



const rootReducer = combineReducers({
  counter : counterReducer,
  logged : loggedReducer
})


export default rootReducer;