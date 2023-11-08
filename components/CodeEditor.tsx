// import dynamic from "next/dynamic";
// import "ace-builds/src-noconflict/mode-markdown";
// import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/ext-language_tools";
// import { Dispatch, SetStateAction } from "react";
// import ace, { IAceEditorProps } from "react-ace";
// const AceEditor = dynamic(() => import("react-ace"), { ssr: false });

// please provide me with the code for this CodeEditor component based on the ace-editor keep in mind that my app is a next.js app
// the editor should be working with syntax hightlighting and autocompletion:

import React, { Dispatch, SetStateAction } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { useDispatch } from "react-redux";
import { setMarkDown } from "@/src/store";
const CodeEditor = ({ value }: { value: string }) => {
  const dispatch = useDispatch();
  const handleEditorChange = (value: string) => {
    // onChange(value);
    dispatch(setMarkDown(value));
  };

  return (
    // this is my react ace-editor i want to add a default value to it meaning the default text to show when it's initially loaded, then the user should change it after that:
    <AceEditor
      mode="markdown"
      theme="monokai"
      onChange={handleEditorChange}
      name="code-editor"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
      }}
      style={{ width: "100%", minHeight: "500px", height: "100vh" }}
      value={value}
    />
  );
};

export default CodeEditor;
