// this is a very crowded tsx component, how can i simplify it further by separating the logics / parts to other components
import { useCallback, useEffect, useRef, useState, useContext } from "react";
import { useDropzone } from "react-dropzone";

// import EditPage from "./EditPage";
import { ToolState, hideTool, setPath, setShowDownloadBtn } from "../src/store";

import { useRouter } from "next/router";
import type { edit_page, tools, downloadFile } from "../content";
import type { errors as _ } from "../content";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useFileStore } from "../src/file-store";
// import DownloadFile from "./DownloadFile";
import Markdown2PDF from "./Markdown2PDF";
import ToolBar from "./ToolBar";
import DocumentName from "./DocumentName";

export type errorType = {
  response: {
    data: {
      error: string;
      text: () => Promise<string>; // Add type for text() function
    };
  };
};

export type ToolData = {
  title: string;
  description: string;
  color: string;
  type: string;
};

type ToolProps = {
  data: ToolData;
  tools: tools;
  lang: string;
  errors: _;
  edit_page: edit_page;
  pages: string;
  page: string;
  downloadFile: downloadFile;
};

const Tool: React.FC<ToolProps> = ({
  data,
  tools,
  lang,
  errors,
  edit_page,
  pages,
  page,
  downloadFile,
}) => {
  // state variables:
  const statePath = useSelector(
    (state: { tool: ToolState }) => state.tool.path
  );
  const stateShowTool = useSelector(
    (state: { tool: ToolState }) => state.tool.showTool
  );
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );
  // the files:
  const { setFiles } = useFileStore.getState();
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  const router = useRouter();
  const handleHideTool = () => {
    dispatch(dispatch(hideTool()));
  };
  let path = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");
  useEffect(() => {
    // set the path if it has not been set yet
    if (statePath == "") {
      dispatch(setPath(path));
    }
    dispatch(setShowDownloadBtn(false));
  }, []);

  // endpoint
  // const [endpoint, setEndpoint] = useState("");
  // drag and drop input handling
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    handleHideTool();
  }, []);
  const { getRootProps, isDragActive } = useDropzone({ onDrop });

  // file input change handler
  let showTool = stateShowTool && errorMessage?.length > 0;
  // accepted file types
  const acceptedFileTypes = {
    ".pdf": ".pdf, .PDF",
    ".pptx": ".pptx, .ppt",
    ".docx": ".docx, .doc",
    ".xlsx": ".xlsx, .xls",
    ".jpg": ".jpg, .jpeg",
    ".html": ".html, .htm",
  };

  return (
    <>
      <div className="tools-page position-relative">
        <ToolBar toolbar={edit_page.toolbar} lang={lang} />
        <div className="rest">
          <DocumentName document_name={edit_page.document_name} />
          <Markdown2PDF loader_text={edit_page.loader_text} />
        </div>
      </div>
    </>
  );
};

export default Tool;
