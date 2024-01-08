import { SweetAlertOptions } from "sweetalert2";

export interface IAlertOptions extends SweetAlertOptions {
  defaultMessage?: string;
  message?: string;
  redirectPath?: string;
  title?: string;
}

export interface IAlert {
  success: (options: IAlertOptions) => Promise<boolean>;
  error: (options: IAlertOptions) => Promise<boolean>;
  warning: (options: IAlertOptions) => Promise<boolean>;
  info: (options: IAlertOptions) => Promise<boolean>;
}

export const DEFAULT_BUTTONS_OPTIONS = {
  confirmButtonText: "确定",
  cancelButtonText: "取消",
};
