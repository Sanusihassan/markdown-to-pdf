import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

interface ToolState {
  showErrorMessage: boolean;
  errorMessage: string;
}

interface PopUpAlertProps {
  varient: "success" | "info" | "warning" | "error";
}

const MessageComponent = () => {
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );
  return <bdi>{errorMessage}</bdi>;
};
const PopUpAlert: React.FC<PopUpAlertProps> = ({ varient }) => {
  const showErrorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.showErrorMessage
  );
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );

  useEffect(() => {
    if (showErrorMessage) {
      switch (varient) {
        case "success":
          toast.success(<MessageComponent />);
          break;
        case "info":
          toast.info(<MessageComponent />);
          break;
        case "warning":
          toast.warn(<MessageComponent />);
          break;
        case "error":
          toast.error(<MessageComponent />);
          break;
        default:
          toast(<MessageComponent />);
      }
    }
  }, [showErrorMessage, errorMessage, varient]);

  return null;
};

export default PopUpAlert;
