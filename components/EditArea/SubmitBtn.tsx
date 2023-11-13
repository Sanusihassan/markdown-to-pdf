import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useFileStore } from "../../src/file-store";
import { ToolState, setIsSubmitted, setShowOptions } from "../../src/store";
import type { edit_page, errors } from "../../content";
import { handleUpload } from "@/src/handlers/handleUpload";
export function SubmitBtn({
  k,
  edit_page,
  errors,
}: {
  k: string;
  edit_page: edit_page;
  errors: errors;
}): JSX.Element {
  const dispatch = useDispatch();
  // state variables:
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );
  const isSubmitted = useSelector(
    (state: { tool: ToolState }) => state.tool.isSubmitted
  );
  const {
    submitBtn,
    downloadBtn,
    files,
    filesLengthOnSubmit,
    setFilesLengthOnSubmit,
  } = useFileStore();
  const statePath = useSelector(
    (state: { tool: ToolState }) => state.tool.path
  );
  const documentName = useSelector(
    (state: { tool: ToolState }) => state.tool.document_name
  );
  const stateFiles = useSelector(
    (state: { tool: ToolState }) => state.tool.files
  );

  return (
    <button
      className={`submit-btn btn btn-lg text-white position-relative overflow-hidden ${k} grid-footer`}
      onClick={() => {
        dispatch(setIsSubmitted(true));
        dispatch(setShowOptions(false));
        if (submitBtn) {
          submitBtn?.current?.click();
        }
        handleUpload(
          downloadBtn,
          dispatch,
          {
            errorMessage,
            path: statePath,
          },
          errors,
          filesLengthOnSubmit,
          setFilesLengthOnSubmit,
          { files, stateFiles, document_name: documentName }
        );
      }}
      disabled={errorMessage.length > 0}
    >
      <bdi>
        {
          edit_page.action_buttons[
            k.replace(/-/g, "_") as keyof typeof edit_page.action_buttons
          ]
        }
      </bdi>{" "}
      {isSubmitted ? (
        <Spinner as="span" animation="grow" role="status" aria-hidden="true" />
      ) : null}
    </button>
  );
}
