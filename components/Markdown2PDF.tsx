import ReactMarkdown from "react-markdown";
import { LegacyRef, useEffect, useRef, useState } from "react";
import CodeEditor from "./CodeEditor";
import { Spinner } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";

import FloatingDownloadBtn from "./FloatingDownloadBtn";
import { errors } from "@/content";
import github from "react-syntax-highlighter/dist/cjs/styles/hljs/github";
import { useSelector } from "react-redux";
import { ToolState, setField } from "@/src/store";
import { renderToString } from "react-dom/server";
let prev_theme = "";
const Loader = ({ loader_text }: { loader_text: string }) => (
  <div className="editor-loader">
    <Spinner animation="grow" />
    <p className="lead">{loader_text}</p>
  </div>
);

const INTIAL_MARKUP = `<head><link rel="stylesheet" href="/themes/github.css" /></head>
<div class="markdown-body"><h1 id="convert-your-markdown-to-pdf-with-pdfequips">Convert your Markdown to PDF with PDFEquips</h1>
<p>To convert your Markdown to PDF, simply start by typing in the editor or paste from your clipboard. You can also drop your Markdown file into the editor.</p>
<p><strong>tip:</strong> Click on the pencil icon on the left to clear the editor</p>
<h2 id="privacy-first">Privacy First</h2>
<p>At PDFEquips, we prioritize your privacy. Unlike version 1 of Markdown to PDF, your content is no longer stored in a file before being read/converted and subsequently removed from our servers. Instead, your content is now sent securely via our API before returning the converted file. This ensures that your data is never stored and remains secure.</p>
<h2 id="github-flavored-styling-by-default">GitHub-Flavored Styling by Default</h2>
<p>We use GitHub-flavored styling by default, so your PDF files will have a clean and modern look.</p>
<h2 id="image-support">Image Support</h2>
<p>Images are base64-encoded into the PDF document, so they do not depend on a remote source that could go offline, rendering your image broken. Moreover, they do not require an internet connection.</p>
<h2 id="next-steps">Next Steps</h2>
<p>Up next, we&#39;re working on Emoji support, which will make your PDF documents more fun and expressive! Stay tuned for more updates.</p>
</div>
`;
const Markdown2PDF = ({
  loader_text,
  download_pdf_text,
  errors,
}: {
  loader_text: string;
  download_pdf_text: string;
  errors: errors;
}) => {
  const markdown = useSelector(
    (state: { tool: ToolState }) => state.tool.markdown
  );
  const options = useSelector(
    (state: { tool: ToolState }) => state.tool.options
  );
  const { theme } = options;

  const [themeInitialized, setThemeInitialized] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setShowLoader(false);
    const htmlString = renderToString(
      <>
        <ReactMarkdown
          children={markdown}
          className="github markdown-body"
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  children={String(children || "").replace(/\n$/, "")}
                  style={github}
                  language={match[1]}
                  PreTag="div"
                  ref={node as LegacyRef<SyntaxHighlighter> | undefined}
                />
              ) : (
                <code {...rest} className={className}>
                  {children === "undefined" || children === undefined
                    ? ""
                    : children}
                </code>
              );
            },
          }}
        />
      </>
    );
    const iframe = iframeRef.current;
    const iframeDoc =
      iframe?.contentDocument || iframe?.contentWindow?.document;
    if (iframeDoc?.body?.innerHTML == "") {
      iframeDoc.body.innerHTML = htmlString;
    }
    if ((!themeInitialized && iframeDoc) || prev_theme !== theme) {
      if (iframeDoc) {
        iframeDoc.head.innerHTML = `<link rel="stylesheet" href="/themes/${theme}.css" />`;
      }
      setThemeInitialized(true);
      prev_theme = theme;
    }
    if (iframe && iframeDoc) {
      if (iframeDoc.body) {
        iframeDoc.body.innerHTML = htmlString;
      }
    }
  }, [iframeRef, markdown, themeInitialized, options]);

  return (
    <>
      {showLoader ? (
        <Loader loader_text={loader_text} />
      ) : (
        <div className="md-2pdf">
          <div className="editor">
            <CodeEditor />
          </div>
          <div className="react-markdown-container">
            <iframe ref={iframeRef} id="_html" srcDoc={INTIAL_MARKUP} />
          </div>
          <FloatingDownloadBtn errors={errors} text={download_pdf_text} />
        </div>
      )}
    </>
  );
};

export default Markdown2PDF;
