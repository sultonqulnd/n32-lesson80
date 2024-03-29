import { BUY_CAKE } from './cakeTypes';

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes > 0 ? state.numOfCakes - 1 : 0,
      };
    default:
      return state;
  }
};

export default reducer;
