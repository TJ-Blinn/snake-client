// This will serve as our main file through which we will launch the game client.
// IP address and port information: 10.0.0.209 PORT 50541
// Snek-multiplayer IP: 10.0.2.15 PORT: 50541

const { connect } = require("./client");
// const connect = require("./client");

const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();
