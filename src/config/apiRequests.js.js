import axios from "axios";

const fetchData = async (url, method = "GET", data = null) => {
  try {
    const response = await axios({
      method,
      url,
      headers: {
        "Content-Type": "application/json", // assuming JSON data
      },
      data: data ? JSON.stringify(data) : null,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchData };
