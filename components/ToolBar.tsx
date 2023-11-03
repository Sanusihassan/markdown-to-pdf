import type { edit_page } from "@/content";
import { PencilAltIcon, CloudUploadIcon } from "@heroicons/react/outline";
import { Tooltip } from "react-tooltip";
import { MarkGithubIcon } from "@primer/octicons-react";
import { useFileStore } from "@/src/file-store";
/**
 * now using react-tooltip each of these buttons should have a tooltip based on the toolbar passed to this component and it's the same object you just translated:
 */
const ToolBar = ({
  toolbar,
  lang,
}: {
  toolbar: edit_page["toolbar"];
  lang: string;
}) => {
  const { fileNameInputRef } = useFileStore.getState();
  const focusOnLastCharacter = () => {
    if (fileNameInputRef)
      if (fileNameInputRef.current) {
        const divElement = fileNameInputRef.current;
        const range = document.createRange();
        const selection = window.getSelection();

        range.selectNodeContents(divElement);
        range.collapse(false);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
  };
  return (
    <div className="tool-bar">
      {/* is it possible to focus on an element but on the last character on that element? */}
      <button
        className="tool-bar-button"
        data-tooltip-id={toolbar.rename_file}
        data-tooltip-content={toolbar.rename_file}
        data-tooltip-place="top"
        onClick={() => {
          focusOnLastCharacter();
          // if (fileNameInputRef?.current) {
          //   // fileNameInputRef.current.focus();
          //   // // Property 'setSelectionRange' does not exist on type 'HTMLDivElement'.ts(2339)
          //   // fileNameInputRef.current.setSelectionRange
          // }
        }}
      >
        <PencilAltIcon className="tool-bar-icon icon" />
        <Tooltip id={toolbar.rename_file} />
      </button>
      <button
        className="tool-bar-button"
        data-tooltip-id={toolbar.upload_file}
        data-tooltip-content={toolbar.upload_file}
        data-tooltip-place="top"
      >
        <CloudUploadIcon className="tool-bar-icon icon" />
        <Tooltip id={toolbar.upload_file} />
      </button>
      <button
        className="tool-bar-button"
        data-tooltip-id={toolbar.upload_from_github}
        data-tooltip-content={toolbar.upload_from_github}
        data-tooltip-place="top"
      >
        <MarkGithubIcon className="tool-bar-icon icon" />
        <Tooltip id={toolbar.upload_from_github} />
      </button>
    </div>
  );
};

export default ToolBar;
