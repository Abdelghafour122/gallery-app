"use client";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import { IoClose } from "react-icons/io5";

const ToasterComp = () => {
  return (
    <Toaster position="bottom-right" reverseOrder={false}>
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== "loading" && (
                <button onClick={() => toast.dismiss(t.id)}>
                  <IoClose />
                </button>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default ToasterComp;
