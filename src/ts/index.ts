import { createPageFactory } from "./parser";
import { content } from "../content/en";

import "../styles/index.scss";

(async () => {
  const ids = {
    pictureId: "header-pic",
    nameId: "name",
    aboutId: "about",
    timelineId: "timeline",
    emailId: "email",
    photoViewerId: "photo-viewer",
    photoId: "photo"
  };

  await createPageFactory(ids)(content);
  document.body.style.visibility = "visible";
})();
