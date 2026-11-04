import React, { useEffect, useRef, useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { useDispatch } from "react-redux";
import { setField } from "../src/store";
import { type ToolState } from "../src/store";
import { useSelector } from "react-redux";
import type { errors as _ } from "../src/content";
import { validateFiles } from "../src/utils";

interface CodeEditorProps {
  handleChange: () => void;
  initialValue?: string;
  errors: _;
  drop_files: string;
}

const CodeEditor = ({
  handleChange,
  initialValue = "",
  errors,
  drop_files,
}: CodeEditorProps) => {
  const dispatch = useDispatch();
  const editorRef = useRef(null);
  const markdown = useSelector(
    (state: { tool: ToolState }) => state.tool.markdown,
  );

  if (typeof window === "undefined") return null;

  // Initialize markdown with initial value if markdown is empty
  useEffect(() => {
    if (!markdown && initialValue) {
      dispatch(setField({ markdown: initialValue }));
    }
  }, []);

  const handleEditorChange = (v: string) => {
    dispatch(setField({ markdown: v }));
    handleChange();
  };

  // Dropped files get the same checks as the upload button, then load into the editor.
  // Handled in the capture phase so Ace's own drop handling never sees files.
  const [isDraggingFiles, setIsDraggingFiles] = useState(false);
  const dragDepth = useRef(0);
  const hasFiles = (e: React.DragEvent) =>
    e.dataTransfer?.types?.includes("Files");

  const handleDragEnter = (e: React.DragEvent) => {
    if (!hasFiles(e)) return;
    e.preventDefault();
    dragDepth.current += 1;
    setIsDraggingFiles(true);
  };
  const handleDragOver = (e: React.DragEvent) => {
    if (!hasFiles(e)) return;
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = (e: React.DragEvent) => {
    if (!hasFiles(e)) return;
    dragDepth.current = Math.max(0, dragDepth.current - 1);
    if (dragDepth.current === 0) setIsDraggingFiles(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    if (!hasFiles(e)) return;
    e.preventDefault();
    e.stopPropagation();
    dragDepth.current = 0;
    setIsDraggingFiles(false);
    const file = e.dataTransfer.files[0];
    if (!file) return;
    const { isValid } = validateFiles([file], dispatch, errors, "text/markdown");
    if (!isValid) return;
    const reader = new FileReader();
    reader.onload = (ev) => handleEditorChange(ev?.target?.result as string);
    reader.readAsText(file);
  };

  return (
    <div
      className="editor-drop-zone"
      onDragEnterCapture={handleDragEnter}
      onDragOverCapture={handleDragOver}
      onDragLeaveCapture={handleDragLeave}
      onDropCapture={handleDrop}
    >
      {isDraggingFiles && <div className="overlay">{drop_files}</div>}
      <AceEditor
        ref={editorRef}
        mode="markdown"
        theme="monokai"
        onChange={handleEditorChange}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          setReadOnly: false,
          dragEnabled: true,
          dragDelay: 0,
        }}
        style={{ width: "100%", minHeight: "500px", height: "100vh" }}
        value={markdown || initialValue}
      />
    </div>
  );
};

export default CodeEditor;
