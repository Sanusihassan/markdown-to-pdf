import React, { useEffect, useRef } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { useDispatch } from "react-redux";
import { setMarkDown } from "@/src/store";
const CodeEditor = ({ value }: { value: string }) => {
  const dispatch = useDispatch();
  const editorRef = useRef(null);

  const handleEditorChange = (value: string) => {
    dispatch(setMarkDown(value));
  };
  const handleFileDrop = (e: DragEvent) => {
    e.preventDefault();
    console.log("test");
    const file = e?.dataTransfer?.files[0];
    console.log(file);
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
      value={value}
    />
  );
};

export default CodeEditor;
