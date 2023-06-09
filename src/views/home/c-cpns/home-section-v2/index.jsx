import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import { SectionV2Wrapper } from "./style";
import {
  SectionHeader,
  SectionRooms,
  SectionTabs,
  SectionFooter,
} from "@/components";
const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);
  const tabClickHandle = useCallback(function (index, name) {
    setName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <div className="discount">
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
        <SectionRooms
          roomList={infoData.dest_list?.[name]}
          itemWidth={"33.33%"}
        />
        <SectionFooter name={name} />
      </div>
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
