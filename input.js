/*
input module which will solely focus on managing the user input
* Setup User Interface so that we can handle user input via stdin
*/

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

// Export the setupInput function (as part of an object)
module.exports = { setupInput };
