export const scrollToFragment = () => {
  // it might be necessary when the page takes too long to load
  if (location.hash) {
    document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }
};
