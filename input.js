/*
input module which will solely focus on managing the user input via stdin
*/
const { moveUp, moveDown, moveLeft, moveRight, bamText, ftwText } = require("./constants");

// Stores the active TCP connection object. Used to write new messages to the server.
let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  // * ctrl + c ====> EXIT application */
  if (key === "\u0003") {
    process.exit();
  } else if (key === "w") {
    connection.write(moveUp);
  } else if (key === "s") {
    connection.write(moveDown);
  } else if (key === "a") {
    connection.write(moveLeft);
  } else if (key === "d") {
    connection.write(moveRight);
  } else if (key === "p") {
    connection.write(bamText);
  } else if (key === "o") {
    connection.write(ftwText);
  }
};

// Export the setupInput function (as part of an object)
module.exports = { setupInput };
