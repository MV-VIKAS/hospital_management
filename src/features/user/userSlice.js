import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createCurrentUser: (state, action) => {
      let { currentUser } = action.payload;
      localStorage.setItem("user", JSON.stringify(currentUser));
      state.currentUser = { ...currentUser };
    },
    logoutCurrentUser: (state, action) => {
      localStorage.removeItem("user");
      state.currentUser = {};
    },
  },
});

export default userSlice.reducer;
export let { createCurrentUser,logoutCurrentUser } = userSlice.actions;
