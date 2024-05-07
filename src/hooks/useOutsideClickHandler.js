import { useEffect, useCallback } from "react";

const useOutsideClickHandler = ({ ref, callback, opened }) => {
  const customHandleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    },
    [callback, ref]
  );

  const element = document.getElementById("app-wrapper");

  useEffect(() => {
    if (element && opened) {
      element.addEventListener("mousedown", customHandleClickOutside);
      return () => {
        element.removeEventListener("mousedown", customHandleClickOutside);
      };
    }
  }, [callback, customHandleClickOutside, element, opened, ref]);
};

export default useOutsideClickHandler;
