import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [
    {
      id: 1,
      title: "hema",
    },
  ],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
