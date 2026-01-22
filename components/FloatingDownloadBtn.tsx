// why is the
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
    (state: { tool: ToolState }) => state.tool.errorMessage,
  );
  const isSubmitted = useSelector(
    (state: { tool: ToolState }) => state.tool.isSubmitted,
  );
  const stateFiles = useSelector(
    (state: { tool: ToolState }) => state.tool.files,
  );
  const markdown = useSelector(
    (state: { tool: ToolState }) => state.tool.markdown,
  );
  const subscriptionStatus = useSelector(
    (state: { tool: ToolState }) => state.tool.subscriptionStatus,
  );
  const options = useSelector(
    (state: { tool: ToolState }) => state.tool.options,
  );

  const fileName = useSelector(
    (state: { tool: ToolState }) => state.tool.fileName,
  );

  const rotations = useSelector(
    (state: { tool: ToolState }) => state.tool.rotations,
  );

  const dispatch = useDispatch();
  const handleDownload = () => {
    // Implement your download logic here
    dispatch(setField({ isSubmitted: true }));
    dispatch(setField({ showOptions: false }));
    // if (submitBtn) {
    //   submitBtn?.current?.click();
    // }
    handleUpload(
      null,
      downloadBtn,
      dispatch,
      {
        errorMessage,
        path: "md-text-to-pdf",
        fileName,
        rotations,
        subscriptionStatus,
      },
      files,
      errors,
      options,
      markdown,
      stateFiles,
    );
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
