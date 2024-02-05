import type { edit_page } from "@/content";
import { useFileStore } from "@/src/file-store";
import { setDocumentName } from "@/src/store";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const DocumentName = ({
  document_name,
}: {
  document_name: edit_page["document_name"];
}) => {
  const dispatch = useDispatch();
  const fileNameInputRef = useRef<HTMLDivElement>(null);
  const { setfileNameInputRef } = useFileStore();

  useEffect(() => {
    setfileNameInputRef(fileNameInputRef);
    dispatch(setDocumentName(document_name.untitled));
  }, []);

  return (
    <div className="document-name text-center bg-light p-1">
      <small className="text-muted">{document_name.doc_name}</small>
      <div
        className="input"
        contentEditable
        onInput={(e) => {
          dispatch(setDocumentName(e.currentTarget.textContent ?? ''));
        }}
        ref={fileNameInputRef}
      >
        {document_name.untitled}
      </div>
    </div>
  );
};

export default DocumentName;
