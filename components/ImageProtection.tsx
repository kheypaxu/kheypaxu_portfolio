"use client";

import { useEffect } from "react";

// A deterrent for casual saving; public image URLs remain accessible.
export function ImageProtection() {
  useEffect(() => {
    const isImage = (target: EventTarget | null) =>
      target instanceof Element &&
      Boolean(target.closest("img, picture, .project-image"));

    const preventImageAction = (event: Event) => {
      if (isImage(event.target)) event.preventDefault();
    };

    const preventImageCopy = (event: ClipboardEvent) => {
      if (isImage(event.target)) {
        event.preventDefault();
        return;
      }
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;
      for (let i = 0; i < selection.rangeCount; i++) {
        if (
          selection
            .getRangeAt(i)
            .cloneContents()
            .querySelector("img, picture, .project-image")
        ) {
          event.preventDefault();
          return;
        }
      }
    };

    document.addEventListener("contextmenu", preventImageAction);
    document.addEventListener("dragstart", preventImageAction);
    document.addEventListener("copy", preventImageCopy);
    return () => {
      document.removeEventListener("contextmenu", preventImageAction);
      document.removeEventListener("dragstart", preventImageAction);
      document.removeEventListener("copy", preventImageCopy);
    };
  }, []);

  return null;
}
