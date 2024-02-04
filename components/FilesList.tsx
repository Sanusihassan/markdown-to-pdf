import type { edit_page, errors } from "@/content";
import EditPage from "./EditPage";
import { useEffect } from "react";
import { useFileStore } from "@/src/file-store";
import { useDispatch } from "react-redux";
import { setErrorMessage, setErrorCode, setAlertVarient } from "@/src/store";
type FileListProps = {
  lang: string;
  errors: errors;
  edit_page: edit_page;
  pages: string;
  page: string;
};

export const FilesList = ({
  edit_page,
  errors,
  lang,
  page,
  pages,
}: FileListProps) => {
  const { files } = useFileStore();
  const dispatch = useDispatch();
  useEffect(() => {
    if (files.length == 0) {
      dispatch(setErrorMessage(errors.NO_FILES_SELECTED.message));
      dispatch(setErrorCode("ERR_NO_FILES_SELECTED"));
      dispatch(setAlertVarient("info"));
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
      />
    </>
  );
};
