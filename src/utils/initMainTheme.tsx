const initMainTheme = (text: string): boolean => {
  if (localStorage.getItem(text)) {
    return JSON.parse(String(localStorage.getItem(text)));
  }

  return false;
}

export default initMainTheme;
