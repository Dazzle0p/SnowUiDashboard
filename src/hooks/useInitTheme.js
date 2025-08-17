import { useEffect, useState } from "react";
import APP_CONSTANTS from "../constants/index.js";

function useInitTheme() {
  const [isDark, setIsDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const stored = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_KEY);

    if (stored === APP_CONSTANTS.DARK_THEME_VALUE) {
      html.classList.add(APP_CONSTANTS.DARK_THEME_VALUE);
      setIsDark(true);
    } else {
      html.classList.remove(APP_CONSTANTS.DARK_THEME_VALUE);
      setIsDark(false);
    }

    setReady(true);

    // 👇 Listen for manual theme changes (e.g. toggleTheme)
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains(APP_CONSTANTS.DARK_THEME_VALUE));
    });

    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return { ready, isDark };
}

export default useInitTheme;
