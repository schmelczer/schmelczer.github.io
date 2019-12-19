export const createPageFactory = ({
  nameId,
  pictureId,
  aboutId,
  timelineId,
  emailId,
  photoId,
  photoViewerId
}) => {
  const createPage = content => {
    const { config, header, timeline, footer } = content;
    processHeader(header);
    processTimeline(timeline, config);
    processFooter(footer);
    setupGlobals(config);
  };

  const processHeader = ({ name, picture, about }) => {
    document.title = name;
    getElement(nameId).textContent = name;
    getElement(pictureId).src = picture;
    getElement(pictureId).onclick = () => showPhoto(picture);
    getElement(aboutId).innerHTML = listToHtml(about);
  };

  const listToHtml = list =>
    list
      .map(element => {
        if (!element.type || element.type === "p") {
          return `<p>${element}</p>`;
        } else if (element.type === "a") {
          return `<a href="${element.href}" target="_blank"> ${element.text} </a>`;
        } else if (element.type === "video") {
          return `<video controls><source src="${element.src}" /></video>`;
        } else return "";
      })
      .join("\n");

  const processTimeline = (timeline, { showMore }) => {
    getElement(timelineId).innerHTML = timeline
      .map(element => timelineElementToHTML(element, createId(), showMore))
      .join("\n");
  };

  const timelineElementToHTML = (
    { date, title, picture, description, more, link },
    id,
    showMore
  ) => `
    <section>
      <div class="line">
        ${date ? `<p class="date-wide-screen">${date}</p>` : ""}
      </div>
      <div class="card">
        <h2>${title}</h2>
        ${date ? `<p class="date-narrow-screen">${date}</p>` : ""}
        ${
          picture
            ? `<img src="${picture}" onclick="showPhoto('${picture}');"  alt="${picture}"/>`
            : ""
        }
        ${description ? `<p class="description">${description}</p>` : ""}
        ${
          more
            ? `
          <div class="collapsed" id="${idToActivityId(id)}">
            ${listToHtml(more)}
          </div>
          <a id="${idToButtonId(id)}" onclick="toggleLongDescription(${id})">
           ${showMore}
          </a>
        `
            : link
            ? `<a href="http://${link}" target="_blank">${link}</a>`
            : ""
        }
      </div>
    </section>
  `;

  const processFooter = ({ email }) => {
    getElement(emailId).href = `mailto:${email}`;
    getElement(emailId).textContent = email;
  };

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
    (window as any).toggleLongDescription = toggleLongDescriptionFactory(config);
    (window as any).showPhoto = showPhoto;

    (window as any).hideFrame = hideFrame;
    getElement(photoViewerId).addEventListener("click", hideFrame);

    window.addEventListener("resize", onResize);
    document.body.addEventListener("keydown", handleEscape);
  };

  const toggleLongDescriptionFactory = ({ showMore, showLess }) => id => {
    const button = getElement(idToButtonId(id));
    const element = getElement(idToActivityId(id));

    if (isClosed(element)) {
      open(element);
      button.textContent = showLess;
    } else {
      close(element);
      button.textContent = showMore;
    }
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

  const isClosed = element =>
    ["0px", "0", 0, ""].includes(element.style.height);

  const isOpen = element => !isClosed(element);

  const close = element => (element.style.height = "0");

  const open = element => (element.style.height = `${element.scrollHeight}px`);

  const handleEscape = event => {
    if (event.key === "Escape") {
      hideFrame();
    }
  };

  const getElementFactory = () => {
    const foundElements = {};
    return id => {
      if (!(id in foundElements)) {
        foundElements[id] = document.getElementById(id);
      }
      return foundElements[id];
    };
  };
  const getElement = getElementFactory();

  const createIdFactory = () => {
    let id = 0;
    return () => id++;
  };
  const createId = createIdFactory();

  const idToButtonId = id => `button_${id}`;

  const idToActivityId = id => `activity_${id}`;

  return createPage;
};
