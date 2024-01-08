import Swal from "sweetalert2";

import { IAlertOptions, DEFAULT_BUTTONS_OPTIONS, IAlert } from "./type";
import colors from "@/assets/colors";

const dialog = (options: IAlertOptions) => {
  return new Promise<boolean>((resolve) => {
    const { defaultMessage, message, ...restOptions } = options;

    Swal.fire({
      confirmButtonColor: colors.primary,
      customClass: {
        cancelButton: "swal_button",
        confirmButton: "swal_button",
      },
      ...DEFAULT_BUTTONS_OPTIONS,
      ...restOptions,
      text: message || defaultMessage || "",
    })
      .then(({ isConfirmed }) => {
        resolve(isConfirmed);
      })
      .catch(() => {
        resolve(false);
      });
  });
};

const alert: IAlert = {
  success: (options) => dialog({ icon: "success", ...options }),
  error: (options) =>
    dialog({
      defaultMessage: "系统错误",
      icon: "error",
      iconColor: colors.red,
      ...options,
    }),
  info: (options) =>
    dialog({
      icon: "info",
      reverseButtons: true,
      showCancelButton: true,
      ...options,
    }),
  warning: (options) =>
    dialog({
      icon: "warning",
      reverseButtons: true,
      showCancelButton: true,
      ...options,
    }),
};

export default alert;
