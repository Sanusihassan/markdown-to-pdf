// import type { errors } from "../src/content";
// import { setField, type ToolState } from "../src/store";
// // import { trackSubscriptionUsage } from "../src/trackSubscriptionUsage";
// import {
//   getUserSubscription,
//   SubscriptionPlan,
// } from "fetch-subscription-status";
// import { useState, useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import io from "socket.io-client";

// export const ChatTextArea = ({
//   placeholder,
//   errors,
// }: {
//   placeholder: string;
//   errors: errors;
// }) => {
//   const showTextArea = useSelector(
//     (state: { tool: ToolState }) => state.tool.showTextArea
//   );
//   const markdown = useSelector(
//     (state: { tool: ToolState }) => state.tool.markdown
//   );
//   const dispatch = useDispatch();
//   const [prompt, setPrompt] = useState<string>("");
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [messages, setMessages] = useState<
//     Array<{ type: string; content: string }>
//   >([]);
//   const socketRef = useRef<any>(null);
//   const [isConnected, setIsConnected] = useState<boolean>(false);

//   // Setup Socket.IO connection
//   useEffect(() => {
//     const socketUrl =
//       process.env.NODE_ENV === "development"
//         ? "https://www.pdfequips.com"
//         : `https://${window.location.host}`;

//     socketRef.current = io(socketUrl, {
//       path: "/api/conversation",
//     });

//     // Handle connection
//     socketRef.current.on("connect", () => {
//       setIsConnected(true);
//       console.log("Socket.IO connection established");
//     });

//     // Handle disconnection
//     socketRef.current.on("disconnect", () => {
//       setIsConnected(false);
//       console.log("Socket.IO connection closed");
//     });

//     // Handle incoming messages
//     socketRef.current.on("connected", (data: string) => {
//       console.log("Connected to server:", data);
//     });

//     socketRef.current.on("status", (data: string) => {
//       if (data === "processing") {
//         setIsLoading(true);
//       }
//     });

//     socketRef.current.on("response", (data: string) => {
//       setIsLoading(false);
//       setMessages((prev) => [...prev, { type: "assistant", content: data }]);
//       if (
//         markdown.startsWith("# Convert your Markdown to PDF with PDFEquips")
//       ) {
//         dispatch(setField({ markdown: data }));
//       } else {
//         dispatch(setField({ markdown: `${markdown}\n---\n${data}\n` }));
//       }
//     });

//     socketRef.current.on("error", (data: string) => {
//       setIsLoading(false);
//       console.error("Error from server:", data);
//     });

//     // Clean up on unmount
//     return () => {
//       if (socketRef.current) {
//         socketRef.current.disconnect();
//       }
//     };
//   }, [dispatch, markdown]);

//   const handleSubmit = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!prompt.trim() || !isConnected || isLoading) return;

//     try {
//       // Get subscription status
//       const { isActive: status, subscription } = await getUserSubscription();

//       // Store subscription data in state

//       // Redirect to pricing if no active subscription
//       if (!status) {
//         window.open("/pricing", "_blank");
//         return;
//       }

//       // Check if trial plan and apply limits
//       if (subscription?.plan === SubscriptionPlan.TRIAL) {
//         // Track usage to see if trial limit is reached
//         const allowUsage = trackSubscriptionUsage(subscription?.plan);

//         if (!allowUsage) {
//           // Show error message if usage limit is reached
//           dispatch(
//             setField({
//               errorMessage: errors.ERR_MAX_USAGE.message,
//             })
//           );
//           return;
//         }
//       }

//       // Proceed with sending the message if checks pass
//       setMessages((prev) => [...prev, { type: "user", content: prompt }]);
//       setIsLoading(true); // Set loading state immediately when submitting

//       if (socketRef.current && socketRef.current.connected) {
//         socketRef.current.emit("prompt", prompt);
//         setPrompt("");
//       } else {
//         console.error("Socket.IO not connected");
//         setIsLoading(false); // Reset loading if socket not connected
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setIsLoading(false); // Reset loading on error
//     }
//   };

//   // Determine placeholder text based on connection and loading states
//   const getPlaceholder = () => {
//     if (!isConnected) return "...";
//     if (isLoading) return "...";
//     return placeholder;
//   };

//   return (
//     <div
//       className={`chat-text-area${showTextArea ? "" : " hide"}`}
//       onClick={(e) => {
//         if (!isLoading) {
//           dispatch(setField({ showTextArea: false }));
//         }
//       }}
//     >
//       <div className="chatbox-wrapper">
//         <textarea
//           placeholder={getPlaceholder()}
//           className={`styled-textarea ${isLoading ? "disabled" : ""}`}
//           value={prompt}
//           disabled={!isConnected || isLoading} // Disable when loading or not connected
//           onClick={(e) => e.stopPropagation()}
//           onBlur={() => {
//             if (!isLoading) {
//               dispatch(setField({ showTextArea: false }));
//             }
//           }}
//           onChange={(e) => setPrompt(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter" && !e.shiftKey && !isLoading && isConnected) {
//               e.preventDefault();
//               handleSubmit(e as unknown as React.MouseEvent);
//             }
//           }}
//         ></textarea>
//         <button
//           className={`up-arrow-button ${isLoading ? "loading" : ""}`}
//           aria-label={isLoading ? "processing" : "submit"}
//           disabled={isLoading || !isConnected || !prompt.trim()}
//           onClick={handleSubmit}
//         >
//           {isLoading ? (
//             <svg className="spinner" width="16" height="16" viewBox="0 0 24 24">
//               <circle
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 fill="none"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 strokeDasharray="32"
//                 strokeDashoffset="32"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="m18 15-6-6-6 6" />
//             </svg>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };
