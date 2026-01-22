// when pressing new line
import type { edit_page } from "../src/content";
import { useFileStore } from "../src/file-store";
import { setField, type ToolState } from "../src/store";
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

  const preview = useSelector(
    (state: { tool: ToolState }) => state.tool.preview,
  );

  // const [isPreviewActive, setIsPreviewActive] = useState(false);

  useEffect(() => {
    setfileNameInputRef(fileNameInputRef);
    dispatch(setField({ fileName: document_name.untitled }));
  }, [document_name.untitled, dispatch, setfileNameInputRef]);

  // Toggle preview mode
  const togglePreviewMode = () => {
    dispatch(setField({ preview: !preview }));
  };

  return (
    <header className="header">
      <div className="document-name">
        <small className="text-muted">{document_name.doc_name}</small>
        <div
          className="input"
          contentEditable
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
          onInput={(e) => {
            dispatch(setField({ fileName: e.currentTarget.textContent ?? "" }));
          }}
          ref={fileNameInputRef}
          dangerouslySetInnerHTML={{
            __html: document_name.untitled,
          }}
        />
      </div>
      <button className="preview" onClick={togglePreviewMode}>
        {preview ? <FaRegEye /> : <FaRegEyeSlash />} preview
      </button>
    </header>
  );
};

export default DocumentName;
