import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import styled, { keyframes } from "styled-components";

import colors from "../colors";
import Overlay from "./Overlay";

interface IModalProps {
  closeIconStyle?: CSSProperties;
  containerStyle?: CSSProperties;
  overlayStyle?: CSSProperties;
  flexContainerStyle?: CSSProperties;
  hideCloseButton?: boolean;
  maxWidth?: number;
  overlay?: boolean;
  overlayClose?: boolean;
  style?: CSSProperties;
  title?: string;
  width?: string;
  close?: () => void;
}

const Modal: React.FC<IModalProps> = ({
  close,
  containerStyle,
  overlayStyle,
  flexContainerStyle,
  maxWidth,
  overlay,
  overlayClose,
  title,
  width,
}) => {
  const overlayElem = React.useRef(null);

  const overlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayElem.current && overlayClose && close) {
      close();
    }
  };

  return ReactDOM.createPortal(
    <>
      {overlay && (
        <Overlay style={overlayStyle} ref={overlayElem} onClick={overlayClick}>
          <Container width={width} maxWidth={maxWidth} style={containerStyle}>
            <FlexContainer style={flexContainerStyle}>
              <NoticeIcon>
                <RiErrorWarningLine size={25} color={colors.white} />
              </NoticeIcon>
              <Header>{title}</Header>
              <CloseIcon onClick={close}>
                {/* <Close color={colors.gray3} width={18} /> */}
              </CloseIcon>
            </FlexContainer>
          </Container>
        </Overlay>
      )}
    </>,
    document.getElementById("root") || document.body
  );
};

export default Modal;

const zoomIn = keyframes`
  0% {
    transform: translate3d(0, 0, -360px);
  }
  15% {
    transform: translate3d(0, 0, 60px);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

interface IContainerProps {
  width?: string;
  maxWidth?: number;
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div<IContainerProps>`
  width: ${(props) => props.width || "50%"};
  max-width: ${(props) => `${props.maxWidth}px` || "50%"};
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid ${colors.coralRed};
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation-name: ${zoomIn};
  animation-duration: 0.2s;
  animation-timing-function: ease;
  animation-fill-mode: both;
  perspective-origin: center center;
  transform-style: preserve-3d;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
`;

const NoticeIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 40px;

  background: ${colors.coralRed};
`;

const Header = styled.div`
  flex: 1;
  height: 40px;
  text-align: start;
  padding-left: 15px;
  overflow: hidden;
  box-sizing: border-box;
  font-weight: bold;
  line-height: 40px;
  vertical-align: middle;
  background: ${colors.lightREd};
`;

const CloseIcon = styled.div`
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  position: absolute;
  right: 8px;
  top: 8px;
`;
