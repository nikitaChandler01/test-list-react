import { useEffect, useState } from "react";
import axios from "axios";

export const useHttp = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    try {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((e) => {
          setError(e);
        })
        .finally(() => setLoading(false));
    } catch (e) {
      console.log("Сообщение об ошибке: " + e);
    }
  }, [url]);

  return {
    data, loading, error
  }
};
