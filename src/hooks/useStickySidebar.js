import { useEffect } from "react";

const useOutsideClickHandler = () => {
  useEffect(() => {
    const element = document.querySelector(".profile-wrapper");
    const sticky = element.offsetTop;

    window.onscroll = () => {
      addSticky();
    };

    const addSticky = () => {
      if (window.pageYOffset >= sticky) {
        element.classList.add("sticky");
      } else {
        element.classList.remove("sticky");
      }
    };
  }, []);
};

export default useOutsideClickHandler;
