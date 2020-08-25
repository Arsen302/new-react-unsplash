import React from "react";
import { useDispatch } from "react-redux";
import { getImage } from "../../redux/GetImage/action";

export const MainPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getImage());
  }, []);
  return <div className="App">MainPage</div>;
};
