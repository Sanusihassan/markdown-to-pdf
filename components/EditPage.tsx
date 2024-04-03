import { useRouter } from "next/router";
import DisplayFile from "./DisplayFile";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import Options, { OptionsProps } from "./Options";
import type { edit_page } from "../content";
import ErrorElement from "./ErrorElement";
import type { errors as _ } from "../content";
import { Spinner } from "react-bootstrap";
import { CogIcon } from "@heroicons/react/outline";
// import { ToolStoreContext } from "../src/ToolStoreContext";
import { useDispatch, useSelector } from "react-redux";
import {
  ToolState,
  resetErrorMessage,
  setField
} from "../src/store";
import { useFileStore } from "../src/file-store";
import AddMoreButton from "./EditArea/AddMoreButton";
import { SubmitBtn } from "./EditArea/SubmitBtn";

type editPageProps = {
  extension: string;
  edit_page: edit_page;
  pages: string;
  page: string;
  lang: string;
  errors: _;
  path: string;
};
// the error message is inside the editPage component
// calculate image height;

const EditPage = ({
  extension,
  edit_page,
  pages,
  page,
  lang,
  errors,
  path
}: editPageProps) => {
  // const [isOnline, setIsOnline] = useState(true);
  // const handleOnlineStatus = () => setIsOnline(true);
  // const handleOfflineStatus = () => setIsOnline(false);
  // const [showOptions, setShowOptions] = useState(false);

  const errorCode = useSelector(
    (state: { tool: ToolState }) => state.tool.errorCode
  );
  const show_files_list = useSelector(
    (state: { tool: ToolState }) => state.tool.show_files_list
  );
  const showDownloadBtn = useSelector(
    (state: { tool: ToolState }) => state.tool.showDownloadBtn
  );
  const showOptions = useSelector(
    (state: { tool: ToolState }) => state.tool.showOptions
  );
  const dispatch = useDispatch();
  // actual files;
  const { files, fileInput } = useFileStore();
  const stateFiles = useSelector(
    (state: { tool: ToolState }) => state.tool.files
  );
  useEffect(() => {
    if (errorCode == "ERR_NO_FILES_SELECTED" && files.length > 0) {
      dispatch(resetErrorMessage());
    }
  }, [files, errorCode]);
  return (
    <aside
      className={`edit-page ${!show_files_list || showDownloadBtn ? "d-none" : ""
        }`}
    >
      <section className="edit-area position-relative">
        <DisplayFile
          extension={extension}
          pages={pages}
          page={page}
          lang={lang}
          errors={errors}
          edit_page={edit_page}
        />
        {/* {state?.showErrorMessage ? <ErrorElement state={state} /> : null} */}
        <ErrorElement />
        {!stateFiles.length ? (
          <AddMoreButton
            onClick={() => {
              if (fileInput) {
                fileInput?.current?.click();
              }
            }}
            lang={lang}
            path={path}
            text={edit_page.add_more_button}
          />
        ) : null}
        {/* when clicking on this  */}
        <button
          className="gear-button btn btn-light"
          onClick={() => {
            dispatch(setField({ showOptions: !showOptions }));
          }}
        >
          <CogIcon className="w-6 h-6 me-2 gear-icon" />
        </button>
      </section>
      <section className={`options bg-white ${showOptions ? " expanded" : ""}`}>
        <h5 className="text-uppercase grid-header">
          <bdi>
            {
              edit_page.edit_page_titles[
              path.replace(/-/g, "_") as keyof typeof edit_page.edit_page_titles
              ]
            }
          </bdi>
        </h5>
        {process.env.NODE_ENV == "development" ? (
          <Options layout={path as OptionsProps["layout"]} edit_page={edit_page} />
        ) : null}
        <div className="hide-onsmall">
          <SubmitBtn k={path} edit_page={edit_page} errors={errors} />
        </div>
      </section>
      <div className="show-onsmall">
        <SubmitBtn k={path} edit_page={edit_page} errors={errors} />
      </div>
    </aside>
  );
};

export default EditPage;
