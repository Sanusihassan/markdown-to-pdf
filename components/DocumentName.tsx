import type { edit_page } from "@/content";
import { useFileStore } from "@/src/file-store";
import { setField, ToolState } from "@/src/store";
import { useEffect, useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const DocumentName = ({
  document_name,
}: {
  document_name: edit_page["document_name"];
}) => {
  const dispatch = useDispatch();
  const fileNameInputRef = useRef<HTMLDivElement>(null);
  const { setfileNameInputRef } = useFileStore();

  const preview = useSelector((state: { tool: ToolState }) => state.tool.preview)

  // const [isPreviewActive, setIsPreviewActive] = useState(false);

  useEffect(() => {
    setfileNameInputRef(fileNameInputRef);
    dispatch(setField({ document_name: document_name.untitled }));
  }, [document_name.untitled, dispatch, setfileNameInputRef]);

  // Toggle preview mode
  const togglePreviewMode = () => {
    dispatch(setField({ preview: !preview }))
  };

  return (
    <header className="header">
      <div className="document-name text-center bg-light p-1">
        <small className="text-muted">{document_name.doc_name}</small>
        <div
          className="input"
          contentEditable
          onInput={(e) => {
            dispatch(setField({ document_name: e.currentTarget.textContent ?? '' }));
          }}
          ref={fileNameInputRef}
          dangerouslySetInnerHTML={{
            __html: document_name.untitled
          }}
        />
      </div>
      <button className="preview" onClick={togglePreviewMode}>
        {preview ? <FaRegEye /> : < FaRegEyeSlash />} preview
      </button>
    </header>
  );
};

export default DocumentName;
