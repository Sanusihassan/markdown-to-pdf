import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import github from "react-syntax-highlighter/dist/cjs/styles/hljs/github";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { LegacyRef } from "react";

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

interface InitialMarkdownContentProps {
  fontSize: number;
}

export const InitialMarkdownContent = ({
  fontSize,
}: InitialMarkdownContentProps) => {
  return (
    <div style={{ fontSize }}>
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
                    node as unknown as LegacyRef<SyntaxHighlighter> | undefined
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
          {INITIAL_MARKDOWN}
        </ReactMarkdown>
      </div>
    </div>
  );
};
