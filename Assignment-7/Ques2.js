// Give an example of using multiple callback functions in a single function in JavaScript

function handleMultipleCallbacks(user, callback1, callback2) {
  if (user) {
    callback1(user);
  } else {
    callback2("No user available");
  }
}

function onError(error) {
  console.error("Error: ", error);
}

function onSuccess(user) {
  console.log("Success: ", user);
}

handleMultipleCallbacks("somil", onSuccess, onError);
