import React, { useEffect, useRef } from "react";
import { DownloadIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { setField, type ToolState } from "../src/store";
import { handleUpload } from "../src/handlers/handleUpload";
import { useFileStore } from "../src/file-store";
import type { errors } from "../src/content";

const FloatingDownloadBtn: React.FC<{
  text: string;
  errors: errors;
}> = ({ text, errors }) => {
  // unserializable state variables:
  const downloadBtnRef = useRef<HTMLAnchorElement>(null);
  const {
    setDownloadBtn,
    downloadBtn,
    files,
    // filesOnSubmit,
    // setFilesOnSubmit,
  } = useFileStore();
  // state variables:
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );
  const isSubmitted = useSelector(
    (state: { tool: ToolState }) => state.tool.isSubmitted
  );
  const stateFiles = useSelector(
    (state: { tool: ToolState }) => state.tool.files
  );
  const markdown = useSelector(
    (state: { tool: ToolState }) => state.tool.markdown
  );
  const documentName = useSelector(
    (state: { tool: ToolState }) => state.tool.document_name
  );
  const options = useSelector(
    (state: { tool: ToolState }) => state.tool.options
  );
  const dispatch = useDispatch();
  const handleDownload = () => {
    // Implement your download logic here
    dispatch(setField({ isSubmitted: true }));
    dispatch(setField({ showOptions: false }));
    // if (submitBtn) {
    //   submitBtn?.current?.click();
    // }
    // handleUpload(
    //   downloadBtn,
    //   dispatch,
    //   {
    //     errorMessage,
    //     path: "md-text-to-pdf",
    //   },
    //   errors,
    //   filesOnSubmit,
    //   setFilesOnSubmit,
    //   { files, stateFiles, markdown, document_name: documentName, options }
    // );
  };
  useEffect(() => {
    setDownloadBtn(downloadBtnRef);
  }, []);

  return (
    <div className="floating-button-container">
      <button className="download-button" onClick={handleDownload}>
        {text} <DownloadIcon className="download-icon h-5 w-5 text-white" />
        {isSubmitted ? (
          <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          ></span>
        ) : null}
      </button>
      <a
        href=""
        className="d-none"
        ref={downloadBtnRef}
        download="__output.pdf"
      ></a>
    </div>
  );
};

export default FloatingDownloadBtn;
