export const addSupportForTabNavigation = () =>
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      (document.activeElement as HTMLElement)?.click();
      e.preventDefault();
    }
  });
