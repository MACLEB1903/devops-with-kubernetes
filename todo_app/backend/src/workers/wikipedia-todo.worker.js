const WIKIPEDIA_URL = process.env.WIKIPEDIA_URL;
const TODOS_FETCH_URL = process.env.TODOS_FETCH_URL;

const generateTodo = async () => {
  try {
    const response = await fetch(WIKIPEDIA_URL);

    const url = response.url;
    const title = url
      .slice(url.indexOf("wiki/") + "wiki/".length)
      .replaceAll("_", " ");
    return `Read ${title}: ${url}`;
  } catch (error) {
    console.error("Error fetching wikipedia: ", error);
  }
};

(async () => {
  try {
    const title = await generateTodo();

    const response = await fetch(TODOS_FETCH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to add todo.");
    }
  } catch (error) {
    console.error("POST request error: ", error);
    process.exit(1);
  }
})();
