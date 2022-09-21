export const removeUnnecessaryOutlines = () =>
  document.addEventListener('click', () =>
    (document.activeElement as HTMLElement).blur?.()
  );
