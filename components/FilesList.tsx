import type { edit_page, errors } from "@/content";
import EditPage from "./EditPage";
import { useEffect } from "react";
import { useFileStore } from "@/src/file-store";
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
  const { files } = useFileStore.getState();
  useEffect(() => {}, [files]);
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
