function init({ host = "localhost", port = 3000, ...rest }) {
  console.log(host, port);
  next(rest);
}
function next(params) {
  console.log(params);
}

init({ host: "example.com", username: "johnsmith" });
