import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { XIcon } from "@heroicons/react/solid";
import { edit_page } from "@/content";
interface GitHubPopUpProps {
  show: boolean;
  onHide: () => void;
  title: string;
  github_popup: edit_page["github_popup"];
  lang: string;
}

const GitHubPopUp: React.FC<GitHubPopUpProps> = ({
  show,
  onHide,
  title,
  github_popup,
  lang,
}) => {
  const [url, setUrl] = useState("");

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the URL, e.g., make an API request to fetch GitHub data
    console.log(url);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <button onClick={onHide} className="btn">
          <XIcon className="h-5 w-5 text-gray-500" />
        </button>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
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
            <button className="btn btn-primary ml-auto" type="submit">
              {github_popup.submit}
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default GitHubPopUp;
