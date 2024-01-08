import React, { FC, useState } from "react";
import Modal from "./NoticeModal";

export interface IAlertDialog {
  message: string;
}

const ErrorDialog: FC<IAlertDialog> = ({ message }) => {
  const [show, setShow] = useState(true);

  return (
    <Modal overlay={show} close={() => setShow(false)} title={message}></Modal>
  );
};

export default ErrorDialog;
