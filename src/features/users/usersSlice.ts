import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  value: User[];
}

interface User {
  id: string;
  darkMode: boolean;
}

const initialState: UserState = {
  value: [
    {
      id: "1",
      darkMode: false,
    },
  ],
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
