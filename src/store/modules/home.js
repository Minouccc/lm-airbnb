import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongForData,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPrcieInfoAction(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
    getHomeHotRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res));
    });
    getHomeLongForData().then((res) => {
      dispatch(changeLongForInfoAction(res));
    });
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longForInfo: {},
  },
  reducers: {
    changeGoodPrcieInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload;
    },
  },
});

export const {
  changeGoodPrcieInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongForInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;
