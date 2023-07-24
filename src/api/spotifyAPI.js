const token = localStorage.getItem("token");

export const fetchData = async (url) => {
  try {
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
