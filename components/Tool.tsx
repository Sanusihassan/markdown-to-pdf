import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DownloadFile from "./DownloadFile";
import { useFileStore } from "../src/file-store";
import { setField, type ToolState } from "../src/store";
import type { edit_page } from "../src/content";
import { getUserSubscription } from "fetch-subscription-status";
import { Bounce, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import Markdown2PDF from "./Markdown2PDF";
import DocumentName from "./DocumentName";
import { FilesList } from "./FilesList";
import ToolBar from "./ToolBar";
import PopUpAlert from "./PopUpAlert";

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

export type ToolProps = {
  data: ToolData;
  tools: any;
  lang: string;
  errors: any;
  edit_page: edit_page;
  pages: string;
  page: string;
  downloadFile: any;
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
  const path = data.to.replace("/", "");
  const stateShowTool = useSelector(
    (state: { tool: any }) => state.tool.showTool,
  );
  const errorMessage = useSelector(
    (state: { tool: any }) => state.tool.errorMessage,
  );
  const showFilesList = useSelector(
    (state: { tool: ToolState }) => state.tool.show_files_list,
  );
  const alertVarient = useSelector(
    (state: { tool: ToolState }) => state.tool.alertVarient,
  );
  const showDownloadBtn = useSelector(
    (state: { tool: ToolState }) => state.tool.showDownloadBtn,
  );
  const { setFiles, files } = useFileStore();
  const dispatch = useDispatch();

  const handleHideTool = () => {
    dispatch(setField({ showTool: false }));
  };

  useEffect(() => {
    dispatch(setField({ showDownloadBtn: false }));
  }, [stateShowTool]);
  // const onDrop = useCallback((acceptedFiles: File[]) => {
  //   const { isValid } = validateFiles(
  //     acceptedFiles,
  //     dispatch,
  //     errors,
  //     "application/pdf"
  //   );
  //   const newFiles = filterNewFiles(acceptedFiles, files, ACCEPTED);
  //   if (isValid) {
  //     setFiles(newFiles);
  //     handleHideTool();
  //   }
  // }, []);

  // const handlePaste = useCallback(
  //   (event: React.ClipboardEvent<HTMLDivElement>) => {
  //     const items = event.clipboardData?.items;
  //     if (items) {
  //       for (let i = 0; i < items.length; i++) {
  //         const item = items[i];
  //         if (item.kind === "file") {
  //           const blob = item.getAsFile();
  //           if (blob) {
  //             setFiles([blob]);
  //             handleHideTool();
  //             return;
  //           }
  //         }
  //       }
  //     }
  //   },
  //   []
  // );

  // const { getRootProps, isDragActive } = dropzone.useDropzone({ onDrop });

  // const acceptedFileTypes = {
  //   ".pdf": ".pdf, .PDF",
  //   ".pptx": ".pptx, .ppt",
  //   ".docx": ".docx, .doc",
  //   ".xlsx": ".xlsx, .xls",
  //   ".jpg": ".jpg, .jpeg",
  //   ".html": ".html, .htm",
  // };

  useEffect(() => {
    (async () => {
      const subscription = await getUserSubscription();
      const status = subscription.isActive;
      dispatch(setField({ subscriptionStatus: status }));
      if (typeof window !== "undefined") {
        Cookies.set("subscription", JSON.stringify(subscription.subscription));
      }
      if (!status) {
        const head = document.head;

        // Check if meta tag already exists to avoid duplicates
        if (!head.querySelector('meta[name="google-adsense-account"]')) {
          const metaTag = document.createElement("meta");
          metaTag.name = "google-adsense-account";
          metaTag.content = "ca-pub-7801483217621867";
          head.appendChild(metaTag);
        }

        // Check if script tag already exists to avoid duplicates
        if (
          !head.querySelector(
            'script[src*="adsbygoogle.js?client=ca-pub-7801483217621867"]',
          )
        ) {
          const scriptTag = document.createElement("script");
          scriptTag.async = true;
          scriptTag.src =
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7801483217621867";
          scriptTag.crossOrigin = "anonymous";
          head.appendChild(scriptTag);
        }
      }
    })();
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
        className={`tools-page position-relative${
          showFilesList ? " d-none" : ""
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
            loading_preview={edit_page.loading_preview}
            placeholder={edit_page.placeholder}
          />
        </div>
      </div>
      {showDownloadBtn ? (
        <div className="tools-page">
          <DownloadFile
            downloadFile={downloadFile}
            lang={lang}
            path={data.to.replace("/", "")}
          />
        </div>
      ) : null}
      <ToastContainer />
      <PopUpAlert varient={alertVarient} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export { Tool };
