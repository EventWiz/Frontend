import { isTokenExpired } from './checkToken';

export const setToken = payload => {
  try {
    const token = JSON.stringify(payload);
    localStorage.setItem('eventwiz-token', token);
  } catch {
    return undefined;
  }
};

export const getToken = () => {
  try {
    const token = localStorage.getItem('eventwiz-token');
    if (token === null) {
      return undefined;
    } else {
      const isExpired = isTokenExpired(token); // Check if token is expired
      if (isExpired) {
        clearLocalStorage();
        return undefined;
      }
    }
    return JSON.parse(token);
  } catch {
    return undefined;
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem('eventwiz-token');
  window.location.href = '/';
};
