import React from "react";
import { textButtons } from "../utils/buttons";
import styled from "styled-components";

const buttonStyles = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  align-items: center;
  > div {
    width: 100px;
    height: 75px;
  }
`;
function ToolBar() {
  return (
    <div className="toolBar">
      <div className="fileChanges"></div>
      <div className="textStyles">
        <buttonStyles>
          {textButtons.map((button, i) => (
            <div>{button.icon}</div>
          ))}
        </buttonStyles>
      </div>
    </div>
  );
}

export default ToolBar;
