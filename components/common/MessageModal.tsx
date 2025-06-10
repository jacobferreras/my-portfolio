import React from "react";
import { useEffect, useRef } from "react";

interface MessageModalProps {
  showModal: boolean;
  title?: string;
  message?: string;
  onClose: () => void;
}

const MessageModal = (props: MessageModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (props.showModal && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [props.showModal]);

  return (
    <dialog
      id="my_modal_1"
      className="modal"
      ref={dialogRef}
      onClose={props.onClose}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">{props.title}</h3>
        <p className="py-4">{props.message}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={props.onClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default MessageModal;
