// import { setSearchTerm } from "./actionCreators";
import { SET_SEARCH_TERM } from "./actions";

const DEFAULT_STATE = {
  searchTerm: ""
};

// Object.assign({}, src) copies all own properties from src obj to target obj
// We're making a new copy of state because reducer must always return a new state obj
const setSearchTerm = (state, action) =>
  Object.assign({}, state, { searchTerm: action.payload });

// below 'state = DEFAULT_STATE' - the arg to arrow func is ES6 for
// if state is undefined set it to DEFAULT_STATE
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
