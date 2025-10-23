import axios from "axios";

// 1️⃣ Створюємо інтерфейс для типу поста
interface Post {
  id: number;
  title: string;
  body: string;
}

// 2️⃣ Типізуємо запит axios і результат функції
async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}

// 3️⃣ Використовуємо типізовані дані
fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
