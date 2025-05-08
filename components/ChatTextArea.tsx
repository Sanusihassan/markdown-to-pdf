// katex-html
export const ChatTextArea = () => {
    return (
        <div className="chat-text-area">
            <div className="chatbox-wrapper">
                <textarea
                    placeholder={"Ask anything"}
                    className="styled-textarea"
                // onChange={(e) =>
                //     dispatch(setField({ prompt: e.target.value }))
                // }
                ></textarea>
                <button className="up-arrow-button" aria-label="submit" onSubmit={(e) => {
                    e.preventDefault();
                }} onClick={(e) => {
                    // e.preventDefault();
                    // const textFile = new File([prompt], "prompt.txt", {
                    //     type: "text/plain"
                    // });

                    // console.log(prompt);
                    // setFiles([textFile]);
                    // dispatch(setField({
                    //     showTool: false
                    // }));
                }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </button>
            </div>
        </div>
    )
}