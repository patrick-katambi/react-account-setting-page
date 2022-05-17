import { atom } from "jotai";

export const countAtom = atom(0);
export const currentThemeAtom = atom({ isLight: false });

export const doubleCountAtom = atom((get) => get(countAtom) * 2);

export const themeManagerAtom = atom((get) => {
  let isLight = get(currentThemeAtom).isLight;
  return {
    // buttonBackground: isLight ? "tomato" : "#171717",
    buttonBackground: "#171717",
    buttonTextColor: "#5DE4C7",
    textColor: isLight ? "#171717" : "#5DE4C7",
    backgroundColor: isLight ? "#fff" : "#0C0C0C",
    backgroundColorAccent: isLight ? "whitesmoke" : "#13161C",
  };
});
