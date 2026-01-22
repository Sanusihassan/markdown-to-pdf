import type { edit_page, errors } from "../src/content";
import EditPage from "./EditPage";
import { useEffect } from "react";
import { useFileStore } from "../src/file-store";
import { useDispatch, useSelector } from "react-redux";
import { setField, type ToolState } from "../src/store";
type FileListProps = {
  lang: string;
  errors: errors;
  edit_page: edit_page;
  pages: string;
  page: string;
  path: string;
};

export const FilesList = ({
  edit_page,
  errors,
  lang,
  page,
  pages,
  path,
}: FileListProps) => {
  const { files } = useFileStore();
  const dispatch = useDispatch();
  const stateFiles = useSelector(
    (state: { tool: ToolState }) => state.tool.files,
  );
  useEffect(() => {
    if (files.length == 0 && stateFiles.length) {
      dispatch(setField({ errorMessage: errors.NO_FILES_SELECTED.message }));
      dispatch(setField({ errorCode: "ERR_NO_FILES_SELECTED" }));
      dispatch(setField({ alertVarient: "info" }));
    }
  }, [files]);
  return (
    <>
      <EditPage
        edit_page={edit_page}
        errors={errors}
        extension=".md"
        lang={lang}
        page={page}
        pages={pages}
        path={path}
      />
    </>
  );
};
