import { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = "DJdol9ujbegVBbPO566j8KOZrtAUWlUx";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    // Random GIF V1
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return { gif, fetchGif };
};

export default useGif;
