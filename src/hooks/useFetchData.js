import { useEffect, useState } from "react";
import { API_URL } from "./../constants/index.js";

// Toggle this flag
const USE_API = false;

function useFetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(USE_API); // only true if fetching API
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!USE_API) {
      // Mock / sample data
      const mockData = [
        { id: 1, clientName: "John Doe" },
        { id: 2, clientName: "Jane Smith" },
      ];
      setData(mockData);
      return;
    }

    // API mode
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        const filteredData =
          json.sessions?.filter((item) => item.clientName && item) || [];

        setData(filteredData);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetchData;
