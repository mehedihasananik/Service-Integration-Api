// data fetch function for all
const fetchData = async (url, method = "GET", data = null) => {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json", // assuming JSON data
      },
      body: data ? JSON.stringify(data) : null,
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchData };
