import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import type { errors as _, edit_page } from "../src/content";
import Files from "./DisplayFile/Files";
// import { ToolStoreContext } from "../src/ToolStoreContext";
import { useFileStore } from "../src/file-store";
import FileCard from "./DisplayFile/FileCard";
import { useSelector } from "react-redux";
import type { ToolState } from "../src/store";
type propTypes = {
  extension: string;
  pages: string;
  page: string;
  lang: string;
  errors: _;
  edit_page: edit_page;
};

const DisplayFile = ({
  extension,
  pages,
  page,
  lang,
  errors,
  edit_page,
}: propTypes) => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [toolTipSizes, setToolTipSizes] = useState<string[]>([]);
  // actual files
  const { files } = useFileStore();
  // const statePath = useSelector(
  //   (state: { tool: ToolState }) => state.tool.path
  // );
  // const stateFocus = useSelector(
  //   (state: { tool: ToolState }) => state.tool.focus
  // );
  // const stateClick = useSelector(
  //   (state: { tool: ToolState }) => state.tool.click
  // );
  // const dispatch = useDispatch();
  // // router
  // const router = useRouter();
  const stateFiles = useSelector(
    (state: { tool: ToolState }) => state.tool.files
  );

  useEffect(() => {
    // const isValid = validateFiles(files, extension, errors, dispatch, {
    //   path: statePath,
    //   focus: stateFocus,
    //   click: stateClick,
    // });
    // if (isValid) {
    //   dispatch(resetErrorMessage());
    // }
    // const max_files = 2;
    // if (state && files.length > max_files) {
    //   state?.setErrorMessage(errors.MAX_FILES_EXCEEDED.message);
    // }
    // let isSubscribed = true;
    // const tooltipSizes = files.map((file: File) =>
    //   getFileDetailsTooltipContent(file, pages, page, lang, dispatch, errors)
    // );
    // Promise.all(tooltipSizes).then((sizes) => {
    //   setToolTipSizes(sizes);
    // });
    // const processFiles = async () => {
    //   try {
    //     setShowSpinner(true);
    //     if (extension && extension === ".pdf") {
    //       const newImageUrls: { file: File; imageUrl: string }[] = [];
    //       const pdfPromises = files.map(async (file: File) => {
    //         const imageUrl = await getFirstPageAsImage(file, dispatch, errors);
    //         newImageUrls.push({ file, imageUrl });
    //       });
    //       await Promise.all(pdfPromises);
    //       if (isSubscribed) {
    //         setImageUrls([...newImageUrls]);
    //       }
    //     } else if (extension && extension !== ".jpg") {
    //       const newImageUrls: { file: File; imageUrl: string }[] = [];
    //       files.forEach((file: File) => {
    //         let imageUrl = !file.size
    //           ? "/images/corrupted.png"
    //           : getPlaceHoderImageUrl(extension);
    //         newImageUrls.push({ file, imageUrl });
    //       });
    //       if (isSubscribed) {
    //         setImageUrls([...newImageUrls]);
    //       }
    //     } else if (extension && extension === ".jpg") {
    //       const newImageUrls: { file: File; imageUrl: string }[] = [];
    //       files.forEach((file: File) => {
    //         const reader = new FileReader();
    //         reader.onload = function (event: ProgressEvent<FileReader>) {
    //           const imageUrl = (event.target as FileReader).result as string;
    //           newImageUrls.push({ file, imageUrl });
    //           if (isSubscribed) {
    //             setImageUrls([...newImageUrls]);
    //           }
    //         };
    //         reader.readAsDataURL(file);
    //       });
    //     }
    //   } catch (error) {
    //     console.error("Error processing files:", error);
    //   } finally {
    //     setShowSpinner(false);
    //   }
    // };
    // processFiles();
    // return () => {
    //   isSubscribed = false;
    // };
  }, [extension, files, stateFiles]);
  // const handleDragEnd = (result: any) => {
  //   if (!result.destination) {
  //     return;
  //   }
  // };

  return (
    <>
      {stateFiles.length > 0 ? (
        <>
          <div className="display-file">
            {stateFiles.map((file, i) => {
              return (
                <div className="drag-element">
                  <FileCard
                    file={file as unknown as File}
                    errors={errors}
                    extension={extension}
                    loader_text={edit_page.loader_text}
                    fileDetailProps={[pages, page, lang]}
                    index={i}
                    key={i}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <Files
          errors={errors}
          extension={extension}
          setToolTipSizes={setToolTipSizes}
          toolTipSizes={toolTipSizes}
          loader_text={edit_page.loader_text}
          showSpinner={showSpinner}
          fileDetailProps={[pages, page, lang]}
        />
      )}
    </>
  );
};

export default DisplayFile;
