import { useEffect, useState } from "react";
import axios from "axios";

const UseCustom = (endpoint) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${endpoint}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [endpoint]);

  return data; // 
};

export default UseCustom;