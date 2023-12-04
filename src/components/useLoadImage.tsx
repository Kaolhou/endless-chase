import { useEffect, useState } from "react";

export default function useLoadImage(src: string) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      // console.log("loaded");
      setLoaded(true);
    };
    img.src = src;
  }, [src]);

  return loaded;
}
