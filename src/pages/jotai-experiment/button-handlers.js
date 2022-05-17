export const incrementHandler = (setCount) => setCount((prev) => prev + 1);

export const decrementHandler = (setCount) => setCount((prev) => prev - 1);

export const toggleThemeHandler = (setIsLighTheme) =>
  setIsLighTheme((prev) => {
    return { ...prev, isLight: !prev.isLight };
  });