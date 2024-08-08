import ReactMarkdown from "react-markdown";
import { LegacyRef, useEffect, useRef, useState } from "react";
import CodeEditor from "./CodeEditor";
import { Spinner } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";

import FloatingDownloadBtn from "./FloatingDownloadBtn";
import { errors } from "@/content";
import github from "react-syntax-highlighter/dist/cjs/styles/hljs/github";
import { useSelector } from "react-redux";
import { ToolState } from "@/src/store";
import { renderToString } from "react-dom/server";
let prev_theme = "";
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
  const options = useSelector(
    (state: { tool: ToolState }) => state.tool.options
  );

  const INTIAL_MARKUP = `
  <head><link rel="stylesheet" href="/themes/github.css" /></head>
  <style>
  html {
    padding: 15px;
  }
    body {
      margin: ${options.pageMargin === "No margin" ? 0 : options.pageMargin === "Small" ? "5mm" : "10mm"};
    }
    .markdown-body {
      font-size: ${options.fontSize}px !important;
    }
  </style>
  <body class="markdown-body">
  <h1 id="convert-your-markdown-to-pdf-with-pdfequips">Convert your Markdown to PDF with PDFEquips</h1>
  <p>PDFEquips is a powerful online tool that allows you to effortlessly convert Markdown documents into PDF files. With a user-friendly interface and a range of customization options, PDFEquips makes it easy to create professional-looking PDFs from your Markdown content.</p>
  <h2 id="features">Features</h2>
  <h3 id="1-markdown-to-pdf-conversion">1. Markdown to PDF Conversion</h3>
  <p>Easily convert your Markdown documents into high-quality PDF files.</p>
  <h3 id="2-file-management">2. File Management</h3>
  <ul>
  <li><strong>Rename Files</strong>: Rename your files before downloading to keep them organized.</li>
  <li><strong>Upload Files</strong>: Upload Markdown files from your local machine or directly from GitHub.</li>
  </ul>
  <h3 id="3-customization-options">3. Customization Options</h3>
  <ul>
  <li><strong>Themes</strong>: Choose from a variety of themes to customize the appearance of your PDF.</li>
  <li><strong>Screen Size</strong>: Adjust the screen size to optimize the viewing experience.</li>
  <li><strong>Orientation</strong>: Select either portrait or landscape orientation for your PDF.</li>
  <li><strong>Page Size</strong>: Specify the size of the pages in your PDF.</li>
  <li><strong>Page Margin</strong>: Set the margins for your PDF pages to control white space.</li>
  <li><strong>Font Size</strong>: Customize the text size.</li>
  </ul>
  <h2 id="how-to-use">How to Use</h2>
  <ol>
  <li><strong>Upload Markdown File</strong>: Click on the upload button to select a Markdown file from your local machine or GitHub repository.</li>
  <li><strong>Customize Settings</strong>: Adjust the settings according to your preferences, including theme, screen size, orientation, page size, and page margin.</li>
  <li><strong>Convert to PDF</strong>: Click the &quot;Download PDF&quot; button to initiate the conversion process.</li>
  <li><strong>Download PDF</strong>: Once the conversion is complete, click on the download button to save your PDF file with the specified name.</li>
  </ol>
  <h2 id="try-pdfequips-now-">Try PDFEquips Now!</h2>
  <p>Visit <a href="https://www.pdfequips.com/markdown-to-pdf">PDFEquips</a> to experience the convenience of converting Markdown to PDF with ease.</p>
  </body>
  `;

  const preview = useSelector((state: { tool: ToolState }) => state.tool.preview);

  const { theme } = options;

  const [themeInitialized, setThemeInitialized] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setShowLoader(false);
    const htmlString = renderToString(
      <div style={{ fontSize: options.fontSize }}>
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
      </div>
    );
    const iframe = iframeRef.current;
    const iframeDoc =
      iframe?.contentDocument || iframe?.contentWindow?.document;
    if (iframeDoc?.body?.innerHTML == "") {
      iframeDoc.body.innerHTML = htmlString;
    }
    if ((!themeInitialized && iframeDoc) || prev_theme !== theme) {
      if (iframeDoc) {
        iframeDoc.head.innerHTML = `
        <style>
          div.markdown-body {
            padding: 15px;
          }
          body {
            font-size: ${options.fontSize}px
          }
        </style>
        <link rel="stylesheet" href="/themes/${theme}.css" />
        `;
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
          <div className={`react-markdown-container${preview ? " preview" : ""}`}>
            <iframe ref={iframeRef} id="_html" srcDoc={INTIAL_MARKUP} />
          </div>
          <FloatingDownloadBtn errors={errors} text={download_pdf_text} />
        </div>
      )}
    </>
  );
};

export default Markdown2PDF;
