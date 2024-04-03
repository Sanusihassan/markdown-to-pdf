import { FC, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { XIcon } from "@heroicons/react/solid";
import { edit_page, errors } from "@/content";
import { useDispatch } from "react-redux";
import { setField } from "@/src/store";
import axios from "axios";
interface GitHubPopUpProps {
  show: boolean;
  onHide: () => void;
  title: string;
  github_popup: edit_page["github_popup"];
  lang: string;
  errors: errors;
}

// in this component i want to close the pop up programmatically when there is a response from the server which is ok

const GitHubPopUp: FC<GitHubPopUpProps> = ({
  show,
  onHide,
  title,
  github_popup,
  lang,
  errors,
}) => {
  const [url, setUrl] = useState("");
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

    // Fetch the markdown files from your backend
    try {
      const response = await axios.get(
        `https://5000-planetcreat-pdfequipsap-o51h4y0fppz.ws-eu106.gitpod.io/api/get-md-files?url=${encodeURIComponent(
          url
        )}`
      );
      dispatch(setField({ files: response.data }));
      dispatch(setField({ show_files_list: true }));
      // Close the modal after a successful response
      onHide();
    } catch (error) {
      // Handle error response
      console.error("Failed to fetch repository contents", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <button onClick={onHide} className="btn btn-dark d-inline-flex">
          <XIcon className="h-5 w-5 text-gray-500" />
        </button>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} method="GET">
          <Form.Group controlId="urlInput">
            <bdi className="d-block">
              <Form.Label
                className={`d-block${"ar" === lang ? " text-right" : ""}`}
              >
                {github_popup.label}
              </Form.Label>
            </bdi>
            <Form.Control
              type="text"
              placeholder={github_popup.placeholder}
              value={url}
              onChange={handleUrlChange}
              className="mb-2"
            />
          </Form.Group>
          <div className="row m-0">
            <button
              className="btn btn-dark ml-auto d-inline-flex"
              type="submit"
            >
              {github_popup.submit}
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default GitHubPopUp;
