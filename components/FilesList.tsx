import type { edit_page, errors } from "../src/content";
import EditPage from "./EditPage";
import { useEffect } from "react";
import { useFileStore } from "../src/file-store";
import { useDispatch } from "react-redux";
import { setField } from "../src/store";
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
  useEffect(() => {
    if (files.length == 0) {
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
