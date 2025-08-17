import { useState } from "react";
import useFetchData from "./useFetchData.js";

const initialValue = [];

function useUserSearch() {
  const { data } = useFetchData();
  const [filteredList, setFilteredList] = useState(initialValue);

  const search = (query) => {
    if (!query.trim()) {
      setFilteredList(initialValue);
      return;
    }

    const filteredData =
      data?.filter((item) =>
        item.clientName?.toLowerCase().includes(query.toLowerCase())
      ) ?? [];

    setFilteredList(filteredData);
  };

  return { filteredList, search };
}

export default useUserSearch; 