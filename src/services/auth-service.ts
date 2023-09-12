import apiClient from "./api-client";

const tokenKey = "token";

export function login(username: string, password: string) {
  return apiClient.post("/login", { email: username, password });
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function setToken(token: string) {
  localStorage.setItem(tokenKey, token);
}

function getToken() {
  return localStorage.getItem(tokenKey);
}
