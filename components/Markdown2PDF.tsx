import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import type { errors } from "../src/content";
import { useSelector } from "react-redux";
import type { ToolState } from "../src/store";
import FloatingDownloadBtn from "./FloatingDownloadBtn";
import { InitialMarkdownContent } from "./InitialMarkdownContent";
import { MarkdownPreview } from "./MarkdownPreview-iframe";

const Loader = ({ loader_text }: { loader_text: string }) => (
  <div className="editor-loader">
    <span className="spinner-grow lg" role="status" aria-hidden="true"></span>
    <p className="lead">{loader_text}</p>
  </div>
);

const Markdown2PDF = ({
  loader_text,
  loading_preview,
  download_pdf_text,
  errors,
  placeholder,
}: {
  loader_text: string;
  download_pdf_text: string;
  loading_preview: string;
  errors: errors;
  placeholder: string;
}) => {
  const markdown = useSelector(
    (state: { tool: ToolState }) => state.tool.markdown,
  );
  const preview = useSelector(
    (state: { tool: ToolState }) => state.tool.preview,
  );

  const [showLoader, setShowLoader] = useState(true);
  const [initialized, setInitialized] = useState(false);
  // ✅ hide loader after first paint
  useEffect(() => {
    setShowLoader(false);
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader loader_text={loader_text} />
      ) : (
        <div className="md-2pdf">
          <div className="editor">
            <CodeEditor
              handleChange={() => {
                if (!initialized) setInitialized(true);
              }}
            />
          </div>
          <div
            className={`react-markdown-container${preview ? " preview" : ""}`}
          >
            {!markdown ? (
              <InitialMarkdownContent />
            ) : (
              <MarkdownPreview loading_preview={loading_preview} />
            )}
          </div>
          <FloatingDownloadBtn errors={errors} text={download_pdf_text} />
        </div>
      )}
    </>
  );
};

export default Markdown2PDF;
