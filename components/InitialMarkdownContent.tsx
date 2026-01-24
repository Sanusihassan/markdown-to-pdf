// This is the initial markdown content (raw markdown, not HTML)
export const INITIAL_MARKDOWN = `# 📄 Convert Your Markdown to PDF with PDFEquips

**PDFEquips** is a powerful, free online tool that transforms your Markdown documents into professional PDF files instantly. Whether you're a developer documenting code, a writer crafting content, or a student preparing assignments, PDFEquips delivers high-quality PDF conversions with extensive customization options.

## ✨ Key Features

### 🔄 Seamless Markdown to PDF Conversion
Transform your Markdown documents into beautifully formatted PDF files in seconds. Our advanced rendering engine preserves all your formatting, code blocks, tables, and mathematical equations.

### 📁 Flexible File Management
- **📝 Rename Files**: Keep your documents organized by renaming files before download
- **☁️ Multiple Upload Options**: Upload from your computer or directly from GitHub repositories
- **⚡ Instant Processing**: Lightning-fast conversion with no quality loss

### 🎨 Extensive Customization Options

Make your PDFs uniquely yours with our comprehensive styling options:

- **🎭 Professional Themes**: Choose from GitHub, Dark, Retro, and more premium themes
- **📏 Page Configuration**: 
  - Multiple page sizes (A4, Letter, Legal, A3, A5)
  - Portrait or landscape orientation
  - Customizable margins (None, Small, Medium, Large)
- **🔤 Typography Control**: Adjust font sizes from 10px to 24px for optimal readability
- **📱 Responsive Preview**: See exactly how your PDF will look before downloading

## 🚀 How to Use PDFEquips

1. **📤 Upload Your Markdown File**  
   Click the upload button or drag & drop your \`.md\` file directly into the editor

2. **✏️ Edit in Real-Time**  
   Use our built-in code editor with syntax highlighting to make live changes

3. **⚙️ Customize Your PDF**  
   Select your preferred theme, page size, orientation, margins, and font size

4. **💾 Download Instantly**  
   Click "Download PDF" and get your professionally formatted document immediately

## 💡 Perfect For

- 👨‍💻 **Developers**: Documentation, README files, technical guides
- ✍️ **Writers**: Articles, blog posts, manuscripts  
- 🎓 **Students**: Essays, research papers, assignments
- 💼 **Professionals**: Reports, presentations, proposals

## 🔐 Privacy & Security

- **🚫 No Registration Required**: Start converting immediately
- **🗑️ Automatic File Deletion**: Your files are automatically removed after processing
- **🔒 Secure Processing**: All conversions happen securely with encryption

## 🌟 Try PDFEquips Today!

Experience the easiest way to convert Markdown to PDF. Visit [PDFEquips Markdown to PDF](https://www.pdfequips.com/markdown-to-pdf) and transform your documents in seconds.

---

### 📊 Code Example

Here's a sample of how code blocks look in your PDFs:

\`\`\`javascript
function convertMarkdownToPDF(markdown) {
  const options = {
    theme: 'github',
    pageSize: 'A4',
    orientation: 'portrait'
  };
  
  return pdfequips.convert(markdown, options);
}
\`\`\`

### 📐 Math Support

PDFEquips supports KaTeX for beautiful mathematical expressions:

When $a \\ne 0$, the quadratic equation $ax^2 + bx + c = 0$ has solutions:

$$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$

---

**Ready to create stunning PDFs?** Start converting now! 🎉`;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { setField, type ToolState } from "../src/store";
import { useDispatch } from "react-redux";

/**
 * Static Initial Content Component for SEO
 *
 * This component contains pre-rendered HTML from INITIAL_MARKDOWN.
 * Benefits:
 * - SEO-friendly (Google indexes static HTML)
 * - Fast initial load (no client-side markdown compilation)
 * - SSG/SSR compatible (works with Next.js, Gatsby, etc.)
 *
 * Usage Pattern:
 * 1. Show InitialMarkdownContent initially (static HTML)
 * 2. When user uploads file or changes theme → switch to dynamic MarkdownPreview
 *
 * To regenerate this HTML:
 * Run: node scripts/generate-initial-content.js
 */

export const InitialMarkdownContent: React.FC = () => {
  const markdown = useSelector(
    (state: { tool: ToolState }) => state.tool.markdown,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (markdown === null) {
      dispatch(setField({ markdown: INITIAL_MARKDOWN }));
    }
  }, []);
  return (
    <div
      className="markdown-body initial-content"
      style={{
        maxWidth: "1200px",
        fontSize: "16px",
        margin: "5mm",
      }}
    >
      {/* Pre-rendered static HTML below - DO NOT edit manually */}
      {/* This is generated from INITIAL_MARKDOWN */}

      <h1>📄 Convert Your Markdown to PDF with PDFEquips</h1>

      <p>
        <strong>PDFEquips</strong> is a powerful, free online tool that
        transforms your Markdown documents into professional PDF files
        instantly. Whether you're a developer documenting code, a writer
        crafting content, or a student preparing assignments, PDFEquips delivers
        high-quality PDF conversions with extensive customization options.
      </p>

      <h2>✨ Key Features</h2>

      <h3>🚀 Instant Markdown to PDF Conversion</h3>
      <p>
        Convert your Markdown files to PDF in seconds with our lightning-fast
        processing engine. No software installation required – everything
        happens securely in your browser.
      </p>

      <h3>🎨 Extensive Theme Library</h3>
      <p>
        Choose from <strong>28+ professionally designed themes</strong> to match
        your document's purpose:
      </p>
      <ul>
        <li>
          <strong>GitHub</strong> – Clean, developer-friendly styling
        </li>
        <li>
          <strong>LaTeX</strong> – Academic paper formatting
        </li>
        <li>
          <strong>Retro</strong> – Vintage terminal aesthetics
        </li>
        <li>
          <strong>Modest</strong> – Minimalist elegance
        </li>
        <li>And many more...</li>
      </ul>

      <h3>⚙️ Powerful Customization Options</h3>
      <ul>
        <li>
          <strong>Page Sizes</strong>: A4, Letter, Legal, A3, A5
        </li>
        <li>
          <strong>Orientation</strong>: Portrait or Landscape
        </li>
        <li>
          <strong>Margins</strong>: None, Small (5mm), or Large (10mm)
        </li>
        <li>
          <strong>Font Size</strong>: Adjustable from 10px to 24px
        </li>
        <li>
          <strong>Text Direction</strong>: LTR or RTL support for multilingual
          documents
        </li>
      </ul>

      <h3>📝 Advanced Markdown Support</h3>
      <p>Full GitHub Flavored Markdown (GFM) compatibility:</p>
      <ul>
        <li>Headers (H1-H6)</li>
        <li>Bold, italic, and strikethrough text</li>
        <li>Ordered and unordered lists</li>
        <li>Code blocks with syntax highlighting</li>
        <li>Tables</li>
        <li>Blockquotes</li>
        <li>Links and images</li>
        <li>Horizontal rules</li>
        <li>
          <strong>Mathematical equations</strong> with LaTeX/KaTeX
        </li>
      </ul>

      <h2>📋 How to Use</h2>
      <ol>
        <li>
          <strong>Upload Your Markdown</strong>: Drag and drop .md files or
          paste markdown text directly
        </li>
        <li>
          <strong>Choose Your Theme</strong>: Browse through our extensive theme
          collection
        </li>
        <li>
          <strong>Customize Settings</strong>: Adjust page size, margins,
          orientation, and font size
        </li>
        <li>
          <strong>Preview</strong>: See your document rendered in real-time
        </li>
        <li>
          <strong>Download PDF</strong>: Get your professionally formatted PDF
          instantly
        </li>
      </ol>

      <h2>🌟 Why Choose PDFEquips?</h2>

      <h3>💯 Free & Unlimited</h3>
      <p>
        Convert as many Markdown files as you need, completely free. No hidden
        costs, no subscription required.
      </p>

      <h3>🔒 Privacy-First</h3>
      <p>
        Your documents are processed securely in your browser. We never store or
        access your files – your data stays yours.
      </p>

      <h3>✨ Professional Quality</h3>
      <p>
        Generate publication-ready PDFs with proper typography, consistent
        formatting, and beautiful themes designed by professionals.
      </p>

      <h3>🌐 No Installation Required</h3>
      <p>
        Access PDFEquips from any device with a web browser. Works on Windows,
        Mac, Linux, and mobile devices.
      </p>

      <h2>👥 Perfect For</h2>
      <ul>
        <li>
          <strong>Developers</strong>: Convert README files, documentation, and
          technical guides
        </li>
        <li>
          <strong>Writers</strong>: Create formatted manuscripts and articles
        </li>
        <li>
          <strong>Students</strong>: Generate assignments, essays, and research
          papers
        </li>
        <li>
          <strong>Technical Writers</strong>: Produce professional documentation
        </li>
        <li>
          <strong>Bloggers</strong>: Export blog posts to shareable PDFs
        </li>
        <li>
          <strong>Academics</strong>: Format research papers with LaTeX-style
          equations
        </li>
      </ul>

      <h2>📄 Example Markdown</h2>
      <p>Try this sample markdown to see PDFEquips in action:</p>

      <pre>
        <code>{`# My Document

## Introduction
This is a **sample** markdown document with *italic* text.

## Features
- Feature 1
- Feature 2
- Feature 3

## Code Example
\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

## Math Support
When $a \\ne 0$, the quadratic formula is:

$$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$
`}</code>
      </pre>

      <h2>🚀 Get Started Now</h2>
      <p>
        Ready to convert your Markdown to PDF? Upload your file above or paste
        your markdown text to begin. Experience the fastest, most feature-rich
        Markdown to PDF converter available online.
      </p>

      <h2>💡 Tips & Tricks</h2>
      <ul>
        <li>
          <strong>Use Headers</strong>: Structure your document with H1-H6 for
          automatic PDF bookmarks
        </li>
        <li>
          <strong>Choose Theme Wisely</strong>: GitHub theme for technical docs,
          LaTeX for academic papers
        </li>
        <li>
          <strong>Optimize Images</strong>: Use relative URLs or embed images
          for best results
        </li>
        <li>
          <strong>Test Margins</strong>: Preview with different margin settings
          for perfect print layout
        </li>
        <li>
          <strong>Math Equations</strong>: Use $ for inline math and $$ for
          display math with LaTeX syntax
        </li>
      </ul>

      <h2>❓ Frequently Asked Questions</h2>

      <h3>Is PDFEquips really free?</h3>
      <p>
        Yes! PDFEquips is completely free with no limits on conversions or file
        sizes.
      </p>

      <h3>Do you support mathematical equations?</h3>
      <p>
        Absolutely! We support full LaTeX/KaTeX syntax for beautiful
        mathematical notation.
      </p>

      <h3>Can I customize the PDF appearance?</h3>
      <p>
        Yes! Choose from 28+ themes and customize page size, margins, font size,
        and orientation.
      </p>

      <h3>Is my data secure?</h3>
      <p>
        Your files are processed entirely in your browser. We never upload or
        store your documents.
      </p>

      <h3>What markdown features are supported?</h3>
      <p>
        We support GitHub Flavored Markdown (GFM) including tables, code blocks,
        and more.
      </p>

      <hr />

      <p style={{ textAlign: "center", marginTop: "3rem", fontSize: "1.1em" }}>
        <strong>
          Start converting your Markdown to PDF now – it's fast, free, and
          professional!
        </strong>
      </p>
    </div>
  );
};
