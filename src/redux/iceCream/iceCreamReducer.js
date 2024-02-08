import { BUY_ICECREAM } from './iceCreamTypes';

const initialState = {
  numOfIceCreams: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams > 0 ? state.numOfIceCreams - 1 : 0,
      };
    default:
      return state;
  }
};

export default reducer;
