// Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

const url1 = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/albums";
const url3 = "https://jsonplaceholder.typicode.com/photos";

async function fetchMultipleApiInParallel() {
  const promise1 = fetch(url1).then((res) => res.json());
  const promise2 = fetch(url2).then((res) => res.json());
  const promise3 = fetch(url3).then((res) => res.json());

  const [posts, albums, photos] = await Promise.all([
    promise1,
    promise2,
    promise3,
  ]);
  const combinedData = [
    posts.slice(0, 2),
    albums.slice(0, 3),
    photos.slice(0, 4),
  ];
  return combinedData;
}

async function fetchData() {
  const result = await fetchMultipleApiInParallel();
  console.log(result);
}

fetchData();
