// utils/parseApiError.ts
// Error parser for markdown-to-pdf application

import type { errors as ErrorsType } from "./content";

interface BackendError {
    errcode?: string;
    error?: string;
    limitationMsg?: string; // NEW: User-friendly error messages from markdown routes
}

/**
 * Parse error response from API (handles arraybuffer responses)
 * 
 * Priority:
 * 1. limitationMsg (user-friendly error from new markdown routes)
 * 2. errcode (legacy validation errors)
 * 3. error string (generic errors)
 * 4. Unknown error fallback
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
            // PRIORITY 1: limitationMsg from new markdown routes (already user-friendly)
            if (data.limitationMsg && typeof data.limitationMsg === 'string') {
                return data.limitationMsg;
            }

            // PRIORITY 2: errcode from validation errors (legacy)
            if (data.errcode && data.errcode !== "SUCCESS") {
                return getErrorMessage(data.errcode, errors);
            }

            // PRIORITY 3: generic error string
            if (data.error && typeof data.error === 'string') {
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

        // Handle JSON string
        if (typeof data === "string") {
            return JSON.parse(data);
        }
    } catch (parseError) {
        // If JSON parse fails, return null
        console.warn('Failed to parse error response:', parseError);
        return null;
    }

    return null;
};

/**
 * Map errcode to frontend error message
 * These are legacy error codes from file validation
 */
const getErrorMessage = (errcode: string, errors: ErrorsType): string => {
    const errorMap: Record<string, string> = {
        // File validation errors (relevant to markdown-to-pdf)
        EMPTY_FILE: errors.EMPTY_FILE?.message || "The file is empty",
        FILE_TOO_LARGE: errors.FILE_TOO_LARGE?.message || "File is too large",
        SINGLE_FILE_SIZE_EXCEEDED: errors.alerts?.singleFileSize || "File size limit exceeded",
        NOT_SUPPORTED_TYPE: errors.NOT_SUPPORTED_TYPE?.message || "File type not supported",
        FILE_CORRUPT: errors.FILE_CORRUPT?.message || "File is corrupted",
        MAX_FILES_EXCEEDED: errors.MAX_FILES_EXCEEDED?.message || "Too many files selected",
        NO_FILES_SELECTED: errors.NO_FILES_SELECTED?.message || "No files selected",
        MAX_DAILY_USAGE: errors.MAX_DAILY_USAGE?.message || "Daily usage limit exceeded",
    };

    return errorMap[errcode] || errors.UNKNOWN_ERROR?.message || "An unknown error occurred";
};

/**
 * Map error strings from exceptions
 * Tries to match error strings to known error types
 */
const mapErrorString = (errorStr: string, errors: ErrorsType): string => {
    const lowerError = errorStr.toLowerCase();

    // Check for known error patterns
    if (lowerError.includes("corrupt")) {
        return errors.FILE_CORRUPT?.message || "File is corrupted";
    }

    if (lowerError.includes("timeout")) {
        return "Request timeout - please try again";
    }

    if (lowerError.includes("network")) {
        return errors.ERR_NETWORK?.message || "Network error - check your connection";
    }

    if (lowerError.includes("unauthorized") || lowerError.includes("authentication")) {
        return "Authentication required - please log in";
    }

    if (lowerError.includes("rate limit")) {
        return "Too many requests - please wait before trying again";
    }

    // For unknown errors, return the error string itself (useful for debugging)
    // Or fallback to unknown error message
    if (errorStr.length < 100) {
        // Short errors might be useful to show
        return errorStr;
    }

    return errors.UNKNOWN_ERROR?.message || "An error occurred - please try again";
};

/**
 * Type guard for axios errors
 */
const isAxiosError = (error: unknown): error is {
    code?: string;
    response?: { data?: unknown; status?: number };
} => {
    if (!error || typeof error !== "object") {
        return false;
    }

    return "response" in error || "code" in error;
};