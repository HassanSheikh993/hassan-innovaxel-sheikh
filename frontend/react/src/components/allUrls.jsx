import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { displayAllUrl } from "../api/extraAPIs/displayAll";
import { deleteUrl } from "../api/deleteApi";

export function AllUrls() {
  const [urls, setUrls] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await displayAllUrl();
    setUrls(data);
  }

  async function handleDelete(shortCode) {
    try {
      const res = await deleteUrl(shortCode);
      if (res.status === 204) {
        setMessage(`Short code "${shortCode}" deleted successfully.`);
        getData(); 
      }
    } catch (err) {
      setMessage("Error deleting short code.");
      console.error(err);
    }
  }

  function handleUpdate(shortCode, originalURL) {
    navigate("/update", {
      state: { shortCode, originalURL },
    });
  }

  function handleStats(shortCode) {
  navigate("/stats", {
    state: { shortCode }
  });
}


  return (
    <div>
      <h2>All Short Codes</h2>
      {message && <p>{message}</p>}

      {urls.length === 0 ? (
        <p>No data found</p>
      ) : (
        <div>
          {urls.map((item) => (
            <div
              key={item._id}
              style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}
            >
              <p><strong>Short Code:</strong> {item.shortCode}</p>
              <button onClick={() => handleUpdate(item.shortCode, item.originalURL)}>Update</button>
              <button onClick={() => handleDelete(item.shortCode)}>Delete</button>
            <button onClick={() => handleStats(item.shortCode)}>Stats</button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
