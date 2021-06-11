export default {
  getName: () =>
    new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve({
          name: "zkx",
        });
      }, 20000);
    }),
};
