// This will serve as our main file through which we will launch the game client.
// IP address and port information: 10.0.0.209 PORT 50541
// Snek-multiplayer IP: 10.0.2.15 PORT: 50541

const { connect } = require("./client");
// const connect = require("./client");

// * Setup User Interface so that we can handle user input via stdin

// * ctrl + c ====> EXIT application */
const handleUserInput = function (key) {
  //console.log("key is -----------", key);
  if (key === "\u0003") {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

console.log("Connecting ...");
connect();

setupInput();
