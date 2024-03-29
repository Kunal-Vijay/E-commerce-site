import { loginFailure, loginStart, loginSuccess , resetError } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    if(res){
      dispatch(loginSuccess(res.data));
    }
  } catch (err) {
    dispatch(loginFailure());
    setTimeout(() => {
      dispatch(resetError());
    }, 3000);
  }
};