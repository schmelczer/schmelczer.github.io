export const getHeight = (e: HTMLElement): number => {
  // ignores margin collapse
  const computedStyle = getComputedStyle(e);
  return (
    e.clientHeight +
    parseInt(computedStyle.marginTop) +
    parseInt(computedStyle.marginBottom) +
    parseInt(computedStyle.borderTopWidth) +
    parseInt(computedStyle.borderBottomWidth)
  );
};
