import "@/App.css";

import React, { useState, FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import styled from "styled-components";

import { SwitchToggle } from "@/common/SwitchToggle";
import { auth } from "@/firebase";

const ToggleComponent: FC = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");

  const [header, setHeader] = useState(false);

  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <LeftContainer>
      <SectionWrapper>
        <SectionText>Header</SectionText>
        <SwitchWrapper>
          <SwitchToggle scaleFactor={0.5} />
        </SwitchWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionText>Link</SectionText>
        <SwitchWrapper>
          <SwitchToggle scaleFactor={0.5} />
        </SwitchWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionText>Email</SectionText>
        <SwitchWrapper>
          <SwitchToggle scaleFactor={0.5} />
        </SwitchWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionText>Store</SectionText>
        <SwitchWrapper>
          <SwitchToggle scaleFactor={0.5} />
        </SwitchWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionText>Header</SectionText>
        <SwitchWrapper>
          <SwitchToggle scaleFactor={0.5} />
        </SwitchWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionText>Link</SectionText>
        <SwitchWrapper>
          <SwitchToggle scaleFactor={0.5} />
        </SwitchWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionText>Email</SectionText>
        <SwitchWrapper>
          <SwitchToggle scaleFactor={0.5} />
        </SwitchWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionText>Store</SectionText>
        <SwitchWrapper>
          <SwitchToggle scaleFactor={0.5} />
        </SwitchWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <SectionText>Header</SectionText>
        <SwitchWrapper>
          <SwitchToggle scaleFactor={0.5} />
        </SwitchWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionText>Link</SectionText>
        <SwitchWrapper>
          <SwitchToggle scaleFactor={0.5} />
        </SwitchWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionText>Email</SectionText>
        <SwitchWrapper>
          <SwitchToggle scaleFactor={0.5} />
        </SwitchWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <SectionText>Store</SectionText>
        <SwitchWrapper>
          <SwitchToggle scaleFactor={0.5} />
        </SwitchWrapper>
      </SectionWrapper>
    </LeftContainer>
  );
};

export default ToggleComponent;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 300px;
  height: 40px;
  margin: 10px 0px;

  border-radius: 10px;
  background-color: white;
`;

const SwitchWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-right: 10px;
  justify-content: flex-end;
`;

const SectionText = styled.div`
  margin-left: 20px;

  text-align: start;
  font-size: 13px;
`;

const LeftContainer = styled.div`
  margin-top: 50px;
  margin-left: 30%;
  padding: 0;

  height: 500px;

  overflow: auto;

  background-color: lightgrey;
`;
