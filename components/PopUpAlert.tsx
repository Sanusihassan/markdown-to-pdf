import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
/**
 * in this code i want to return the toast content inside a <bdi> element because the error message may contain forign text
 */
interface ToolState {
  showErrorMessage: boolean;
  errorMessage: string;
}

interface PopUpAlertProps {
  varient: "success" | "info" | "warning" | "error";
}

const PopUpAlert: React.FC<PopUpAlertProps> = ({ varient }) => {
  const showErrorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.showErrorMessage
  );

  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );

  useEffect(() => {
    if (showErrorMessage) {
      const MessageComponent = () => <bdi>{errorMessage}</bdi>;

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
