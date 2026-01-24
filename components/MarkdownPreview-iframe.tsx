import React, { useEffect, useMemo, useRef, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import type { ToolState } from "../src/store";
import { useSelector } from "react-redux";

// Get page margins based on option
const getPageMargins = (pageMargin: string): string => {
  if (pageMargin === "No margin") {
    return "0";
  }
  return pageMargin === "Small" ? "5mm" : "10mm";
};

export const MarkdownPreview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [renderedHtml, setRenderedHtml] = useState("");
  const options = useSelector(
    (state: { tool: ToolState }) => state.tool.options,
  );
  const markdown = useSelector(
    (state: { tool: ToolState }) => state.tool.markdown,
  );
  const { theme, fontSize, dir, pageMargin } = options;
  // Configure marked with KaTeX extension
  useEffect(() => {
    // Configure marked for math support
    marked.setOptions({
      breaks: true,
      gfm: true,
    });

    // Add KaTeX extension for math rendering
    const renderer = new marked.Renderer();

    // Inline math: $...$
    renderer.codespan = (text) => {
      // Check if it's a math expression (starts and ends with $)
      if (text.text.startsWith("$") && text.text.endsWith("$")) {
        const math = text.text.slice(1, -1);
        return `<span class="katex-inline">${math}</span>`;
      }
      return `<code>${text}</code>`;
    };

    marked.use({ renderer });
  }, []);

  // Render markdown with math support
  useEffect(() => {
    if (!markdown) return;

    const renderMarkdown = async () => {
      try {
        // Handle display math blocks: $$...$$
        let processedMarkdown = markdown.replace(
          /\$\$([\s\S]+?)\$\$/g,
          (match, math) => {
            return `<div class="katex-display">${math.trim()}</div>`;
          },
        );

        // Handle inline math: $...$
        processedMarkdown = processedMarkdown.replace(
          /\$([^\$\n]+?)\$/g,
          (match, math) => {
            return `<span class="katex-inline">${math}</span>`;
          },
        );

        const html = await marked.parse(processedMarkdown);
        const sanitizedHtml = DOMPurify.sanitize(html, {
          ADD_TAGS: ["span", "div"],
          ADD_ATTR: ["class"],
        });

        setRenderedHtml(sanitizedHtml);
      } catch (error) {
        console.error("Error rendering markdown:", error);
        setRenderedHtml("<p>Error rendering markdown</p>");
      }
    };

    renderMarkdown();
  }, [markdown]);

  // if (!loaded) {
  //   return <Loading show={true} />;
  // }

  // Update iframe content when html or theme changes
  const iframeContent = useMemo(() => {
    const margin = getPageMargins(pageMargin);

    return `<!DOCTYPE html>
<html dir="${dir}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="https://www.pdfequips.com/themes/${theme}.css?t=${Date.now()}">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">

<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    font-size: ${fontSize}px;
    direction: ${dir};
    padding: ${margin};
    background: white;
    color: #333;
    line-height: 1.6;
  }
  .markdown-body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  .katex-display { display: block; margin: 1.5em 0; text-align: center; }
  .katex-inline { display: inline-block; }
</style>

<script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
</head>
<body>
<div class="markdown-body">${renderedHtml}</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.katex-display').forEach(el => {
      katex.render(el.textContent || '', el, { displayMode: true, throwOnError: false });
    });
    document.querySelectorAll('.katex-inline').forEach(el => {
      katex.render(el.textContent || '', el, { displayMode: false, throwOnError: false });
    });
  });
</script>
</body>
</html>`;
  }, [renderedHtml, theme, fontSize, dir, pageMargin]);
  useEffect(() => {
    if (!iframeRef.current || !renderedHtml) return;

    const iframeDoc = iframeRef.current.contentDocument;
    if (!iframeDoc) return;
  }, [renderedHtml, theme, fontSize, dir, pageMargin]);

  return (
    <iframe
      ref={iframeRef}
      srcDoc={iframeContent}
      title="Markdown Preview"
      style={{
        width: "100%",
        minHeight: "100%",
        border: "none",
        background: "white",
      }}
      sandbox="allow-same-origin allow-scripts"
    />
  );
};
