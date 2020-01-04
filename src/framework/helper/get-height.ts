export const getHeight = (e: HTMLElement): number => {
  const computedStyle = window.getComputedStyle(e);
  return (
    // ignores margin collapse
    e.clientHeight +
    parseInt(computedStyle.marginTop) +
    parseInt(computedStyle.marginBottom) +
    parseInt(computedStyle.borderTopWidth) +
    parseInt(computedStyle.borderBottomWidth)
  );
};
