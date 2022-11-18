import React from "react";
import styled from "styled-components";

import * as TextStyles from "../TextStyles";

function DownloadButton() {
  return (
    <Wrapper>
      <Circle />
      <Title>Download</Title>
    </Wrapper>
  );
}

export default DownloadButton;

const Wrapper = styled.div`
  width: 210px;
  display: flex;
  gap: 12px;
  background: linear-gradient(180deg, #2fd664 20%, rgba(60, 179, 113, 0) 100%);
  border: 2px solid rgba(60, 179, 113, 0.8);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 10px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  box-sizing: border-box;

  :hover {
    transform: translateY(-2px);
  }
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(180deg, #2fd664 0%, rgba(60, 179, 113, 0) 100%);
  border: 2px solid rgba(60, 179, 113, 0.8);
  box-shadow: inset 0px 4px 4px rgba(60, 179, 113, 0.25);
  border-radius: 30px;
`;

const Title = styled(TextStyles.BodyMain)`
  color: #000000;
`;
