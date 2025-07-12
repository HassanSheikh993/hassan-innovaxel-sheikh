import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { statisticsUrl } from "../api/statistic";

export function Statistics() {
  const location = useLocation();
  const { shortCode } = location.state || {};
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
      fetchData();
  }, []);

  async function fetchData() {
    try {
        console.log(shortCode)
      const result = await statisticsUrl(shortCode);
      setData(result);
    } catch (err) {
      setError("Failed to load stats.");
      console.error(err);
    }
  }

  if (!shortCode) return <p>No short code provided.</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>URL Statistics</h2>
      <p><strong>Short Code:</strong> {data.shortCode}</p>
      <p><strong>Original URL:</strong> {data.originalURL}</p>
      <p><strong>Access Count:</strong> {data.accessCount}</p>
      <p><strong>Created At:</strong> {new Date(data.createdAt).toLocaleString()}</p>
      <p><strong>Updated At:</strong> {new Date(data.updatedAt).toLocaleString()}</p>
    </div>
  );
}
