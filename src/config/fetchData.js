import { apiEndpoint } from "./config";

export async function fetchData(url, options = {}) {
  const defaultOptions = {
    next: { revalidate: 120 },
    ...options,
  };

  const res = await fetch(
    url.startsWith("http") ? url : `${apiEndpoint}${url}`,
    defaultOptions
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return res.json();
}

export async function fetchMultipleData(urls) {
  return Promise.all(urls.map((url) => fetchData(url)));
}
