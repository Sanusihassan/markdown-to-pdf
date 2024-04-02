// how can i add initial value to my iframe?
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

const Loader = ({ loader_text }: { loader_text: string }) => (
  <div className="editor-loader">
    <Spinner animation="grow" />
    <p className="lead">{loader_text}</p>
  </div>
);

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
  const THEME = useSelector(
    (state: { tool: ToolState }) => state.tool.theme
  );
  const [themeInitialized, setThemeInitialized] = useState(false)
  const themes = ['github', 'github-dark', 'almond', 'awsm', 'axist', 'bamboo', 'bullframe', 'holiday', 'kacit', 'latex', 'marx', 'mini', 'modest', 'new', 'no-class', 'pico', 'retro', 'sakura', 'sakura-vader', 'semantic', 'simple', 'style-sans', 'style-serif', 'stylize', 'superstylin', 'tacit', 'vanilla', 'water', 'water-dark', 'writ'];
  const [showLoader, setShowLoader] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setShowLoader(false);
    const htmlString = renderToString(
      <>
        <ReactMarkdown
          children={markdown || "# hello"}
          className="github"
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
    )
    const iframe = iframeRef.current;
    const iframeDoc = iframe?.contentDocument || iframe?.contentWindow?.document;
    // depend on the theme next, time: 
    if (!themeInitialized && iframeDoc) {
      iframeDoc.head.innerHTML = `<link rel="stylesheet" href="/themes/github.css" />`;
      iframeDoc.body.className = "markdown-body";
      iframeDoc.body.innerHTML = htmlString;
      setThemeInitialized(true);
    }
    if (iframe && iframeDoc) {
      iframeDoc.body.innerHTML = htmlString;
    }
    console.log(themeInitialized)
  }, [iframeRef, markdown, themeInitialized]);

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
            <iframe ref={iframeRef} id="_html" />
          </div>
          <FloatingDownloadBtn errors={errors} text={download_pdf_text} />
        </div>
      )}
    </>
  );
};

export default Markdown2PDF;
