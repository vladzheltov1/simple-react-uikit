import { useState } from "react";

/**
 * The hook that helps to control the `Alert` component 
 * @param {boolean} _open initial state for alert window 
 */
export const useAlert = (_open: boolean) => {
    const [isOpen, setIsOpen] = useState(_open);

    const open = () => {
        setIsOpen(true);
    }
    const close = () => {
        setIsOpen(false);
    }

    return {open, close, isOpen};
}