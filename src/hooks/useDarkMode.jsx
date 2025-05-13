import { useEffect, useState } from "react";

export function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
      const theme = localStorage.getItem('theme');
      if (theme) return theme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
      const html = document.documentElement;

      if (isDark){
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      else{
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }

      const themeMeta = document.querySelector('meta[name="theme-color"]');
      if (themeMeta) {
        themeMeta.setAttribute('content', isDark ? '#0F172A' : '#F9FAFB');
      }

    }, [isDark]);

  return [isDark, setIsDark];
}

export default useDarkMode;
