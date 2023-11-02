import type { edit_page } from "@/content";
import { PencilAltIcon, CloudUploadIcon } from "@heroicons/react/outline";
import { Tooltip } from "react-tooltip";
import { MarkGithubIcon } from "@primer/octicons-react";
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
  return (
    <div className="tool-bar">
      <button
        className="tool-bar-button"
        data-tooltip-id={toolbar.rename_file}
        data-tooltip-content={toolbar.rename_file}
        data-tooltip-place="top"
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
