function handleResponseFromAPI(promise) {
  promise
    .then((_) => {
      return {
        status: 200,
        body: "success",
      };
    })
    .catch((_) => {
      return new Error();
    })
    .finally((_) => {
      console.log("Got a response from the API");
    });
}

export default handleResponseFromAPI;
