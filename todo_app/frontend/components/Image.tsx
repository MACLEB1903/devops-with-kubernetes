import { useEffect, useState } from "react";

// @ts-ignore
const VITE_FETCH_URL = import.meta.env.VITE_FETCH_URL;

export default function ImageWrapper() {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    let objectUrl = "";

    async function fetchImage() {
      try {
        const response = await fetch(VITE_FETCH_URL);
        const blob = await response.blob();

        objectUrl = URL.createObjectURL(blob);
        setImageUrl(objectUrl);
      } catch (error) {
        console.error(error);
      }
    }

    fetchImage();
    const fetchImageInt = setInterval(
      () => {
        fetchImage();
      },
      1000 * 60 * 10,
    );

    return () => clearInterval(fetchImageInt);
  }, []);

  return (
    <section className="w-full h-screen absolute z-99 blur-xs pointer-events-none">
      {imageUrl && (
        <img
          className="h-full w-full object-cover"
          src={imageUrl}
          alt="Random"
        />
      )}
    </section>
  );
}
