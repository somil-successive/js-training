// Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

function fetchDataUsingPromise(userId) {
  const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const promise = fetch(apiUrl);
  return promise.then((response) => {
    return response.json();
  });
}

fetchDataUsingPromise(1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
