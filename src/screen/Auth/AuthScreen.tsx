import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import "@/App.css";

import InputField from "../../common/InputField";
import { auth, logInWithEmailAndPassword } from "../../firebase";
import colors from "../../common/colors";
import Alert from "@/common/Alert";
import { INIT_DATA, IUserProfileParams } from "./UserService";

const AuthScreen: FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const [userData, setUserData] = useState(INIT_DATA);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (userData.name) {
      if (checkUserValid(userData)) {
        navigate("/home");
        return;
      }

      navigate("/basicedit", {
        state: {
          data: userData,
        },
      });
    }
  }, [userData, loading]);

  const checkUserValid = (data: IUserProfileParams) => {
    if (data.mobileNumber && data.firstName && data.lastName) {
      return true;
    }

    return false;
  };

  return (
    <AuthScreenContainer>
      <AuthScreenWrapper>
        <TitleWrapper>
          <Title>Tapp!!GlobalApp</Title>
        </TitleWrapper>
        <UserLoginWrapper>
          {/* <CenterContainer> */}
          {/* <Button onClick={signInWithGoogle}>Sign in Google</Button> */}
          {/* <GoogleLogin onSuccess={responseOutput} /> */}
          {/* </CenterContainer> */}

          <VerticalContainer>
            <InputField
              fieldName="login_username"
              placeholder="Email Address"
              value={email}
              onChange={setEmail}
              containerStyle={{ width: 280, marginBottom: 10 }}
            />
            <InputField
              fieldName="login_password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
              containerStyle={{ width: 280, marginBottom: 10 }}
            />
            <SignInButton
              onClick={async () =>
                setUserData(await logInWithEmailAndPassword(email, password))
              }
            >
              <SignInButtonText>Sign In</SignInButtonText>
            </SignInButton>
            <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
          </VerticalContainer>

          <CenterContainer>
            <SignUpButton
              onClick={() => {
                if (user) {
                  Alert.error({ message: "User already logged in" });
                }
                navigate("/signup");
              }}
            >
              <SignUpButtonText>Create new account</SignUpButtonText>
            </SignUpButton>
          </CenterContainer>

          {/* <div>
        <Link to="/reset">Forgot Password</Link>
      </div>
      <div>
        Don't have an account? <Link to="/register">Register</Link> now.
      </div> */}
        </UserLoginWrapper>
      </AuthScreenWrapper>
    </AuthScreenContainer>
  );
};

export default AuthScreen;

const AuthScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const ForgotPasswordText = styled.p`
  justify-self: flex-end;
  align-self: flex-end;
  margin-right: 20px;

  text-align: end;
  font-size: 13px;
  color: ${colors.blue};
`;

const AuthScreenContainer = styled.div`
  display: flex;
  flex: 1 1 100%;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;

  background-color: ${colors.gainsBoro};
`;

const TitleWrapper = styled.div`
  align-items: center;

  margin: 40px 0;
  padding: 20px 0 28px;
  width: 400px;
`;

const SignInButtonText = styled.span`
  font-size: 14px;
  font-weight: 600;

  color: ${colors.white};
`;

const SignUpButtonText = styled.span`
  font-size: 14px;
  font-weight: 300;

  color: ${colors.black};
`;

const Title = styled.p`
  font-size: 35px;
`;

const UserLoginWrapper = styled.div`
  align-items: center;

  background-color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 10px 0 0;
  padding: 10px 0 20px;
  width: 320px;
`;

const SignInButton = styled.button`
  width: 280px;

  background-color: ${colors.black};
`;

const SignUpButton = styled.button`
  width: 280px;

  background-color: ${colors.green};
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  align-content: center;

  position: relative;
  height: 54px;
`;

const VerticalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 5px;
  position: relative;
`;
