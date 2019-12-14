(async () => {
  const src = 'content-en.json';
  const ids = {
      pictureId: 'header-pic',
      nameId: 'name',
      aboutId: 'about',
      timelineId: 'timeline',
      emailId: 'email',
      photoViewerId: 'photo-viewer',
      photoId: 'photo'
  };

  await createPageFactory(ids)(src);
  document.body.style.visibility = 'visible';
})();
