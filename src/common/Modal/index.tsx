import React, { CSSProperties, ReactText } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

import Overlay from "./Overlay";
import colors from "../colors";

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
  title?: ReactText;
  width?: string;
  close?: () => void;
}

const Modal: React.FC<IModalProps> = ({
  close,
  closeIconStyle,
  containerStyle,
  overlayStyle,
  flexContainerStyle,
  hideCloseButton = false,
  maxWidth,
  overlayClose,
  style,
  title,
  width,
  ...props
}) => {
  const overlayElem = React.useRef(null);

  const overlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayElem.current && overlayClose && close) {
      close();
    }
  };

  const showCloseButton = typeof close === "function" && !hideCloseButton;
  const showHeader = title !== undefined;
  const { color: closeIconColor, ...restCloseIconStyle } = closeIconStyle || {};

  return ReactDOM.createPortal(
    <Overlay style={overlayStyle} ref={overlayElem} onClick={overlayClick}>
      <Container width={width} maxWidth={maxWidth} style={containerStyle}>
        <FlexContainer style={flexContainerStyle}>
          {showHeader && <Header>{title}</Header>}
          <ContentWrapper width={width} style={style} {...props} />
          {showCloseButton && (
            <CloseIcon style={restCloseIconStyle} onClick={close}>
              {/* <Close color={closeIconColor} width={15} /> */}
            </CloseIcon>
          )}
        </FlexContainer>
      </Container>
    </Overlay>,
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
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div<IContainerProps>`
  width: ${(props) => props.width || "90%"};
  max-width: ${(props) => `${props.maxWidth}px` || "100%"};
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
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

const Header = styled.div`
  height: 40px;
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;
  font-weight: bold;
  line-height: 40px;
  vertical-align: middle;
  background: ${colors.backgroundLg1};
  color: ${colors.white};
`;

const ContentWrapper = styled.div<IContainerProps>`
  width: ${(props) => props.width || "100%"};
  height: auto;
  max-width: 90vw;
  max-height: 85vh;
  overflow-y: auto;
`;

const CloseIcon = styled.div`
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  position: absolute;
  right: 8px;
  top: 8px;
`;
