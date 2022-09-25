export const getHeight = (e: HTMLElement): number => {
  // ignores margin collapse
  const computedStyle = getComputedStyle(e);

  return (
    e.clientHeight +
    parseFloat(computedStyle.marginTop) +
    parseFloat(computedStyle.marginBottom) +
    parseFloat(computedStyle.borderTopWidth) +
    parseFloat(computedStyle.borderBottomWidth)
  );
};
