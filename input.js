/*
input module which will solely focus on managing the user input
* Setup User Interface so that we can handle user input via stdin
*/
// const { UPKEY } = require("./constants");

// Stores the active TCP connection object. Used to write new messages to the server.
let connection;

// * ctrl + c ====> EXIT application */
const handleUserInput = function (key) {
  //console.log("key is -----------", key);
  if (key === "\u0003") {
    process.exit();
  }

  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  // The Say Message "P" for BAM
  if (key === "p") {
    connection.write("Say: BAM");
  }
};

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

// Export the setupInput function (as part of an object)
module.exports = { setupInput };
