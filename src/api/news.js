import { useQuery } from "react-query";
import axios from "axios";

const apiKey = "0221609e0f1448b4a2e28d16449a8793";

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export const allNews = () => {
  const { data, error } = useQuery(
    "allNews",
    async () => {
      try {
        const res = await axiosInstance({
          url: "/top-headlines",
          method: "GET",
          params: {
            country: "ng",
          },
        });

        return res.data.articles;
      } catch (error) {
        throw error;
      }
    },
    {
      staleTime: 120000,
    }
  );

  return { news: data, error };
};
