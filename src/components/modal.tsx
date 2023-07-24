import classNames from "classnames";
import React from "react";

interface Props {
    open: boolean;
    onClose: () => void;
    header?: React.ReactNode | string;
    footer?: React.ReactNode | string;
    children: React.ReactNode;
    className?: string;
}

const Modal: React.FC<Props> = ({ 
  open, 
  onClose,
  header,
  footer,
  children,
  className 
}): React.JSX.Element | null => {
  if (!open) return null;
  return (
    <>
      <div
        className={classNames("justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none", className)}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            {header ? (
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                {header}
                <button
                  className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={onClose}
                >
                  <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                  </span>
                </button>
              </div>
            ) : null}
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {children}
            </div>
            {/*footer*/}
            {footer ? (
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                {footer}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black mt-0"></div>
    </>
  );
};

export default Modal;