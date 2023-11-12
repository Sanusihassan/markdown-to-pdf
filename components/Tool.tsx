// this is a very crowded tsx component, how can i simplify it further by separating the logics / parts to other components
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "react-toastify/dist/ReactToastify.css";
// import EditPage from "./EditPage";
import {
  ToolState,
  setPath,
  setShowDownloadBtn,
  setShowFilesList,
} from "../src/store";

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
import { FilesList } from "./FilesList";
import DownloadFile from "./DownloadFile";
import PopUpAlert from "./PopUpAlert";
import { ToastContainer } from "react-toastify";

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
  const showFilesList = useSelector(
    (state: { tool: ToolState }) => state.tool.show_files_list
  );
  const alertVarient = useSelector(
    (state: { tool: ToolState }) => state.tool.alertVarient
  );
  // the files:
  const { setFiles } = useFileStore.getState();
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  const router = useRouter();
  const handleHideTool = () => {
    dispatch(dispatch(setShowFilesList(false)));
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

  return (
    <>
      <FilesList
        edit_page={edit_page}
        errors={errors}
        lang={lang}
        page={page}
        pages={pages}
      />
      <div
        className={`tools-page position-relative${
          showFilesList ? " d-none" : ""
        }`}
      >
        <ToolBar
          toolbar={edit_page.toolbar}
          errors={errors}
          github_popup={edit_page.github_popup}
          lang={lang}
        />
        <div className="rest">
          <DocumentName document_name={edit_page.document_name} />
          <Markdown2PDF
            loader_text={edit_page.loader_text}
            download_pdf_text={edit_page.download_pdf_text}
          />
        </div>
      </div>
      <div className="tools-page d-flex justify-content-center">
        <DownloadFile downloadFile={downloadFile} lang={lang} />
      </div>
      <ToastContainer />
      <PopUpAlert varient={alertVarient} />
    </>
  );
};

export default Tool;
