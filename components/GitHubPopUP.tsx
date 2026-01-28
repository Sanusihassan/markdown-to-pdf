import { type FC, useRef, useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import type { edit_page, errors } from "../src/content";
import { useDispatch } from "react-redux";
import { setField } from "../src/store";
import axios from "axios";
import { useDismissible } from "../src/hooks/useDismissible";
interface GitHubPopUpProps {
  show: boolean;
  onHide: () => void;
  title: string;
  github_popup: edit_page["github_popup"];
  lang: string;
  errors: errors;
}

const GitHubPopUp: FC<GitHubPopUpProps> = ({
  show,
  onHide,
  title,
  github_popup,
  lang,
  errors,
}) => {
  const [url, setUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };
  const dispatch = useDispatch();
  // check if url is github url
  const isGitHubUrlValid = (url: string): boolean => {
    // Regular expression pattern to match GitHub repository URLs with paths
    const githubUrlPattern =
      /^(?:https?:\/\/)?(?:www\.)?github\.com\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+(?:\/[a-zA-Z0-9_.-]+)*$/;

    // Check if the URL matches the GitHub URL pattern
    return githubUrlPattern.test(url);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidUrl = isGitHubUrlValid(url);
    if (!isValidUrl) {
      dispatch(setField({ errorMessage: errors.INVALID_GITHUB_URL.message }));
      return;
    }

    setIsSubmitting(true);

    // Fetch the markdown files from your backend
    const path = "https://www.pdfequips.com/api/get-md-files";
    try {
      const response = await axios.post(`${path}`, { url });
      dispatch(setField({ files: response.data }));
      dispatch(setField({ show_files_list: true }));
      // Close the modal after a successful response
      onHide();
    } catch (error) {
      // Handle error response
      console.error("Failed to fetch repository contents", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const popupRef = useRef<HTMLDivElement>(null);

  useDismissible({
    enabled: show,
    onClose: onHide,
    ref: popupRef,
  });

  return (
    <div
      className={`github-popup ${show ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="github-popup-dialog" ref={popupRef}>
        <div className="github-popup-content">
          {/* Header */}
          <div className="github-popup-header">
            <h5 className="github-popup-title">{title}</h5>
            <button
              type="button"
              onClick={onHide}
              className="github-popup-close"
            >
              <XIcon className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Body */}
          <div className="github-popup-body">
            <form
              className="github-popup-form"
              onSubmit={handleSubmit}
              method="GET"
            >
              <div className="github-popup-group">
                <bdi className="github-popup-bdi">
                  <label
                    htmlFor="urlInput"
                    className={`github-popup-label${
                      lang === "ar" ? " is-rtl" : ""
                    }`}
                  >
                    {github_popup.label}
                  </label>
                </bdi>

                <input
                  id="urlInput"
                  type="text"
                  value={url}
                  onChange={handleUrlChange}
                  placeholder={github_popup.placeholder}
                  className="github-popup-input"
                />
              </div>

              <div className="github-popup-actions">
                <button
                  type="submit"
                  className="github-popup-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span
                      className="spinner-grow"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    github_popup.submit
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {show && <div className="github-popup-backdrop" />}
    </div>
  );
};

export default GitHubPopUp;
