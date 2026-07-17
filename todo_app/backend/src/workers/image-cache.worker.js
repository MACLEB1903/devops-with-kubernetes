import { stat, writeFile } from "fs/promises";
import path from "path";

const FILES_DIR = process.env.FILES_DIR;
const IMAGE_NAME = process.env.IMAGE_NAME;
const PICSUM_URL = process.env.PICSUM_URL;

const filePath = path.join(FILES_DIR, IMAGE_NAME);
const CACHE_TIME = 1000 * 60 * 10;

const fetchImage = async () => {
  try {
    const response = await fetch(PICSUM_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(filePath, buffer);
  } catch (error) {
    console.error(error);
  }
};

const imageNeedsRefresh = async () => {
  try {
    const fileInfo = await stat(filePath);

    return Date.now() - fileInfo.mtimeMs >= CACHE_TIME;
  } catch {
    return true;
  }
};

const updateImage = async () => {
  if (await imageNeedsRefresh()) {
    await fetchImage();
  } else {
    console.log("Using cached image");
  }
};

await updateImage();
setInterval(updateImage, CACHE_TIME);
