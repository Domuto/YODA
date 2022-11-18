import React from "react";
import styled from "styled-components";

import * as TextStyles from "../TextStyles";

function Logo() {
  return (
    <Wrapper>
      <Container>
        <Title>
          Yoda <span>Room</span>
        </Title>
      </Container>
    </Wrapper>
  );
}

export default Logo;

const Wrapper = styled.div`
  width: fit-content;
  background: linear-gradient(180deg, rgba(60, 179, 113, 0.5) 0%, #91d9a2 100%);
  box-shadow: 4px 4px 20px rgba(142, 155, 174, 0.1);
  padding: 5px 5px 5px 0px;
  border-radius: 0px 40px 40px 0px;
`;

const Container = styled.div`
  background: linear-gradient(264.48deg, #91d9a2 7.06%, #91d9a2 31.71%);
  box-shadow: 0px 8px 10px rgba(95, 64, 220, 0.2),
    inset 0px 2px 4px rgba(255, 255, 255, 0.2);
  border-radius: 0px 40px 40px 0px;
  border: 0.5px solid;
  border-image-source: linear-gradient(
    143.97deg,
    rgba(0, 0, 0, 0.3) 20.26%,
    rgba(0, 0, 0, 0.4) 85.18%
  );
`;

const Title = styled(TextStyles.H2)`
  color: #ffffff;
  padding: 12px 20px 12px 55px;

  span {
    color: #f2f5f3;
  }
`;
