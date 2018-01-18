// @flow

import { combineReducers } from "redux";
import { SET_SEARCH_TERM } from "./actions";

// const DEFAULT_STATE = {
//   searchTerm: ""
// };

// Object.assign({}, src) copies all own properties from src obj to target obj
// We're making a new copy of state because reducer must always return a new state obj

const setSearchTerm = (state = "", action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};
// Object.assign({}, state, {
//   searchTerm: action.payload
// });

// below 'state = DEFAULT_STATE' - the arg to arrow func is ES6 for
// if state is undefined set it to DEFAULT_STATE
// const rootReducer = (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//     case SET_SEARCH_TERM:
//       return setSearchTerm(state, action);
//     default:
//       return state;
//   }
// };

// below combineReducers({}) means that the piece of state called searchTerm is taken care by reducer called setSearchTerm
const rootReducer = combineReducers({ searchTerm: setSearchTerm });

export default rootReducer;
