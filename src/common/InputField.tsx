import React, {
  forwardRef,
  useRef,
  useState,
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  FC,
  KeyboardEvent,
  ReactNode,
  RefObject,
} from "react";
import styled from "styled-components";

import { BsEyeSlash, BsEye } from "react-icons/Bs";
import colors from "./colors";

export interface IInputData {
  [fieldName: string]: string;
}

interface IInputFieldProps {
  allowDecimal?: boolean;
  containerStyle?: CSSProperties;
  defaultValue?: string | number;
  disabled?: boolean;
  extendButton?: ReactNode;
  fieldName?: string;
  imageSrc?: string;
  inputStyle?: CSSProperties;
  isPassword?: boolean;
  label?: string;
  labelStyle?: CSSProperties;
  labelWidth?: number;
  maxLength?: number;
  placeholder?: string;
  showPrefixDivider?: boolean;
  type?: string;
  value?: string;
  extendButtonStyle?: CSSProperties;
  onBlur?: (data: IInputData, value: string) => void;
  onChange?: (value: string) => void;
}

type IRef =
  | ((instance: HTMLInputElement | null) => void)
  | RefObject<HTMLInputElement>
  | null
  | undefined;

const checkNumericInput = (
  value: string,
  type?: string,
  allowDecimal?: boolean
) => {
  if (type === "number") {
    const testRegex = allowDecimal ? /^[0-9]*(\.){0,1}[0-9]*$/ : /^[0-9]*$/;
    const valid = testRegex.test(value);

    return valid;
  }

  return true;
};

const InputField: FC<IInputFieldProps> = forwardRef(
  (
    {
      allowDecimal,
      containerStyle,
      fieldName,
      imageSrc,
      inputStyle,
      extendButton,
      label = "",
      labelStyle,
      labelWidth = 120,
      isPassword,
      showPrefixDivider,
      type = "text",
      onBlur = () => {},
      onChange = () => {},
      ...restProps
    },
    ref: IRef
  ) => {
    const labelRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const labelOffsetWidth = labelRef.current?.offsetWidth || 0;

    const [hidePassword, setHidePassword] = useState(true);

    const inputType = (() => {
      if (isPassword) {
        return hidePassword ? "password" : "text";
      }

      return type;
    })();

    const inputMode = (() => {
      if (type === "number" && allowDecimal) {
        return "decimal";
      }

      if (type === "number") {
        return "numeric";
      }

      return "text";
    })();

    const onInputChange = ({
      target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
      const result = checkNumericInput(value, type, allowDecimal);

      if (result) {
        onChange(value || "");
      }
    };

    const onInputBlur = ({
      target: { value },
    }: FocusEvent<HTMLInputElement>) => {
      const result = checkNumericInput(value, type, allowDecimal);

      if (result) {
        const data =
          typeof fieldName === "string" ? { [fieldName]: value || "" } : {};
        onBlur(
          data,
          type === "number" ? Number(value).toFixed(2) : value || ""
        );
      }
    };

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      const { key } = event;

      if (
        !checkNumericInput(key, type, allowDecimal) &&
        !["Backspace", "Delete"].includes(key)
      ) {
        event.preventDefault();
      }
    };

    return (
      <>
        {" "}
        <InputFieldContainer style={containerStyle}>
          {(!!imageSrc || !!label) && (
            <FieldPrefixWrapper $showPrefixDivider={showPrefixDivider}>
              {!!imageSrc && (
                <FieldImageWrapper>
                  <FieldImage src={imageSrc} />
                </FieldImageWrapper>
              )}
              {!!label && (
                <FieldLabel
                  style={labelStyle}
                  $labelWidth={labelWidth}
                  $showPrefixDivider={showPrefixDivider}
                >
                  {label}
                </FieldLabel>
              )}
            </FieldPrefixWrapper>
          )}

          <Input
            {...restProps}
            $showPrefixDivider={showPrefixDivider}
            inputMode={inputMode}
            name={fieldName}
            ref={ref}
            style={inputStyle}
            type={inputType}
            onBlur={onInputBlur}
            onChange={onInputChange}
            onKeyDown={!allowDecimal ? onKeyDown : undefined}
          />
          {extendButton}
          {isPassword && (
            <ExtendButtonWrapper>
              <PasswordContainer
                onClick={() => setHidePassword((hidePassword) => !hidePassword)}
              >
                {hidePassword ? <BsEye /> : <BsEyeSlash />}
              </PasswordContainer>
            </ExtendButtonWrapper>
          )}
        </InputFieldContainer>
        {/* {!!error && (
          <ErrorText style={{ marginLeft: labelOffsetWidth }}>
            {error}
          </ErrorText>
        )} */}
      </>
    );
  }
);

export default InputField;

const InputFieldContainer = styled.div`
  display: flex;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  /* padding: 5px 20px; */
`;

const PasswordContainer = styled.div`
  background-color: ${colors.white};
`;

const ExtendButtonWrapper = styled.span`
  padding-top: 5px;
  padding-right: 5px;

  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  background-color: ${colors.white};
`;

const FieldPrefixWrapper = styled.div<{ $showPrefixDivider?: boolean }>`
  display: flex;
  border-right: ${({ $showPrefixDivider }) =>
    $showPrefixDivider ? `1px solid ${colors.border}` : "none"};
  color: #888888;
  margin: ${({ $showPrefixDivider }) => ($showPrefixDivider ? "auto" : 0)};
  padding: ${({ $showPrefixDivider }) => ($showPrefixDivider ? "0 10px" : 0)};
`;

interface IFieldLabelStyledProps {
  $labelWidth: number;
  $showPrefixDivider: boolean | undefined;
}

const FieldLabel = styled.div<IFieldLabelStyledProps>`
  padding-top: 10px;
  padding-left: ${({ $showPrefixDivider }) => ($showPrefixDivider ? "5px" : 0)};
  min-width: ${({ $labelWidth }) => $labelWidth}px;
`;

const Input = styled.input<{ $showPrefixDivider?: boolean }>`
  flex: 1;
  padding: 10px 8px;
  width: 100%;

  outline: none;
  color: ${colors.text};
  border: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-top-right-radius: ${({ $showPrefixDivider }) =>
    $showPrefixDivider ? "0" : "6px"};
  border-bottom-right-radius: ${({ $showPrefixDivider }) =>
    $showPrefixDivider ? "0" : "6px"};
  border-top-right-radius: ${({ $showPrefixDivider }) =>
    $showPrefixDivider ? "0" : "6px"};

  &::placeholder {
    color: ${colors.gray5};
  }

  &:disabled {
    background-color: transparent;
  }
`;

const FieldImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 30px;
`;

const FieldImage = styled.img`
  height: 15px;
`;
