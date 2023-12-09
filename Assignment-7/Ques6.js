// Implement a function that returns a resolved Promise after a specified delay using async/await.

function returnResolvedPromise() {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hii from promise after 5 seconds");
    }, 5000);
  });
  return promise;
}

async function delayedResult() {
  const response = await returnResolvedPromise();
  return response;
}

const returnedPromise = delayedResult();
returnedPromise.then((data) => console.log(data));
