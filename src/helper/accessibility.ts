let isSpaceClickActive = false;

export const addSupportForTabNavigation = () =>
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      isSpaceClickActive = true;
      (document.activeElement as HTMLElement)?.click();
      e.preventDefault();
    }
  });

export const removeUnnecessaryOutlines = () =>
  document.addEventListener('click', () => {
    if (!isSpaceClickActive) {
      (document.activeElement as HTMLElement).blur?.();
    }
    isSpaceClickActive = false;
  });
