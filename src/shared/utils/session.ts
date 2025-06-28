export const fetchSessionData = <T = unknown>(key: string): T | null => {
  const stored = sessionStorage.getItem(key);
  if (stored) {
    const parsed = JSON.parse(stored);
    return parsed;
  }
  return null;
};

export const setSessionData = <T = unknown>(key: string, data: T) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const removeSessionData = (key: string) => {
  sessionStorage.removeItem(key);
};
