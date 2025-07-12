import { useLocation } from "react-router-dom";
import { useState } from "react";
import { updateURL } from "../api/updateApi";

export function Update() {
  const location = useLocation();
  const { shortCode, originalURL } = location.state || {};
  const [url, setUrl] = useState(originalURL || "");
  const [message, setMessage] = useState("");

  function handleOnChange(e) {
    setUrl(e.target.value);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      const response = await updateURL(shortCode, url);
      if (response.status === 200) {
        setMessage("URL updated successfully!");
      } else {
        setMessage("Something went wrong.");
      }
    } catch (err) {
      setMessage("Error: " + (err.response?.data?.message || "Internal error"));
      console.error(err);
    }
  }

  if (!shortCode) {
    return <p>No URL selected for update.</p>;
  }

  return (
    <div>
      <h2>Update URL</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleOnSubmit}>
        <label>Original URL:</label>
        <input type="url" value={url} onChange={handleOnChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
