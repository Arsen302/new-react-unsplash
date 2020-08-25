import * as types from "../types";
import { initialState } from "../Store.js";

export const getImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_IMAGE:
      return {
        ...state,
        payload: action.payload,
      };

    default:
      return state;
  }
};
