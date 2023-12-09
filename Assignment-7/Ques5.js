// Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

class RateLimiter {
  constructor(limit) {
    this.limit = limit;
    this.pending = [];
    this.activeRequests = 0;
  }

  async addToPending(requestFunction) {
    return new Promise(async (resolve, reject) => {
      if (this.activeRequests < this.limit) {
        this.executeRequest(requestFunction, resolve, reject);
      } else {
        this.pending.push({ requestFunction, resolve, reject });
      }
    });
  }

  async executeRequest(requestFunction, resolve, reject) {
    this.activeRequests++;
    try {
      const result = await requestFunction();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.activeRequests--;
      if (this.pending.length > 0) {
        const nextRequest = this.pending.shift();
        this.executeRequest(
          nextRequest.requestFunction,
          nextRequest.resolve,
          nextRequest.reject
        );
      }
    }
  }
}

const rateLimiter = new RateLimiter(3);

function simulateAPICall(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Request ${id} completed`);
    }, 1000);
  });
}

(async () => {
  for (let i = 0; i <= 10; i++) {
    rateLimiter
      .addToPending(() => simulateAPICall(i))
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
})();
