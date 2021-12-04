/**
 * This is needed because NextJS is weird and needs you to check
 * if window exists before accessing localStorage
 */

export const getItem = key => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
  return null;
};

export const setItem = (key, value) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, value);
  }
};

export const removeItem = key => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  }
};

export const clear = () => {
  if (typeof window !== "undefined") {
    window.localStorage.clear();
  }
};
