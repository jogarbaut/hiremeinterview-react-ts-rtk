import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: [{
    firstName: string,
    lastName: string,
    timer: string,
    countdownDuration: {
      minutes: number,
      seconds: number,
    }
  }]
}

const userJSON = localStorage.getItem("user")

const initialState: UserState = {
  user: userJSON !== null ? (JSON.parse(userJSON))["user"] : []
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
});

export const {
} = usersSlice.actions;

export default usersSlice.reducer;
