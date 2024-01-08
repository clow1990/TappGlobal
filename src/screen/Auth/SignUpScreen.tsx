import "@/App.css";

import React, { useEffect, useState, FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Alert from "@/common/Alert";
import colors from "@/common/colors";
import InputField from "@/common/InputField";
import { auth, logout, registerWithEmailAndPassword } from "@/firebase";

const AuthScreen: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) {
      Alert.error({ message: "Please enter username" });
      return;
    }

    if (!email) {
      Alert.error({ message: "Please enter email" });
      return;
    }

    if (!password) {
      Alert.error({ message: "Please enter password" });
      return;
    }

    if (!confirmPassword) {
      Alert.error({ message: "Please enter confirm password" });
      return;
    }

    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;

    if (user) {
      navigate("/");
      logout();
    }
  }, [user, loading]);

  return (
    <SignUpScreenContainer>
      <SignUpScreenWrapper>
        <VerticalContainer>
          <Title>Please fill in your information</Title>
          <InputField
            fieldName="login_name"
            placeholder="Username"
            value={name}
            onChange={setName}
            containerStyle={{ width: 280, marginBottom: 10 }}
          />
          <InputField
            fieldName="login_username"
            placeholder="Email address"
            value={email}
            onChange={setEmail}
            containerStyle={{ width: 280, marginBottom: 10 }}
          />
          <InputField
            fieldName="login_password"
            placeholder="Password"
            showPrefixDivider
            isPassword
            value={password}
            onChange={setPassword}
            containerStyle={{ width: 280, marginBottom: 10 }}
          />
          <InputField
            fieldName="login_confirm_password"
            placeholder="Confirm password"
            showPrefixDivider
            isPassword
            value={confirmPassword}
            onChange={setConfirmPassword}
            containerStyle={{ width: 280, marginBottom: 10 }}
          />
          <SignUpButton onClick={register}>
            <ButtonText>Submit</ButtonText>
          </SignUpButton>
        </VerticalContainer>
      </SignUpScreenWrapper>
    </SignUpScreenContainer>
  );
};

export default AuthScreen;

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
