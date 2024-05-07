import { useEffect, useCallback } from "react";

const useNoScroll = () => {
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-wrapper");
  const openModalButton = document.querySelectorAll(".open-modal");
  const closeModalButton = document.querySelector(".modal-close");

  const existVerticalScroll = useCallback(() => {
    return document.body.offsetHeight > window.innerHeight;
  });

  const getBodyScrollTop = useCallback(() => {
    return (
      window.self.pageYOffset ||
      (document.documentElement && document.documentElement.ScrollTop) ||
      (document.body && document.body.scrollTop)
    );
  });

  if (openModalButton) {
    openModalButton.forEach((modalButton) => {
      modalButton.addEventListener("click", (e) => {
        e.preventDefault();

        body.dataset.scrollY = `${getBodyScrollTop()}`;

        if (existVerticalScroll()) {
          body.classList.add("body-lock");
          body.style.top = `-${body.dataset.scrollY}px`;
        }
      });
    });
  }

  if (closeModalButton) {
    closeModalButton.addEventListener("click", (e) => {
      e.preventDefault();

      if (existVerticalScroll()) {
        body.classList.remove("body-lock");
        window.scrollTo(0, +body.dataset.scrollY);
      }
    });
  }
};

export default useNoScroll;
