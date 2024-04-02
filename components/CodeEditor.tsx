import React, { useEffect, useRef } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { useDispatch } from "react-redux";
import { setField } from "@/src/store";
import {
  ToolState
} from "../src/store";
import { useSelector } from "react-redux";
const CodeEditor = () => {
  const dispatch = useDispatch();
  const editorRef = useRef(null);
  const markdown = useSelector(
    (state: { tool: ToolState }) => state.tool.markdown
  );

  const handleEditorChange = (v: string) => {
    dispatch(setField({ markdown: v }));
  };
  const handleFileDrop = (e: DragEvent) => {
    e.preventDefault();
    const file = e?.dataTransfer?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e?.target?.result;
        handleEditorChange(contents as string);
      };
      reader.readAsText(file);
    }
  };

  useEffect(() => {
    // @ts-ignore
    const editor = editorRef!.current!.editor;
    editor.container.addEventListener("drop", handleFileDrop);
    return () => {
      // Cleanup the event listener when the component unmounts
      editor.container.removeEventListener("drop", handleFileDrop);
    };
  }, []);

  return (
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
      value={markdown}
    />
  );
};

export default CodeEditor;
