import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  ToolState,
  setField
} from "../src/store";

import type { edit_page, tools, downloadFile } from "../content";
import type { errors as _ } from "../content";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
  to: string;
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
  lang,
  errors,
  edit_page,
  pages,
  page,
  downloadFile,
  data
}) => {
  // state variables
  const showFilesList = useSelector(
    (state: { tool: ToolState }) => state.tool.show_files_list
  );
  const alertVarient = useSelector(
    (state: { tool: ToolState }) => state.tool.alertVarient
  );
  const dispatch = useDispatch();
  const handleHideTool = () => {
    // dispatch(dispatch(setShowFilesList(false)));
  };
  useEffect(() => {
    dispatch(setField({ showDownloadBtn: false }));
  }, []);

  return (
    <>
      <FilesList
        edit_page={edit_page}
        errors={errors}
        lang={lang}
        page={page}
        pages={pages}
        path={data.to}
      />
      <div
        className={`tools-page position-relative${showFilesList ? " d-none" : ""
          }`}
      >
        <ToolBar
          toolbar={edit_page.toolbar}
          errors={errors}
          github_popup={edit_page.github_popup}
          lang={lang}
          options={edit_page.options}
        />
        <div className="rest">
          <DocumentName document_name={edit_page.document_name} />
          <Markdown2PDF
            loader_text={edit_page.loader_text}
            download_pdf_text={edit_page.download_pdf_text}
            errors={errors}
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
