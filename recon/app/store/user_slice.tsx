import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface userDataModule {
  data: [] | null;
  loading: boolean;
  error: string | null;
}
const initialState: userDataModule = {
  data: [],
  loading: false,
  error: '',
};

export const getUserData = createAsyncThunk('getUserData', async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  return data.json();
});

const user = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUserData.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

// export const userActions = user.actions;
export default user.reducer;
