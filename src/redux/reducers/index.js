import { combineReducers } from "@reduxjs/toolkit";

import transfer from "./transfer";
import auth from "./auth";
import profile from "./profile";

const reducer = combineReducers({
  auth,
  profile,
  transfer
});

export default reducer;