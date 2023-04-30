import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { EntireWrapper } from "./style";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";
import { EntireRoom, EntirePagination, EntireFilter } from "./c-cpns";
const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoomListAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRoom />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
