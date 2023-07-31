

export const fetchData = async (url) => {
  const token = localStorage.getItem("token");
  try {
    if(!token){throw new Error("Token Not Found")}
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch user profile");
  }
};
