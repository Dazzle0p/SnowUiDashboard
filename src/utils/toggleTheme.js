import APP_CONSTANTS from "../constants/index.js";

const toggleTheme = () => {
  const html = document.documentElement;
  const isDark = html.classList.contains(APP_CONSTANTS.DARK_THEME_VALUE);

  if (isDark) {
    html.classList.remove(APP_CONSTANTS.DARK_THEME_VALUE);
    localStorage.setItem(APP_CONSTANTS.LOCAL_STORAGE_KEY, "light"); // save "light"
  } else {
    html.classList.add(APP_CONSTANTS.DARK_THEME_VALUE);
    localStorage.setItem(
      APP_CONSTANTS.LOCAL_STORAGE_KEY,
      APP_CONSTANTS.DARK_THEME_VALUE
    );
  }
};

export default toggleTheme;
