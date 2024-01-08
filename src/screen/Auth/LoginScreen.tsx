import React, { FC } from "react";

import styled from "styled-components";
import "@/App.css";

const LoginScreen: FC = () => (
  <AppContainer>
    <CenterContainer>
      <TextParagraph>This is login Page</TextParagraph>
    </CenterContainer>
  </AppContainer>
);

export default LoginScreen;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TextParagraph = styled.p`
  width: 100%;
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 54px;
`;
