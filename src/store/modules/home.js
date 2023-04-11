import { getHomeGoodPriceData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async () => {
  const res = await getHomeGoodPriceData();
  return res;
});
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPrcieInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
});

export const { changeGoodPrcieInfoAction } = homeSlice.actions;
export default homeSlice.reducer;
