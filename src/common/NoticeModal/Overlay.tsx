import styled from "styled-components";

interface IOverlayProps {
  show: boolean | undefined;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: fadeOut;
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  perspective: 600px;
  perspective-origin: center center;
  background: rgba(0, 0, 0, 0.4);
`;

export default Overlay;
