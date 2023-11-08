import React from "react";
import { DownloadIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { ToolState, setIsSubmitted, setShowOptions } from "@/src/store";
import { Spinner } from "react-bootstrap";

const FloatingDownloadBtn: React.FC<{
  text: string;
}> = ({ text }) => {
  const isSubmitted = useSelector(
    (state: { tool: ToolState }) => state.tool.isSubmitted
  );
  const dispatch = useDispatch();
  const handleDownload = () => {
    // Implement your download logic here
    dispatch(setIsSubmitted(true));
    dispatch(setShowOptions(false));
    // if (submitBtn) {
    //   submitBtn?.current?.click();
    // }
    // handleUpload(
    console.log("Downloading...");
  };

  return (
    <div className="floating-button-container">
      <button
        className="download-button btn btn-dark btn-lg"
        onClick={handleDownload}
      >
        {text} <DownloadIcon className="download-icon h-5 w-5 text-white" />
        {isSubmitted ? (
          <Spinner
            as="span"
            animation="grow"
            role="status"
            aria-hidden="true"
          />
        ) : null}
      </button>
    </div>
  );
};

export default FloatingDownloadBtn;
