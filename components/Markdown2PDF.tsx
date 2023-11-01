// the issue with this code is that the initial render of the component when the markdown is set from the json file that markdown is not highlighted.
import ReactMarkdown from "react-markdown";
import { LegacyRef, useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import { Spinner } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/cjs/styles/prism/dark";

const Loader = ({ loader_text }: { loader_text: string }) => (
  <div className="editor-loader">
    <Spinner animation="grow" />
    <p className="lead">please wait...</p>
  </div>
);

const Markdown2PDF = ({ loader_text }: { loader_text: string }) => {
  const [markdown, setMarkdown] = useState<string>("");
  useEffect(() => {
    (async () => {
      const content = (await fetch("/defaultcontent.json")).json();
      content.then((v) => {
        setMarkdown(v.md);
      });
      // if (containerRef.current) {
      //   containerRef.current.scrollTop = 50;
      // }
    })();
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
            <CodeEditor value={markdown} onChange={setMarkdown} />
          </div>
          <div className="react-markdown-container">
            <ReactMarkdown
              children={markdown}
              components={{
                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      children={String(children).replace(/\n$/, "")}
                      style={dark}
                      language={match[1]}
                      PreTag="div"
                      ref={node as LegacyRef<SyntaxHighlighter> | undefined}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Markdown2PDF;
