const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const limit = 10;

export const fetchCats = async (page: number) => {
  const url = `${BASE_URL}/images/search?page=${page}&limit=${limit}&api_key=${API_KEY}`;

  const response = await fetch(url, { next: { revalidate: 10000 } });
  const data = await response.json();

  return data;
};
