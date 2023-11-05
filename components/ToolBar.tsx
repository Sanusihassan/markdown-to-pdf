import type { edit_page, errors } from "@/content";
import { PencilAltIcon } from "@heroicons/react/outline";
import { Tooltip } from "react-tooltip";
import { MarkGithubIcon } from "@primer/octicons-react";
import { useFileStore } from "@/src/file-store";
import UploadFileIcon from "./icons/UploadFile";
import { handleChange } from "@/src/handlers/handleChange";
import { useDispatch, useSelector } from "react-redux";
import { ToolState } from "@/src/store";
import GitHubPopUp from "./GitHubPopUP";
import { useEffect, useRef, useState } from "react";
const ToolBar = ({
  toolbar,
  errors,
  github_popup,
  lang,
}: {
  toolbar: edit_page["toolbar"];
  github_popup: edit_page["github_popup"];
  errors: errors;
  lang: string;
}) => {
  const { fileNameInputRef } = useFileStore.getState();
  const dispatch = useDispatch();
  const statePath = useSelector(
    (state: { tool: ToolState }) => state.tool.path
  );
  const stateFocus = useSelector(
    (state: { tool: ToolState }) => state.tool.focus
  );
  const stateClick = useSelector(
    (state: { tool: ToolState }) => state.tool.click
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setFileInput } = useFileStore.getState();
  useEffect(() => {
    setFileInput(fileInputRef);
  }, []);
  const [showGitHubModal, setShoGitHubModal] = useState(false);
  const { files, setFiles } = useFileStore.getState();
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
        if (!selection) {
          fileNameInputRef.current.focus();
        }
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
        className="tool-bar-button input"
        data-tooltip-id={toolbar.upload_file}
        data-tooltip-content={toolbar.upload_file}
        data-tooltip-place="top"
      >
        <UploadFileIcon className="tool-bar-icon icon" />
        <Tooltip id={toolbar.upload_file} />
        <input
          onChange={(e) => {
            // handleChange(e)
            handleChange(e, dispatch, setFiles, ".md", errors, files, {
              path: statePath,
              click: stateClick,
              focus: stateFocus,
            });
          }}
          type="file"
          accept=".md"
          multiple
          ref={fileInputRef}
        />
      </button>
      <button
        className="tool-bar-button"
        data-tooltip-id={toolbar.upload_from_github}
        data-tooltip-content={toolbar.upload_from_github}
        data-tooltip-place="top"
        onClick={() => setShoGitHubModal(true)}
      >
        <MarkGithubIcon className="tool-bar-icon icon" />
        <Tooltip id={toolbar.upload_from_github} />
      </button>
      <GitHubPopUp
        show={showGitHubModal}
        title={toolbar.upload_from_github}
        onHide={() => setShoGitHubModal(false)}
        github_popup={github_popup}
        lang={lang}
        errors={errors}
      />
    </div>
  );
};

export default ToolBar;
