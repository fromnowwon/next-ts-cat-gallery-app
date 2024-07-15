import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchCats = async (page: number) => {
  const url = `${BASE_URL}/images/search`;
  const params = {
    page,
    limit: 10,
    api_key: API_KEY,
  };

  const response = await axios.get(url, { params });

  console.log(response.data);
  return response.data;
};
