/*
client module handle a TCP connection
*/

// * Establishes connection with the game server

const net = require("net");
const { IP, PORT } = require("./constants");

// ES6 object shorthand to export an object containing our connect function.

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // register event handler for connect Event. Triggered upon connection
  conn.on("connect", () => {
    console.log("connected to server ----------");
    conn.write("Name: TEJ");
  });

  conn.on("data", (data) => {
    console.log("Server says: _______", data);
  });

  return conn;
};

module.exports = { connect };
