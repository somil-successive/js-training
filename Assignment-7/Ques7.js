// Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

function asyncFunc1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("hi after 2 sec");
    }, 2000);
  });
}

function asyncFunc2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("hi after 1 sec");
    }, 1000);
  });
}

function asyncFunc3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("hi after 4 sec");
    }, 4000);
  });
}

const resovingAllAsync = async () => {
  const p1 = asyncFunc1();
  const p2 = asyncFunc2();
  const p3 = asyncFunc3();
  const result = await Promise.all([p1, p2, p3]);
  return result;
};

const promise = resovingAllAsync();

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
