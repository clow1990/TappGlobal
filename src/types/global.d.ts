// eslint-disable-next-line no-var
declare var APP_ENV: string;
// eslint-disable-next-line no-var
declare var NODE_ENV: string;

// eslint-disable-next-line no-var
declare var __WEB__: boolean;

// eslint-disable-next-line no-var
declare var BUILD_NUMBER: string;

declare type BooleanType = boolean;
declare type BooleanStringType = 'true' | 'false';
declare type PickByType<T, P> = Pick<T, { [K in keyof T]: T[K] extends P ? K : never }[keyof T]>;

// eslint-disable-next-line @typescript-eslint/ban-types
declare type PickByFunctionType<T> = PickByType<T, Function>;

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type Params = Record<string, any>;

declare module 'nativeshare';

declare module 'react-native-extra-dimensions-android';

declare interface ICollapseStyleProps {
  $collapse: boolean;
}

declare interface IIconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
  onClick?: () => void;
}

declare type WindowNavigatorType = Navigator & { standalone: boolean };

declare type CSSObjectType = Record<string, import('react').CSSProperties>;
