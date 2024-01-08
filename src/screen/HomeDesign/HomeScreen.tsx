import "@/App.css";

import React, { useEffect, useState, FC } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { auth, db, logout } from "../../firebase";
import Alert from "@/common/Alert";
import HOME from "@/images";
import { Switch } from "@/common/SwitchToggle";
import colors from "@/assets/colors";

const HomeScreen: FC = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState(false);

  const [header, setHeader] = useState(false);
  const [link, setLink] = useState(false);
  const [email, setEmail] = useState(false);

  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);

      const data = doc.docs[0].data();

      setName(data.name);
      setMobileNumber(data.mobileNumber);
    } catch (err) {
      console.error(err);
      Alert.error({ message: "An error occured while fetching user data" });
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <AppContainer>
      <CenterContainer>
        <LeftContainer>
          <SectionWrapper>
            <SectionText>Header</SectionText>
            <SwitchWrapper>
              <Switch
                isToggle={header}
                onChange={() => setHeader(!header)}
                size={0.5}
              />
            </SwitchWrapper>
          </SectionWrapper>

          <SectionWrapper>
            <SectionText>Link</SectionText>
            <SwitchWrapper>
              <Switch
                isToggle={link}
                onChange={() => setLink(!link)}
                size={0.5}
              />
            </SwitchWrapper>
          </SectionWrapper>

          <SectionWrapper>
            <SectionText>Email</SectionText>
            <SwitchWrapper>
              <Switch
                isToggle={email}
                onChange={() => setEmail(!email)}
                size={0.5}
              />
            </SwitchWrapper>
          </SectionWrapper>

          <LogoutButton onClick={logout}>
            <LogoutButtonText>Log out</LogoutButtonText>
          </LogoutButton>
        </LeftContainer>

        <RightContainer>
          <PhoneBackground src={HOME.mobile} />

          <PreviewBoard>
            {header && (
              <HeaderBoard>
                <Avatar src={HOME.profileAvatar} />
                <TextParagraph>{name}</TextParagraph>
              </HeaderBoard>
            )}
          </PreviewBoard>
        </RightContainer>
        {/* <TextParagraph>This is Home Page</TextParagraph> */}
      </CenterContainer>
    </AppContainer>
  );
};

export default HomeScreen;

const LogoutButton = styled.button`
  width: 300px;

  background-color: ${colors.primary};
`;

const LogoutButtonText = styled.span`
  font-size: 14px;
  color: ${colors.white};
`;

const PreviewBoard = styled.div`
  position: absolute;
  top: 75px;
  margin-left: 182px;
  width: 245px;
  height: 450px;

  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 31px;
  border-bottom-right-radius: 31px;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;

  background-color: lightgray;
`;

const TextParagraph = styled.p`
  width: 100%;

  text-align: center;
`;

const RightContainer = styled.div`
  flex: 1;

  background-color: lightgrey;
`;

const DesignBoard = styled.img`
  flex: 1;

  width: 600px;
`;

const PhoneBackground = styled.img`
  position: absolute;

  width: 600px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;

  border-radius: 50px;
  margin: auto;
  display: block;
`;

const HeaderBoard = styled.div`
  flex-direction: row;

  width: 100%;
  height: 100px;

  padding: 10px 0;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;
`;

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
