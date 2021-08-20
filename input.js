/*
input module which will solely focus on managing the user input via stdin
*/
const { moveUp, moveDown, moveLeft, moveRight, bamText, ftwText } = require("./constants");

// Stores the active TCP connection object. Used to write new messages to the server.
let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  // stdin.on("data", handleUserInput);

  return stdin;
};

let cb;

const handleUserInput = function(key) {
  const interval = function(key) {
    cb = setInterval(() => {
      connection.write(key);
    }, 500);
  };

  // * ctrl + c ====> EXIT application */
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    clearInterval(cb);
    interval(moveUp);
  }
  if (key === "s") {
    clearInterval(cb);
    interval(moveDown);
  }
  if (key === "a") {
    clearInterval(cb);
    interval(moveLeft);
  }
  if (key === "d") {
    clearInterval(cb);
    interval(moveRight);
  }
  if (key === "p") {
    clearInterval(cb);
    interval(bamText);
  }
  if (key === "o") {
    clearInterval(cb);
    interval(ftwText);
  }
};

// Export the setupInput function (as part of an object)
module.exports = { setupInput };
