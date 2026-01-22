import type { edit_page, errors } from "../src/content";
import { PencilAltIcon } from "@heroicons/react/outline";
import { Tooltip } from "react-tooltip";
import { MarkGithubIcon } from "@primer/octicons-react";
import { GoGear } from "react-icons/go";
import { useFileStore } from "../src/file-store";
import UploadFileIcon from "./icons/UploadFile";
import { handleChange } from "../src/handlers/handleChange";
import { useDispatch, useSelector } from "react-redux";
import { setField, type ToolState } from "../src/store";
import GitHubPopUp from "./GitHubPopUP";
import { useEffect, useRef, useState } from "react";
import Options from "./Options";
import { Bot } from "lucide-react";
const ToolBar = ({
  toolbar,
  errors,
  github_popup,
  lang,
  options,
}: {
  toolbar: edit_page["toolbar"];
  github_popup: edit_page["github_popup"];
  errors: errors;
  lang: string;
  options: edit_page["options"];
}) => {
  const { fileNameInputRef } = useFileStore();
  const dispatch = useDispatch();
  // const statePath = useSelector(
  //   (state: { tool: ToolState }) => state.tool.path
  // );
  // const stateFocus = useSelector(
  //   (state: { tool: ToolState }) => state.tool.focus
  // );
  // const stateClick = useSelector(
  //   (state: { tool: ToolState }) => state.tool.click
  // );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setFileInput } = useFileStore();
  useEffect(() => {
    setFileInput(fileInputRef);
  }, []);
  const [showGitHubModal, setShoGitHubModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const { files, setFiles } = useFileStore();
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
            handleChange(e, dispatch, setFiles, errors, files);
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
      <button
        className="tool-bar-button"
        data-tooltip-id={toolbar.options}
        data-tooltip-content={toolbar.options}
        data-tooltip-place="top"
        onClick={() => setShowOptions(true)}
      >
        <GoGear className="tool-bar-icon icon" />
        <Tooltip id={toolbar.options} />
      </button>
      {/* <button
        className="tool-bar-button"
        data-tooltip-id={toolbar.options}
        data-tooltip-content={toolbar.assistant}
        data-tooltip-place="top"
        onClick={() => {
          dispatch(
            setField({
              showTextArea: true,
            })
          );
        }}
      >
        <Bot className="tool-bar-icon icon" />
        <Tooltip id={toolbar.options} />
      </button> */}
      <GitHubPopUp
        show={showGitHubModal}
        title={toolbar.upload_from_github}
        onHide={() => setShoGitHubModal(false)}
        github_popup={github_popup}
        lang={lang}
        errors={errors}
      />
      <Options
        show={showOptions}
        onHide={() => setShowOptions(false)}
        options={options}
      />
    </div>
  );
};

export default ToolBar;
