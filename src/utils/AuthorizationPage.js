const clientId = "7ddce02f79ce4303b2fe69ed2e96324c";

import { LogOut, UserProfile, refreshAccessTokenAsync } from "../slices/authSlice";
import store from "../store/configureStore"
export const auth = async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (!code) {
    redirectToAuthCodeFlow(clientId);
  } else {
    const accessToken = await getAccessToken(clientId, code);

    const profile = await fetchProfile(accessToken);
    if (accessToken) {
      localStorage.setItem("token", accessToken);
    }
    return profile;
  }
};

export async function fetchProfile(token) {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}

export async function redirectToAuthCodeFlow() {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);
  document.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin&scope=user-read-private+user-read-email+user-modify-playback-state+user-read-currently-playing&code_challenge_method=S256&code_challenge=${challenge}`;
}

export function generateCodeVerifier(length) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  localStorage.setItem("verifier", text);
  return text;
}

export async function getAccessToken(clientId, code) {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:5173/login");
  params.append("code_verifier", verifier);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  const response = await result.json();
  if (response.access_token) {
    localStorage.setItem("refresh_token", response.refresh_token);
    localStorage.setItem("token", response.access_token);
    const expirationTime = Date.now() + response.expires_in * 1000;
    localStorage.setItem("tokenExpirationTime", expirationTime);
  }
  return response.access_token;
}
export async function getAccessTokenFromRefreshToken() {
  const refresh_token = localStorage.getItem("refresh_token");
  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refresh_token);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const response = await result.json();

  if (response.token) {
    localStorage.setItem("token", response.token);
    localStorage.setItem("refresh_token", response.refresh_token);
    
      const expirationTime = Date.now() + response.expires_in * 1000;
      localStorage.setItem("tokenExpirationTime", expirationTime);
    
  }
  console.log(response);

  return response;
}
export const sessionHandler = () => {

  const token = localStorage.getItem("token");
  const tokenExpirationTime = localStorage.getItem("tokenExpirationTime");

  if (!token) {
    store.dispatch(LogOut());
  }
  if (token && tokenExpirationTime) {
    const expirationTime = parseInt(tokenExpirationTime, 10);
    if (Date.now() >= expirationTime) {
      store.dispatch(refreshAccessTokenAsync());
      store.dispatch(UserProfile())
      console.log("Timeout");
    } 
    else {
      console.log("Timehai");
       store.dispatch(UserProfile());
    }
}

}
export async function generateCodeChallenge(codeVerifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  const base64Challenge = btoa(String.fromCharCode(...new Uint8Array(digest)));

  return base64Challenge
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

const AuthorizationPage = () => {
  auth();
};

export default AuthorizationPage;

