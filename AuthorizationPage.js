

const clientId = "10a6a679992847328290f17973ad3115";
export const auth = async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  if (!code) {
    redirectToAuthCodeFlow(clientId);
  
  } else {
    const accessToken = await getAccessToken(clientId, code);
    
  
    const profile = await fetchProfile(accessToken);
    localStorage.setItem("token",accessToken);
    return(profile);
  }
};

export async function fetchProfile(token) {
  const result = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}

export async function redirectToAuthCodeFlow(clientId) {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem('verifier', verifier);

  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('response_type', 'code');
  params.append('redirect_uri', 'http://localhost:5173/login');
  params.append('scope', 'user-read-private user-read-email user-modify-playback-state user-read-currently-playing');
  params.append('code_challenge_method', 'S256');
  params.append('code_challenge', challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

export function generateCodeVerifier(length) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export async function getAccessToken(clientId, code) {
  const verifier = localStorage.getItem('verifier');

  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', 'http://localhost:5173/login'); // Replace with your actual redirect URI
  params.append('code_verifier', verifier);

  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });
  const response = await result.json();
  localStorage.setItem("refresh_token",response.refresh_token);
  localStorage.setItem("token",response.access_token);

  return response.access_token;

}
  export async function getAccessTokenFromRefreshToken(refresh_token) {
  
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', refresh_token);

   
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

  const response = await result.json();
  localStorage.setItem("refresh_token",response.refresh_token);
  localStorage.setItem("token",response.access_token);

  return response.access_token;
}

export async function generateCodeChallenge(codeVerifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  const base64Challenge = btoa(String.fromCharCode(...new Uint8Array(digest)));

  return base64Challenge
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

const AuthorizationPage = () => {
 
    auth();
}

export default AuthorizationPage;
