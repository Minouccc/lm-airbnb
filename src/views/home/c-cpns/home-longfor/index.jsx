import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";
import { SectionHeader, LongforItem } from "@/components";
import ScrollView from "@/base-ui/scroll-view";

const HomeLongfor = memo((props) => {
  const { infoData } = props;
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongforItem itemData={item} key={item.city} />;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  itemData: PropTypes.object,
};

export default HomeLongfor;
