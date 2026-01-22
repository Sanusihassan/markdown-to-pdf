// i made some updates
// i removed initialValue and set markdown's default value to INITIAL_MARKDOWN in the store like this: markdown: INITIAL_MARKDOWN,
// updated Markdown2PDF.tsx
// the idea of using iframes in the past is that we can control the theme, we have so many themes served under the /theme/ route. and these are large css files i can't insert those manually in the tsx

import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import type { errors } from "../src/content";
import { useSelector } from "react-redux";
import type { ToolState } from "../src/store";
import FloatingDownloadBtn from "./FloatingDownloadBtn";
import MarkdownPreview from "./MarkdownPreview";
import { INITIAL_MARKDOWN } from "./InitialMarkdownContent";

const Loader = ({ loader_text }: { loader_text: string }) => (
  <div className="editor-loader">
    <span className="spinner-grow lg" role="status" aria-hidden="true"></span>
    <p className="lead">{loader_text}</p>
  </div>
);

const Markdown2PDF = ({
  loader_text,
  download_pdf_text,
  errors,
  placeholder,
}: {
  loader_text: string;
  download_pdf_text: string;
  errors: errors;
  placeholder: string;
}) => {
  const markdown = useSelector(
    (state: { tool: ToolState }) => state.tool.markdown,
  );
  const options = useSelector(
    (state: { tool: ToolState }) => state.tool.options,
  );
  const preview = useSelector(
    (state: { tool: ToolState }) => state.tool.preview,
  );

  const [showLoader, setShowLoader] = useState(true);
  const [initialized, setInitialized] = useState(false);

  // Determine which markdown to display
  const displayMarkdown = initialized ? markdown : INITIAL_MARKDOWN;
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
                setInitialized(true);
              }}
              // initialValue={INITIAL_MARKDOWN}
            />
          </div>
          <div
            className={`react-markdown-container${preview ? " preview" : ""}`}
          >
            {/* SEO-friendly div-based preview with scoped styles */}
            <MarkdownPreview
              markdown={displayMarkdown}
              fontSize={options.fontSize}
              theme={options.theme}
              pageMargin={options.pageMargin}
            />
          </div>
          <FloatingDownloadBtn errors={errors} text={download_pdf_text} />
        </div>
      )}
    </>
  );
};

export default Markdown2PDF;
