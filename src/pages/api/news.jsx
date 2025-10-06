import axios from "axios";

export default async function handler(req, res) {
  try {
    const { category = "technology" } = req.query;

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.NEWS_API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("NewsAPI error:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
