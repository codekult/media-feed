import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

function Modal({ children }: PropsWithChildren) {
  return ReactDOM.createPortal(
    <>{children}</>,
    document.getElementById("modal") as HTMLElement
  );
}

export default Modal;
