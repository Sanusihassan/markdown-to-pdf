import ReactMarkdown from "react-markdown";
import { type LegacyRef, useEffect, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import github from "react-syntax-highlighter/dist/cjs/styles/hljs/github";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

interface MarkdownPreviewProps {
  markdown: string;
  fontSize: number;
  theme: string;
  pageMargin: string;
}

const MarkdownPreview = ({
  markdown,
  fontSize,
  theme,
  pageMargin,
}: MarkdownPreviewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const getMarginValue = (margin: string) => {
    switch (margin) {
      case "No margin":
        return "0";
      case "Small":
        return "5mm";
      default:
        return "10mm";
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Inject scoped styles into the container
    const styleId = "md-preview-styles";
    let styleElement = containerRef.current.querySelector(
      `#${styleId}`,
    ) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      containerRef.current.prepend(styleElement);
    }

    // Create scoped CSS - all styles will only apply within .md-preview-scoped
    styleElement.textContent = `
      /* Normalize CSS - scoped to markdown preview */
      .md-preview-scoped {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
      }
      
      .md-preview-scoped * {
        box-sizing: border-box;
      }
      
      /* Load theme CSS */
      @import url('/themes/${theme}.css') layer(theme);
      
      /* Container styles */
      .md-preview-scoped {
        padding: 15px;
        margin: ${getMarginValue(pageMargin)};
        background: white;
        min-height: 100%;
      }
      
      /* Markdown body base styles */
      .md-preview-scoped .markdown-body {
        font-size: ${fontSize}px !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        line-height: 1.5;
        word-wrap: break-word;
      }
      
      /* Reset any inherited styles */
      .md-preview-scoped h1,
      .md-preview-scoped h2,
      .md-preview-scoped h3,
      .md-preview-scoped h4,
      .md-preview-scoped h5,
      .md-preview-scoped h6 {
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25;
      }
      
      .md-preview-scoped p {
        margin-top: 0;
        margin-bottom: 16px;
      }
      
      .md-preview-scoped ul,
      .md-preview-scoped ol {
        margin-top: 0;
        margin-bottom: 16px;
        padding-left: 2em;
      }
      
      .md-preview-scoped code {
        padding: 0.2em 0.4em;
        margin: 0;
        font-size: 85%;
        background-color: rgba(175, 184, 193, 0.2);
        border-radius: 6px;
        font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
      }
      
      .md-preview-scoped pre {
        padding: 16px;
        overflow: auto;
        font-size: 85%;
        line-height: 1.45;
        background-color: #f6f8fa;
        border-radius: 6px;
      }
      
      .md-preview-scoped a {
        color: #0969da;
        text-decoration: none;
      }
      
      .md-preview-scoped a:hover {
        text-decoration: underline;
      }
    `;
  }, [theme, fontSize, pageMargin]);

  // Load KaTeX CSS dynamically
  useEffect(() => {
    const katexLinkId = "katex-css";
    if (!document.getElementById(katexLinkId)) {
      const link = document.createElement("link");
      link.id = katexLinkId;
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css";
      link.integrity =
        "sha512-fHwaWebuwA7NSF5Qg/af4UeDx9XqUpYpOGgubo3yWu+b2IQR4UeQwbb42Ti7gVAjNtVoI/I9TEoYeu9omwcC6g==";
      link.crossOrigin = "anonymous";
      link.referrerPolicy = "no-referrer";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="md-preview-container"
      style={{
        width: "100%",
        height: "100%",
        overflow: "auto",
        background: "white",
      }}
    >
      {/* SEO-friendly content in light DOM with scoped styles */}
      <div ref={contentRef} className="md-preview-scoped">
        <div className="github markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
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
                    ref={
                      node as unknown as
                        | LegacyRef<SyntaxHighlighter>
                        | undefined
                    }
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
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownPreview;
