// utils/parseApiError.ts
import type { errors as ErrorsType } from "./content";

interface BackendError {
    errcode?: string;
    error?: string;
}

/**
 * Parse error response from API (handles arraybuffer responses)
 */
export const parseApiError = (
    error: unknown,
    errors: ErrorsType
): string => {
    // Handle axios errors
    if (isAxiosError(error)) {
        // Network error
        if (error.code === "ERR_NETWORK") {
            return errors.ERR_NETWORK.message;
        }

        // Parse response data (arraybuffer or json)
        const data = parseResponseData(error.response?.data);

        if (data) {
            // Handle errcode from validation errors
            if (data.errcode && data.errcode !== "SUCCESS") {
                return getErrorMessage(data.errcode, errors);
            }
            // Handle generic error string from exceptions
            if (data.error) {
                return mapErrorString(data.error, errors);
            }
        }
    }

    return errors.UNKNOWN_ERROR.message;
};

/**
 * Parse arraybuffer or JSON response data
 */
const parseResponseData = (data: unknown): BackendError | null => {
    if (!data) return null;

    try {
        // Handle arraybuffer (from responseType: "arraybuffer")
        if (data instanceof ArrayBuffer) {
            const text = new TextDecoder().decode(data);
            return JSON.parse(text);
        }
        // Handle regular JSON
        if (typeof data === "object") {
            return data as BackendError;
        }
        if (typeof data === "string") {
            return JSON.parse(data);
        }
    } catch {
        return null;
    }
    return null;
};

/**
 * Map errcode to frontend error message
 */
const getErrorMessage = (errcode: string, errors: ErrorsType): string => {
    const errorMap: Record<string, string> = {
        EMPTY_FILE: errors.EMPTY_FILE.message,
        FILE_TOO_LARGE: errors.FILE_TOO_LARGE.message,
        SINGLE_FILE_SIZE_EXCEEDED: errors.alerts.singleFileSize,
        NOT_SUPPORTED_TYPE: errors.NOT_SUPPORTED_TYPE.message,
        FILE_CORRUPT: errors.FILE_CORRUPT.message,
        MAX_FILES_EXCEEDED: errors.MAX_FILES_EXCEEDED.message,
        NO_FILES_SELECTED: errors.NO_FILES_SELECTED.message,
        PASSWORD_REQUIRED: errors.PASSWORD_REQUIRED.message,
        INCORRECT_PASSWORD: errors.INCORRECT_PASSWORD.message,
        MAX_DAILY_USAGE: errors.MAX_DAILY_USAGE.message,
        MISSING_FONTS: errors.MISSING_FONTS.message,
        INVALID_IMAGE_DATA: errors.INVALID_IMAGE_DATA.message,
        SECURITY_RISK: errors.SECURITY_RISK.message,
    };

    return errorMap[errcode] || errors.UNKNOWN_ERROR.message;
};

/**
 * Map error strings from exceptions (e.g., "Incorrect PDF password provided.")
 */
const mapErrorString = (errorStr: string, errors: ErrorsType): string => {
    const lowerError = errorStr.toLowerCase();

    if (lowerError.includes("incorrect") && lowerError.includes("password")) {
        return errors.INCORRECT_PASSWORD.message;
    }
    if (lowerError.includes("password")) {
        return errors.PASSWORD_REQUIRED.message;
    }
    if (lowerError.includes("corrupt")) {
        return errors.FILE_CORRUPT.message;
    }

    // Return the raw error for debugging, or fallback to unknown
    return errors.UNKNOWN_ERROR.message;
};

/**
 * Type guard for axios errors
 */
const isAxiosError = (error: unknown): error is {
    code?: string;
    response?: { data?: unknown; status?: number };
} => {
    return typeof error === "object" && error !== null && "response" in error || "code" in (error as object);
};