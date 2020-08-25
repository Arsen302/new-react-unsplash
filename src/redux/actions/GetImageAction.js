import * as types from "../types";
import { dispatch } from "redux";

const API_KEY = "rgQAMyD6QSGwGSORhBjman72L8V6X9sgs-mcmr5t6NA";

export const getImage = (image) => async (dispatch) => {
  const res = fetch(
    `https://api.unsplash.com/photos/random/?client_id=${API_KEY}`
  ).then((res) => res.json().then((json) => console.log(json)));

  dispatch({
    type: types.GET_IMAGE,
    payload: res.data,
  });
};
