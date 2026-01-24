import React, { useEffect, useRef } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import type { ThemeName } from "../src/store";

interface MarkdownPreviewProps {
  markdown: string;
  theme: ThemeName;
  fontSize: number;
  dir?: "ltr" | "rtl";
  pageMargin: "No margin" | "Small" | "Big";
}

// Get page margins based on option
const getPageMargins = (pageMargin: string): string | undefined => {
  if (pageMargin === "No margin") {
    return undefined;
  }

  const margin = pageMargin === "Small" ? "5mm" : "10mm";

  // Return margin string (all sides have same value)
  return margin;
};
export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({
  markdown,
  theme,
  fontSize,
  dir = "ltr",
  pageMargin,
}) => {
  const previewRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLLinkElement | null>(null);

  // Dynamically load theme CSS
  useEffect(() => {
    // Remove old theme link if exists
    if (linkRef.current) {
      linkRef.current.remove();
      linkRef.current = null;
    }

    // Create new link element with timestamp to force reload
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://www.pdfequips.com/themes/${theme}.css?t=${Date.now()}`;
    link.id = `markdown-theme-${theme}`;

    // Add to document head
    document.head.appendChild(link);
    linkRef.current = link;

    // Cleanup on unmount
    return () => {
      if (linkRef.current) {
        linkRef.current.remove();
        linkRef.current = null;
      }
    };
  }, [theme]);

  // Configure marked
  useEffect(() => {
    marked.setOptions({
      breaks: true,
      gfm: true,
    });
  }, []);

  // Render markdown
  useEffect(() => {
    if (!previewRef.current || !markdown) return;

    const renderMarkdown = async () => {
      try {
        const html = await marked.parse(markdown);
        const sanitizedHtml = DOMPurify.sanitize(html);

        if (previewRef.current) {
          previewRef.current.innerHTML = sanitizedHtml;
        }
      } catch (error) {
        console.error("Error rendering markdown:", error);
        if (previewRef.current) {
          previewRef.current.innerHTML = "<p>Error rendering markdown</p>";
        }
      }
    };

    renderMarkdown();
  }, [markdown]);

  return (
    <div
      ref={previewRef}
      className="markdown-body"
      style={{
        fontSize: `${fontSize}px`,
        direction: dir,
        minHeight: "calc(100vh - 200px)",
        maxWidth: "1200px",
        margin: getPageMargins(pageMargin),
      }}
      dir={dir}
    />
  );
};
