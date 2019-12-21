/*import { parseContent } from "../page/content/content";




  const hideFrame = () => {
    getElement(photoViewerId).style["z-index"] = -1;
    getElement(photoViewerId).style.opacity = "0";
  };

  const showPhoto = src => {
    getElement(photoId).src = src;
    getElement(photoViewerId).style["z-index"] = 1000;
    getElement(photoViewerId).style.opacity = "1";
  };

  const setupGlobals = config => {
    (window as any).toggleLongDescription = toggleLongDescriptionFactory(
      config
    );
    (window as any).showPhoto = showPhoto;

    (window as any).hideFrame = hideFrame;
    getElement(photoViewerId).addEventListener("click", hideFrame);

    window.addEventListener("resize", onResize);
    document.body.addEventListener("keydown", handleEscape);
  };

  const onResize = () => {
    const elements = document.getElementsByClassName("collapsed");
    Array.prototype.forEach.call(elements, element => {
      if (isOpen(element)) {
        element.style.height = "auto";
        setTimeout(() => open(element), 100);
      }
    });
  };

  const handleEscape = event => {
    if (event.key === "Escape") {
      hideFrame();
    }
  };
};
*/
