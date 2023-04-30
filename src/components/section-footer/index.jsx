import React, { memo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { IconMoreArrow } from "@/assets/svg";
import { FooterWrapper } from "./style";

const SectionFooter = memo((props) => {
  const { name } = props;
  const navigate = useNavigate();

  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={() => navigate("/entire")}>
        <span className="text">
          {name ? `显示更多${name}房源` : "显示全部"}
        </span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
