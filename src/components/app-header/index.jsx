import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import { HeaderLeft, HeaderCenter, HeaderRight } from "./cpns";
const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default AppHeader;
