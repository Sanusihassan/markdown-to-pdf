import { TrashIcon } from "@heroicons/react/solid";
import type { errors as _ } from "../../content";
import { useRouter } from "next/router";
import type { tool as _tool } from "../../content";
import { useFileStore } from "../../src/file-store";
import { ToolState, setStateFiles } from "@/src/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export type ActionProps = {
  index: number;
  extension: string;
  errors: _;
  fileName: string;
};

/**
 * it's working fine, but the changes from this actiondiv component is not reflected ouside of it
 * it's a next.js app, the updates are not available on other components
 */

export const ActionDiv = ({
  index,
  extension,
  errors,
  fileName,
}: ActionProps) => {
  // the files:
  /**
   * it says this statement is not callable
   * but the useFileStore has 3 members:
   * useFileStore.setState
   * useFileStore
   * useFileStore.subscribe
   *
   */
  const { setFiles } = useFileStore();
  const files = useFileStore().files;
  const stateFiles = useSelector(
    (state: { tool: ToolState }) => state.tool.files
  );
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //  const newFiles = store.files.filter((file) => file.name !== item.file.name);
    if (stateFiles.length > 0) {
      const newFiles = stateFiles.filter((file) => file.name !== fileName);
      dispatch(setStateFiles(newFiles));
    }
    if (files.length > 0 && "undefined" !== typeof window) {
      const newFiles = files.filter((file) => file.name !== fileName);
      setFiles(newFiles);
      //
    }
  };
  // const rotatedImageUrl = useRotatedImage(item.imageUrl);
  // router and tool path
  // const router = useRouter();
  // let path = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");
  // const handleRotateImage = useCallback(() => {
  //   if (rotatedImageUrl) {
  //     const newImageUrls = [...imageUrls];
  //     newImageUrls[index].imageUrl = rotatedImageUrl;
  //     setImageUrls(newImageUrls);
  //   }
  // }, [index, imageUrls, setImageUrls, rotatedImageUrl]);
  return (
    <div
      className={`action-div d-flex ${
        extension == ".html" ? "justify-content-end" : "justify-content-between"
      }`}
    >
      <button
        className="btn btn-light"
        // onClick={() => {
        //   const newImageUrls = [...imageUrls];
        //   newImageUrls.splice(index, 1);
        //   const isValid = validateFiles(files, extension, errors, dispatch);
        //   if(isValid) {
        //     dispatch(resetErrorMessage());
        //   }
        //   setImageUrls(newImageUrls);
        // }}
        // i think the problem might be with this onclick handler
        // which might not set the files correctly
        // this is a handler for deletion each file has a delete button
        // the files array on my mobx store should be updated and it should be reflected on all of my application.
        onClick={(e) => handleClick(e)}
      >
        <TrashIcon className="icon hero-icon" />
      </button>

      {/* {extension != ".html" ? (
        <button className="btn btn-light" onClick={handleRotateImage}>
          <RefreshIcon className="hero-icon" />
        </button>
      ) : null} */}
    </div>
  );
};
