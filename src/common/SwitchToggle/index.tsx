import colors from "@/assets/colors";
import React, { FC } from "react";
import styled from "styled-components";

interface ISwitchToggle {
  size: number;
  onChange: () => void;
  isToggle: boolean;
}

export const Switch: FC<ISwitchToggle> = ({ size = 1, onChange, isToggle }) => {
  return (
    <SwitchToggle
      onClick={() => onChange()}
      $scale={size}
      $checked={isToggle}
    />
  );
};

const SwitchToggle = styled.div<{ $checked: boolean; $scale: number }>`
  cursor: pointer;
  display: block;

  width: ${({ $scale }) => $scale * 100}px;
  background: ${({ $checked }) => (!$checked ? colors.black : colors.green)};

  text-indent: -9999px;
  position: relative;
  aspect-ratio: 2;
  border-radius: 100px;

  &:after {
    content: "";
    position: absolute;
    left: ${({ $checked, $scale }) => (!$checked ? 0 : 50) * $scale}px;
    width: ${({ $scale }) => $scale * 40}px;
    margin: ${({ $scale }) => $scale * 5}px;
    aspect-ratio: 1;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;
