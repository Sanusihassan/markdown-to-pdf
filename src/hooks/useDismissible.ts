import { useEffect, type RefObject } from "react";

interface UseDismissibleOptions {
    enabled: boolean;
    onClose: () => void;
    ref: RefObject<HTMLElement>;
}

export function useDismissible({
    enabled,
    onClose,
    ref,
}: UseDismissibleOptions) {
    useEffect(() => {
        if (!enabled) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        const onMouseDown = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("mousedown", onMouseDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("mousedown", onMouseDown);
        };
    }, [enabled, onClose, ref]);
}
