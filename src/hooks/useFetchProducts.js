import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchProducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setData(response.data.products))
      .catch((err) => setError(err));
  }, []);

  return { data, error };
};
