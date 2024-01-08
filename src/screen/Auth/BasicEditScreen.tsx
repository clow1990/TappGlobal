import colors from "@/common/colors";
import React, { FC, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "@/firebase";
import styled from "styled-components";
import { IUserProfileParams } from "./UserService";
import InputField from "@/common/InputField";
import Alert from "@/common/Alert";

const BasicEditScreen: FC = () => {
  const location = useLocation();
  const {
    uid,
    firstName: fN,
    lastName: lN,
    mobileNumber: mN,
  } = location.state.data as IUserProfileParams;
  const [firstName, setFirstName] = useState(fN);
  const [lastName, setLastName] = useState(lN);
  const [mobileNumber, setMobileNumber] = useState(mN);
  const navigate = useNavigate();

  const update = async () => {
    if (!firstName) {
      Alert.error({ message: "Please enter first name" });
      return;
    }

    if (!lastName) {
      Alert.error({ message: "Please enter last name" });
      return;
    }

    if (!mobileNumber) {
      Alert.error({ message: "Please enter mobile number" });
      return;
    }

    await updateUser(uid, firstName, lastName, mobileNumber);
    navigate("/home");
  };

  return (
    <SignUpScreenContainer>
      <SignUpScreenWrapper>
        <VerticalContainer>
          <Title>Fill basic information</Title>
          <InputField
            fieldName="login_fistname"
            placeholder="First name"
            value={firstName}
            onChange={setFirstName}
            containerStyle={{ width: 280, marginBottom: 10 }}
          />
          <InputField
            fieldName="login_lastname"
            placeholder="Last Name"
            value={lastName}
            onChange={setLastName}
            containerStyle={{ width: 280, marginBottom: 10 }}
          />
          <InputField
            fieldName="login_mobileno"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={setMobileNumber}
            containerStyle={{ width: 280, marginBottom: 10 }}
          />

          <SignUpButton onClick={update}>
            <ButtonText>Submit</ButtonText>
          </SignUpButton>
        </VerticalContainer>
      </SignUpScreenWrapper>
    </SignUpScreenContainer>
  );
};

export default BasicEditScreen;

const SignUpScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Title = styled.p`
  font-size: 22px;
`;

const SignUpScreenContainer = styled.div`
  display: flex;
  flex: 1 1 100%;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;

  background-color: ${colors.gainsBoro};
`;

const SignUpButton = styled.button`
  width: 280px;

  background-color: ${colors.primary};
`;

const ButtonText = styled.span`
  font-size: 14px;
  color: ${colors.white};
`;

const VerticalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 5px;
  position: relative;
`;
