import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useFileStore } from "../../src/file-store";
import { ToolState, setField } from "../../src/store";
import type { edit_page, errors } from "../../content";
import { handleUpload } from "@/src/handlers/handleUpload";
import { fetchSubscriptionStatus, canUseSiteToday } from "fetch-subscription-status";
export function SubmitBtn({
  k,
  edit_page,
  errors,
  lang
}: {
  k: string;
  edit_page: edit_page;
  errors: errors;
  lang: string;
}): JSX.Element {
  const dispatch = useDispatch();
  // state variables:
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );
  const isSubmitted = useSelector(
    (state: { tool: ToolState }) => state.tool.isSubmitted
  );
  const { submitBtn, downloadBtn, files, filesOnSubmit, setFilesOnSubmit } =
    useFileStore();
  const documentName = useSelector(
    (state: { tool: ToolState }) => state.tool.document_name
  );
  const stateFiles = useSelector(
    (state: { tool: ToolState }) => state.tool.files
  );
  const options = useSelector(
    (state: { tool: ToolState }) => state.tool.options
  );

  return (
    <button
      className={`submit-btn btn btn-lg text-white position-relative overflow-hidden ${k.replace(
        "/",
        ""
      )} grid-footer`}
      onClick={async () => {
        dispatch(setField({ isSubmitted: true }));
        dispatch(setField({ showOptions: false }));
        const status = await fetchSubscriptionStatus();
        if (!status && !canUseSiteToday(10)) {
          if (!canUseSiteToday(1)) {
            if (typeof window !== "undefined") {
              window.open(`${(lang === "" ? "" : "/") + lang}/pricing`, "_blank");
            }
          } else {
            if (submitBtn) {
              submitBtn?.current?.click();
            }
          }
        }
        handleUpload(
          downloadBtn,
          dispatch,
          {
            errorMessage,
            path: k,
          },
          errors,
          filesOnSubmit,
          setFilesOnSubmit,
          { files, stateFiles, document_name: documentName, options }
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
