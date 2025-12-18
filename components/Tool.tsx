import React, { useCallback, useEffect } from "react";
import * as dropzone from "react-dropzone";
import EditPage from "./EditPage";
import ErrorElement from "./ErrorElement";
import { useSelector, useDispatch } from "react-redux";
import { FileInputForm } from "./Tool/FileInputForm";
import DownloadFile from "./DownloadFile";
import { useFileStore } from "../src/file-store";
import { setField } from "../src/store";
import { ACCEPTED, filterNewFiles, validateFiles } from "../src/utils";
import type { edit_page } from "../src/content";
import { getUserSubscription } from "fetch-subscription-status";
import { Bounce, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";

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
    (state: { tool: any }) => state.tool.showTool
  );
  const errorMessage = useSelector(
    (state: { tool: any }) => state.tool.errorMessage
  );
  const { setFiles, files } = useFileStore();
  const dispatch = useDispatch();

  const handleHideTool = () => {
    dispatch(setField({ showTool: false }));
  };

  useEffect(() => {
    dispatch(setField({ showDownloadBtn: false }));
  }, [stateShowTool]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const { isValid } = validateFiles(
      acceptedFiles,
      dispatch,
      errors,
      "application/pdf"
    );
    const newFiles = filterNewFiles(acceptedFiles, files, ACCEPTED);
    if (isValid) {
      setFiles(newFiles);
      handleHideTool();
    }
  }, []);

  const handlePaste = useCallback(
    (event: React.ClipboardEvent<HTMLDivElement>) => {
      const items = event.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.kind === "file") {
            const blob = item.getAsFile();
            if (blob) {
              setFiles([blob]);
              handleHideTool();
              return;
            }
          }
        }
      }
    },
    []
  );

  const { getRootProps, isDragActive } = dropzone.useDropzone({ onDrop });

  const acceptedFileTypes = {
    ".pdf": ".pdf, .PDF",
    ".pptx": ".pptx, .ppt",
    ".docx": ".docx, .doc",
    ".xlsx": ".xlsx, .xls",
    ".jpg": ".jpg, .jpeg",
    ".html": ".html, .htm",
  };

  useEffect(() => {
    (async () => {
      const subscription = await getUserSubscription();
      const status = subscription.isActive;
      console.log("status", status);
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
            'script[src*="adsbygoogle.js?client=ca-pub-7801483217621867"]'
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
      <div
        // tools-page
        className="tools-page"
        {...(stateShowTool && { ...getRootProps(), onPaste: handlePaste })}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {isDragActive && <div className="overlay">{tools.drop_files}</div>}
        <div
          className={`text-center${
            !(stateShowTool && errorMessage?.length > 0) ? "" : " d-flex"
          } flex-column tools ${stateShowTool ? "" : "d-none"}`}
        >
          <h1 className="title">{data.title}</h1>
          <p className="description">{data.description}</p>
          <FileInputForm
            lang={lang}
            data={data}
            errors={errors}
            tools={tools}
            acceptedFileTypes={acceptedFileTypes}
          />
          <p>{tools.or_drop}</p>
          <ErrorElement cta={edit_page.filenameOptions.cta} />
        </div>
        <EditPage
          extension={data.type}
          edit_page={edit_page}
          pages={pages}
          page={page}
          lang={lang}
          errors={errors}
          path={path}
          drop_files={tools.drop_files}
        />
        <DownloadFile lang={lang} downloadFile={downloadFile} path={path} />
      </div>
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
