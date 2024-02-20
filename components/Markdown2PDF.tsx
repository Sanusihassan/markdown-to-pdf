import ReactMarkdown from "react-markdown";
import { LegacyRef, useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import { Spinner } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";

import FloatingDownloadBtn from "./FloatingDownloadBtn";
import { errors } from "@/content";
import github from "react-syntax-highlighter/dist/cjs/styles/hljs/github";
import { default_markdown } from "@/src/content/content";

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

  useEffect(() => {

  }, []);
  const [showLoader, setShowLoader] = useState(true);
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
            <CodeEditor value={default_markdown} />
          </div>
          <div className="react-markdown-container">
            <ReactMarkdown
              children={default_markdown}
              components={{
                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      children={String(children || "").replace(/\n$/, "")}
                      style={github}
                      theme={github}
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
          </div>
          <FloatingDownloadBtn errors={errors} text={download_pdf_text} />
        </div>
      )}
    </>
  );
};

export default Markdown2PDF;
